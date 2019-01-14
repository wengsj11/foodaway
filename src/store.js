import Vue from 'vue';
import Vuex from 'vuex';
import api from './api/server';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUserInfo(state, user) {
      state.user = { ...state.user, ...user };
    },
  },
  actions: {
    userLoginByCode({ commit }, { phone, code }) {
      return api.loginByCode(phone, code).then((res) => {
        const { data } = res;
        if (data.status === 1) {
          console.log(data);
          commit('setUserInfo', data.data);
        } else {
          console.log(data.msg);
        }
      });
    },
    userLoginByPwd({ commit }, { account, password }) {
      return api.loginByPwd(account, password).then((res) => {
        const { data } = res;
        if (data.status === 1) {
          console.log(data);
          commit('setUserInfo', data.data);
        } else {
          console.log(data.msg);
        }
      });
    },
  },
});
