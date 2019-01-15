import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Takeouts from './views/subviews/Takeouts.vue';
import Order from './views/subviews/Order.vue';
import Find from './views/subviews/Find.vue';
import Profile from './views/subviews/Profile.vue';

import Login from './views/Login.vue';
import Shop from './views/Shop.vue';
import Search from './views/Search.vue';
import build from './views/Build.vue';
import goodList from './components/goodList.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index',
          name: 'takeouts',
          component: Takeouts,
        },
        {
          path: '/index/order',
          name: 'order',
          component: Order,
        },
        {
          path: '/index/find',
          name: 'search',
          component: Find,
        },
        {
          path: '/index/profile',
          name: 'profile',
          component: Profile,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/goodList',
      name: 'goodList',
      component: goodList,
    },
    {
      path: '/building',
      name: 'build',
      component: build,
    },
  ],
});
