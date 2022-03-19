import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const createRouter = () =>
  new VueRouter({
    base: import.meta.env.BASE_URL,
    mode: 'history',
    routes: [
      {
        path: '/',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/booking',
        component: () => import('@/views/Booking.vue'),
      },
      {
        path: '/booking-manage',
        component: () => import('@/views/BookingManage.vue'),
      },
      {
        path: '/booking-upload',
        component: () => import('@/views/BookingUpload.vue'),
      },
      {
        path: '/authority',
        component: () => import('@/views/Authority.vue'),
      },
    ],
  })

const router = createRouter()
export default router
