/* eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css' //注意'./'一定要加不然会报
// 引入iview
import 'iview/dist/styles/iview.css';
import iView from 'iview';
console.log(iView);

Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
