import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dunialydie_bento-landingpage/",
  plugins: [react()],
})
