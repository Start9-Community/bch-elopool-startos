# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **The two endpoints are genuinely different, and the difference is `ckpool -B`.** Shared mining pays a found block to `btcaddress` — the operator — and the operator settles with miners off-chain. `-B` is btcsolo: the coinbase pays the miner that found the block. Its sibling package, ASICSeer, has no solo mode at all because its upstream has none; don't mirror changes between the two without checking which upstream they land on.
- **`poolfee` is a percentage paid to `pooladdress`, and both are required.** ckpool computes `reward / 100 * poolfee` and gates the fee output on `poolvalid`, which is only set when `pooladdress` validates — so without that address no fee is taken however high the percentage. It also reads the number through jansson's `json_is_real`, which is false for a whole number. `fileModels/ckpool.conf.ts` handles the float; `main.ts` sets `pooladdress` and applies the fee to the **solo** config only, writing `poolfee: 0` on shared because the block already pays the operator. A revision of this package divided the fee by a hundred _and_ never set the address; it collected nothing.
- **`Dockerfile` builds ckpool from source, natively per arch.** Don't reintroduce the `--platform=linux/amd64` pin on the builder stage: it put amd64 binaries in the aarch64 image while the manifest claimed that arch.
- **`main` must never throw for a user-fixable problem.** A thrown `main` crash-loops under auto-restart and leaks a mount set every cycle, so the missing/mismatched address and unreachable node paths return a single failing `mining` health check instead.
- **Statistics must be wiped before the daemons launch.** ckpool reloads its totals from its status file at start, so clearing under a running pool achieves nothing. A chain change wipes both pools too — shares counted at one chain's difficulty mean nothing on another.
- **BCHN remaps its RPC port per chain**; BCHD and Flowee are fixed. BCHD is dialed through its plaintext proxy so no certificate has to be trusted.
- **The node is reached with `sdk.host.getBridgeAddress`, never `<package-id>.startos`** — that overlay DNS is deprecated and forbidden.
- **Each mining check scrapes its own log before probing its port.** ckpool holds the stratum port open while it cannot get a block template, so a bare port check reports a pool that mines nothing.
