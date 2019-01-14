import axios from 'axios';
/**
  axios数据接口
*/
const apiService = {
  getMenusData() {
    return axios.get('http://localhost:3000/menus');
  },
  getRestaurantsData(page, csid) {
    let url = 'http://localhost:3000/restaurants?page=' + page;
    url += (csid ? '&csid=' + csid : '');
    return axios.get(url);
  },
  loginByCode(phone, code) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/login/code',
      data: {
        phone,
        code,
      },
    });
  },
  loginByPwd(account, password) {
    return axios({
      method: 'post',
      url: 'http://localhost:3000/login/pwd',
      data: {
        account,
        password,
      },
    });
  },
};

export default apiService;
