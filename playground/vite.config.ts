import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Uno from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Uno()],
})
