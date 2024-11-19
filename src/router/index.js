import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/LoginComponent.vue';
import Dashboard from '@/components/DashboardComponent.vue';
// import Operations from '@/components/Operations.vue';
// import Records from '@/components/Records.vue';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
//   { path: '/operations', name: 'Operations', component: Operations },
//   { path: '/records', name: 'Records', component: Records },
  { path: '/:pathMatch(.*)*', redirect: '/login' }, // Redirect invalid paths to login
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
