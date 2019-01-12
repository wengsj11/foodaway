import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import ShopList from './components/ShopList.vue';
import ShopHeader from './components/ShopHeader.vue';
import Shop from './views/Shop.vue';
import perfile from './views/perfile.vue';
import Login from './views/Login.vue';
import Search from './views/Search.vue';
import goodList from './components/goodList.vue';



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'goodList',
      component: goodList,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
