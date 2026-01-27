import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pages/Index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@pages/Dashboard.vue')
    },
    {
      path: '/product',
      name: 'prodcut',
      component: () => import('@pages/Product.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('@pages/Portfolio.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@pages/Order.vue')
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('@pages/Customer.vue')
    },
    {
      path: '/voucher',
      name: 'voucher',
      component: () => import('@pages/Voucher.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@pages/Setting.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('@pages/Faq.vue')
    },
    {
      path: '/user-management',
      name: 'user-management',
      component: () => import('@pages/UserManagement.vue')
    },
  ]
})

export default router
