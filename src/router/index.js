import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

//admin components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      //当某个路由有子级路由时，父级路由需要一个默认的路由，所以父级路由不能定义name属性，解决办法是去掉name:'Home'就可以了
      //name: 'Admin',
      component: Index,

      //child routes
      children: [
          {
            path: 'New',
            name: 'New',
            component: New
          },
          {
            path: '',
            name: 'Products',
            component: Products
          },
          {
            path: 'Edit/:id',
            name: 'Edit',
            component: Edit
          },
      ]

    },


  ]
})
