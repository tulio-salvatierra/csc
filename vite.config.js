import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const GTM_ID = process.env.VITE_GTM_ID || 'GTM-WN7JPVGX'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-transform-gtm',
      transformIndexHtml(html) {
        return html.replace(/%VITE_GTM_ID%/g, GTM_ID)
      },
    },
  ],
})