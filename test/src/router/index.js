import Vue from 'vue'
import Router from 'vue-router'
import Main1 from '@/components/main1'
import System from '@/components/system'
import Storeadd from '@/components/storeadd'
import Register from '@/components/register'
import imagesinfo from '@/components/imagesinfo'
import main from '@/components/main'
import top from '@/components/top'
import goodsinfo from '@/components/goodsinfo'
import login from '@/components/login'
import login_1 from '@/components/login_1'
import cart from '@/components/cart'
import order from '@/components/order'
import orderlist from '@/components/orderlist'
import Lunbo from '@/components/lunbo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main1',
      component: main1
    },
    {
        path: '/Main',
        name: 'Main',
        component: Main
      },
     {
      path: '/Lunbo',
      name: 'Lunbo',
      component:Lunbo
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
   {
     	path: '/top',
     	name: 'top',
     	component: top,
    },
    {
     	path: '/goodsinfo',
     	name: 'goodsinfo',
     	component: goodsinfo,
    },
    {
     	path: '/login',
     	name: 'login',
     	component: login,
    },
    {
     	path: '/login_1',
     	name: 'login_1',
     	component: login_1,
    },
    {
     	path: '/cart',
     	name: 'cart',
     	component: cart,
    },
    {
     	path: '/order',
     	name: 'order',
     	component: order,
    },
    {
     	path: '/orderlist',
     	name: 'orderlist',
     	component: orderlist,
    },
  ]
})
