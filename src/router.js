import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import CardDetail from './views/CardDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'
import { useAuth } from './composables/useAuth'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/project5/', name: 'Home', component: HomePage },
  { path: '/project5/recipes/:id', name: 'CardDetail', component: CardDetail },
  { path: '/project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/project5/settings', name: 'SettingsPage', meta: { requiresAuth: true }, component: SettingsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
