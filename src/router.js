import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Profile from './views/perfile.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      component: Home,
    },
    {
      path: '/perfile',
      name: 'perfile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'goodList',
      component: Login,
    },
  ],
});
