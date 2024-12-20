import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = []

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
