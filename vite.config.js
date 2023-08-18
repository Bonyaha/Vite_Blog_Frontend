import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: [
      {
        find: "common",
        replacement: path.resolve(__dirname, "src/common"),
      },
    ],
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
    },
    open: true,
    port: 3000,
    host: true
  },
  entry: './src/index.jsx'
})
