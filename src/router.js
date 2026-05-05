import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import AboutPage from '@/components/AboutPage.vue';
import ContactPage from '@/components/ContactPage.vue';
import ExecutiveCoaching from '@/components/ExecutiveCoaching.vue';
import ForTeamsPage from '@/components/ForTeamsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/work-with-me', component: ExecutiveCoaching },
  { path: '/organizations', component: ForTeamsPage }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
