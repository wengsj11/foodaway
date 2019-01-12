/* eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';
import router from './router';
import store from './store';
// vantui
import { Card } from 'vant';
// 引入iview
import 'iview/dist/styles/iview.css';
import { Button, Table, Rate ,Layout} from 'iview';

Vue.component('Layout', Layout);
Vue.component('Button', Button);
Vue.component('Card', Card);
// Vue.component('CellGroup', CellGroup);
// Vue.component('Cell', Cell);

// Vue.component('Icon', Icon);
//使用vant
// Vue.use(Card);
// 动态设置路由滑动效果

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
