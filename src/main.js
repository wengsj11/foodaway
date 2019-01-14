/* eslint-disable*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css' 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入iview
import 'iview/dist/styles/iview.css';
import iView from 'iview';
//axios
import axios from 'axios';
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true // 设置可以使用session
Vue.use(iView);
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
