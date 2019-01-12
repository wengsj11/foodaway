import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import About from './views/About.vue';
// import ShopList from './components/ShopList.vue';
// import ShopHeader from './components/ShopHeader.vue';
// import Shop from './views/Shop.vue';
import Profile from './views/perfile.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/perfile',
      name: 'perfile',
      component: Profile,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    // {
    //   path: '/ShopList',
    //   name: 'ShopList',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './components/ShopList.vue'),
    // },
  ],
});
