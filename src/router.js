import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Shop from './views/Shop.vue';
import Profile from './views/Perfile.vue';
import Search from './views/Search.vue';
import goodList from './components/goodList.vue'

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Shop,
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
