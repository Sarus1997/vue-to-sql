import { createRouter, createWebHashHistory } from 'vue-router';
import { ref, computed } from 'vue';
import HomePage from '@/views/HomePage.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  const route = routes.find(r => r.path === currentPath.value.slice(1) || '/');
  return route ? route.component : NotFound;
});

export { router, currentPath, currentView };
export default router;
