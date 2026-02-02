import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@pages/Index.vue')
    },
    {
      path: '/commerce',
      name: 'commerce',
      component: () => import('@pages/commerce/Index.vue')
    },
    {
      path: '/commerce/video-tutorial',
      name: 'commerce-video',
      component: () => import('@pages/commerce/Video.vue')
    },
    {
      path: '/commerce/guidline-book/introduction',
      name: 'commerce-intro',
      component: () => import('@pages/commerce/Introduction.vue')
    },
    {
      path: '/commerce/guidline-book/dashboard',
      name: 'commerce-dashboard',
      component: () => import('@pages/commerce/Dashboard.vue')
    },
    {
      path: '/commerce/guidline-book/product',
      name: 'commerce-prodcut',
      component: () => import('@pages/commerce/Product.vue')
    },
    {
      path: '/commerce/guidline-book/portfolio',
      name: 'commerce-portfolio',
      component: () => import('@pages/commerce/Portfolio.vue')
    },
    {
      path: '/commerce/guidline-book/order',
      name: 'commerce-order',
      component: () => import('@pages/commerce/Order.vue')
    },
    {
      path: '/commerce/guidline-book/customer',
      name: 'commerce-customer',
      component: () => import('@pages/commerce/Customer.vue')
    },
    {
      path: '/commerce/guidline-book/voucher',
      name: 'commerce-voucher',
      component: () => import('@pages/commerce/Voucher.vue')
    },
    {
      path: '/commerce/guidline-book/setting',
      name: 'commerce-setting',
      component: () => import('@pages/commerce/Setting.vue')
    },
    {
      path: '/commerce/guidline-book/faq',
      name: 'commerce-faq',
      component: () => import('@pages/commerce/Faq.vue')
    },
    {
      path: '/compro',
      name: 'compro',
      component: () => import('@pages/compro/Index.vue')
    },
    {
      path: '/compro/guidline-book/introduction',
      name: 'compro-intro',
      component: () => import('@pages/compro/Introduction.vue')
    },
    {
      path: '/compro/guidline-book/dashboard',
      name: 'compro-dashboard',
      component: () => import('@pages/compro/Dashboard.vue')
    },
    {
      path: '/compro/guidline-book/inbox',
      name: 'compro-inbox',
      component: () => import('@pages/compro/Inbox.vue')
    },
    {
      path: '/compro/guidline-book/portfolio',
      name: 'compro-portfolio',
      component: () => import('@pages/compro/Portfolio.vue')
    },
    {
      path: '/compro/guidline-book/team',
      name: 'compro-team',
      component: () => import('@pages/compro/Team.vue')
    },
    {
      path: '/compro/guidline-book/education-dev',
      name: 'compro-edu',
      component: () => import('@pages/compro/EducationDev.vue')
    },
    {
      path: '/compro/video-tutorial',
      name: 'compro-video',
      component: () => import('@pages/compro/Video.vue')
    },
  ]
})

export default router
