import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetUno, presetAttributify } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetWebFonts({
          provider: 'none',
          fonts: {
            digital: [
              {
                name: 'Digital',
                weights: [400, 700],
              }
            ]
          }
        })
      ]
    })
  ]
})
