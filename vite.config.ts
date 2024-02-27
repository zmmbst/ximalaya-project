import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
server:{
  proxy:{
    '/revision':{
      target:'https://m.ximalaya.com',
      changeOrigin:true,

    }
  }
}


})
