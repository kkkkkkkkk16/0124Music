import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      // component: require('@/components/LandingPage').default,
      component: HomePage,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
