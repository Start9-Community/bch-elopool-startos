'use strict'
// Tiny HTTP server: handles POST /api/delete-worker?address=<addr>&mode=pool|solo
// Writes a tombstone so stats-api.sh suppresses the worker until its next share.
// Listens on 127.0.0.1:8181 only; nginx proxies /api/delete-worker to it.
var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

// Accept cashaddr (bitcoincash:q/p...) and legacy base58 (1.../3...) addresses.
// Also allow bare cashaddr without the "bitcoincash:" prefix (some pools strip it).
var SAFE_ADDR =
  /^(bitcoincash:[pq][a-z0-9]{41,50}|[pq][a-z0-9]{41,50}|[13][a-zA-Z0-9]{25,34})$/i

// Only the dashboard itself may delete. A browser sends Origin on every POST;
// when present it must name the host the request was sent to (nginx passes the
// client's Host through). The custom header can't be set by a cross-site form
// or simple request, and with no CORS headers here its preflight fails.
function sameOrigin(req) {
  var origin = req.headers.origin
  if (origin === undefined) return true
  var host = req.headers.host
  if (!host) return false
  try {
    return new URL(origin).host === host.toLowerCase()
  } catch (e) {
    return false
  }
}

http
  .createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json')

    if (req.method !== 'POST') {
      res.writeHead(405)
      res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }))
      return
    }

    var parsed = url.parse(req.url, true)
    if (parsed.pathname !== '/api/delete-worker') {
      res.writeHead(404)
      res.end(JSON.stringify({ ok: false, error: 'Not found' }))
      return
    }

    if (
      !sameOrigin(req) ||
      req.headers['x-requested-with'] !== 'elopool-dashboard'
    ) {
      res.writeHead(403)
      res.end(JSON.stringify({ ok: false, error: 'Forbidden' }))
      return
    }

    var address = String(parsed.query.address || '').trim()
    var mode = String(parsed.query.mode || '').trim()

    if (mode !== 'pool' && mode !== 'solo') {
      res.writeHead(400)
      res.end(JSON.stringify({ ok: false, error: 'Invalid mode' }))
      return
    }

    if (!SAFE_ADDR.test(address)) {
      res.writeHead(400)
      res.end(JSON.stringify({ ok: false, error: 'Invalid address format' }))
      return
    }

    // path.basename strips any directory traversal attempts
    var safeAddr = path.basename(address)
    var tombPath = '/data/' + mode + '/log/users/.tomb.' + safeAddr
    var nowSec = Math.floor(Date.now() / 1000)

    // stats-api.sh clears the tombstone once lastshare advances past it.
    fs.writeFile(tombPath, String(nowSec), function (tombErr) {
      if (tombErr) {
        res.writeHead(500)
        res.end(
          JSON.stringify({
            ok: false,
            error: 'Could not write tombstone: ' + tombErr.message,
          }),
        )
        return
      }
      res.writeHead(200)
      res.end(JSON.stringify({ ok: true, address: address, mode: mode }))
    })
  })
  .listen(8181, '127.0.0.1')
