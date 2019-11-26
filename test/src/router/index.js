import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import System from '@/components/system'
import Storeadd from '@/components/storeadd'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/System',
      name: 'System',
      component:System
    },
    {
      path: '/Storeadd',
      name: 'Storeadd',
      component:Storeadd
    },
  ]
})
