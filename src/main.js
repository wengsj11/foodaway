/* eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
// import VueRouter from 'vue-router';
import router from './router';
import store from './store';
//vantui
// import { Card } from 'vant';
//引入iview
import './assets/css/reset.css' //注意'./'一定要加不然会报错
import { Button, Table, Rate, Cell, CellGroup, Card, Badge, Icon, Input} from 'iview';
// vantui
import { Card } from 'vant';
// 引入iview
import 'iview/dist/styles/iview.css';
import { Button, Table, Rate } from 'iview';
import { Content, Footer, Header,Layout } from 'iview';
import iView from 'iview';
Vue.use(iView);
Vue.component('Layout', Layout);
Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('CellGroup', CellGroup);
Vue.component('Cell', Cell);
Vue.component('Badge', Badge);
Vue.component('Input', Input);
Vue.component('Icon', Icon);
//使用vant
// Vue.use(Card);
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
