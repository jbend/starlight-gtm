import type { StarlightPlugin } from '@astrojs/starlight/types'
import { setGTMId } from './gtm-config.js'

export interface StarlightGTMPluginOptions {
  gtmId: string
}

export default function starlightGTMPlugin(options: StarlightGTMPluginOptions): StarlightPlugin {
  const { gtmId: id } = options

  if (!id) {
    throw new Error('starlight-gtm: gtmId is required')
  }

  // Store GTM ID for component access
  setGTMId(id)

  return {
    name: 'starlight-gtm',
    hooks: {
      'config:setup': async ({ injectScript, updateConfig }: any) => {
        // GTM script for head
        const gtmHeadScript = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${id}');
        `
        
        // injectScript('head', gtmHeadScript)

        // Override SkipLink component to inject GTM noscript in body
        updateConfig({
          components: {
            SkipLink: './overrides/SkipLink.astro',
          },
        })
      },
    }
  }
}

