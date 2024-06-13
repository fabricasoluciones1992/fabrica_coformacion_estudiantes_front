import { createRouter, createWebHistory } from 'vue-router'
// import useAuthStore from '@/stores/authStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'byhome',
      component: () => import('../views/HomeView.vue'),
      
    },

    {
      path: '/protected',
      component: () => import('../components/layout/ProtectedAdminLayout .vue'),
      meta: {
        auth: true
      },
      children: [
        {
          path: '/students',
          name: 'students',
          component: () => import('../views/StudentsInfoView.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/academic/info',
          name: 'academicInfo',
          component: () => import('../views/historyCoformation.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/noti/center',
          name: 'notificationCenter',
          component: () => import('../views/notiCenter.vue'),
          meta: {
            auth: true
          }
        },
        {
          path: '/profile',
          name: 'byprofile',
          component: () => import('../views/ProfileView.vue'),
          meta: {
            auth: true
          }
        }
      ]
    }
  ]
})


export default router
