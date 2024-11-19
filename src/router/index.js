import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/LoginComponent.vue';
import Dashboard from '@/components/DashboardComponent.vue';
import NewOperation from "@/components/NewOperation.vue";

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: "/new-operation", component: NewOperation },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
