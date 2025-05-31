import { createRouter, createWebHistory } from 'vue-router'
import type { IRoute } from '@/lib/interfaces';
import Landing from '../views/Landing.vue'

export const routes: IRoute[] = [
  {
    path: '/',
    name: 'home',
    component: Landing
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

