import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0',
    port:10001,
    proxy:{
    '/api':{
      //  target:"https://bookstore-app-am3d.onrender.com",
       target:"http://localhost:10000",
       changeOrigin:true,
    }
   }
  },
  plugins: [react()],
})
