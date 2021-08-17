import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index.view'
import details from '@/views/details.view'

Vue.use(Router)

export default function createRouter() {
  return new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component:index
      },
      {
        path:'/details',
        component:details
      }
    ]
  })
}