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
        name: 'booking',
        path: '/booking',
        props: true,
        component: () => import('@/views/Booking.vue'),
      },
      {
        name: 'booking-manage',
        path: '/booking-manage',
        component: () => import('@/views/BookingManage.vue'),
      },
      {
        path: '/booking-upload',
        component: () => import('@/views/BookingUpload.vue'),
      },
      {
        path: '/authorities',
        component: () => import('@/views/Authority.vue'),
      },
      {
        path: '/customers',
        component: () => import('@/views/Customer.vue'),
      },
      {
        path: '/rooms',
        component: () => import('@/views/Room.vue'),
      },
      {
        path: '/room-types',
        component: () => import('@/views/RoomType.vue'),
      },
      {
        path: '/report',
        component: () => import('@/views/Report.vue'),
      },
    ],
  })

const router = createRouter()
export default router
