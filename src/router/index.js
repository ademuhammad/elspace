import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/Landingpage.vue'
import About from '@/views/About.vue'
import Course from '@/views/Course.vue'
import CourseDetail from '@/views/CourseDetail.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

// misalnya ada halaman register juga:
// import RegisterPage from '../views/RegisterPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/About', name: 'About', component: About },
  { path: '/Course', name: 'Course', component: Course },
  {
    path: "/Course/:id",
    name: "CourseDetail",
    component: CourseDetail,
    props: true, // penting agar `id` dari URL jadi props
  },

  { path: '/Register', name: 'Register', component: RegisterPage },
  { path: '/Login', name: 'Login', component: LoginPage }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
