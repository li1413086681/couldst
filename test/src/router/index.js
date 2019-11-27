import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import System from '@/components/system'
import Storeadd from '@/components/storeadd'
import Register from '@/components/register'
import imagesinfo from '@/components/imagesinfo'

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
    {
      path: '/Register',
      name: 'Register',
      component:Register
    },
    {
      path: '/imagesinfo',
      name: 'imagesinfo',
      component:imagesinfo
    },
  ]
})
