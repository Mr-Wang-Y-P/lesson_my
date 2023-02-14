import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//es6 模块化
import {resolve} from 'path'
//文件 路径 属于哪个板块 os  io 模块
console.log(__dirname, resolve(__dirname, 'src'))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //路径别名 
  resolve:{
    alias:{
      '@':resolve(__dirname,'src'),
      '~':resolve(__dirname,'src/components')
    }
  }
})
