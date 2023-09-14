import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/modules/matricula/pages/CrearPage')
  },
  {
    path: '/todos',
    component: () => import('@/modules/matricula/pages/ConsultarPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
