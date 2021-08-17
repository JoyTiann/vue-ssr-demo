import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

export default function createApp(params) {
  const router = createRouter()
  const vue = new Vue({
    router,
    render :h => h(App)
  })
  return {vue,router}
}