import { createRouter, createWebHistory } from 'vue-router';

import Cuaca from '../components/cuaca.vue';
import Stopwatch from '../components/stopwatch.vue';
import Foto from '../components/foto.vue';
import Game from '../components/game.vue';

const routes = [
  { path: '/', component: Cuaca },
  { path: '/stopwatch', component: Stopwatch},
  { path: '/foto', component: Foto },
  { path: '/game', component: Game},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;