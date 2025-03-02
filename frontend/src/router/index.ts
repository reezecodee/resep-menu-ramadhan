import { createRouter, createWebHistory, type RouteMeta } from 'vue-router'
import DashboardLayoutVue from '@/layouts/dashboard.vue'

interface IRouteMeta {
  title: string
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/'
      // redirect: '/dashboard/home',
    },
    {
      path: '/',
      component: DashboardLayoutVue,
      redirect: '/home',
      meta: {
        title: 'Dashboard'
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/dashboard/examples/Home.vue'),
          meta: {
            title: 'Home'
          } as RouteMeta & IRouteMeta
        }
      ]
    }
  ]
})

router.beforeEach((loc) => {
  document.title = loc.meta.title as string
})

export default router
