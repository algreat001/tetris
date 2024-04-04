import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('@/views/StartScreenView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('@/views/GameView.vue'),
    },
    {
      path: '/:pathMatch(.*)*', // This is a catch-all route
      name: '404',
      component: () => import('@/views/StartScreenView.vue'),
    },
  ],
});

export default router;
