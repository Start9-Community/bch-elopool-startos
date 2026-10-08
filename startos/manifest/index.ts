import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'bch-elopool',
  title: 'EloPool',
  license: 'GPL-3.0',
  packageRepo: 'https://github.com/Start9-Community/bch-elopool-startos',
  upstreamRepo: 'https://github.com/skaisser/ckpool',
  marketingUrl: 'https://elopool.bch.sx',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    elopool: {
      source: { dockerBuild: {} },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
