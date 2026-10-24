import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.looseObject({
  btcd: z.array(
    z.looseObject({
      url: z.string(),
      auth: z.string(),
      pass: z.string(),
      notify: z.boolean(),
    }),
  ),
  bchaddress: z.string(),
  btcsig: z.string(),
  blockpoll: z.number(),
  update_interval: z.number(),
  serverurl: z.array(z.string()),
  mindiff: z.number(),
  startdiff: z.number(),
  maxdiff: z.number(),
  logdir: z.string(),
  poolfee: z.number(),
  pooladdress: z.string().optional(),
})

/** One per daemon, on the shared volume the dashboard's stats script reads. */
export const ckpoolConf = (mode: 'pool' | 'solo') =>
  FileHelper.json(
    { base: sdk.volumes.main, subpath: `${mode}/ckpool.conf` },
    shape,
  )
