import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/realtime-chat-local-session-storage/',
  plugins: [react()],
})
