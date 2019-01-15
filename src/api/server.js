import axios from 'axios';
/**
  axios数据接口
*/
const host = 'http://192.169.137.1:3000';
const apiService = {
  getMenusData() {
    return axios.get(`${host}/menus`);
  },
  getRestaurantsData(page, csid) {
    let url = `${host}/restaurants?page=${page}`;
    url += (csid ? (`&csid=${csid}`) : '');
    return axios.get(url);
  },
  loginByCode(phone, code) {
    return axios({
      method: 'post',
      url: `${host}/login/code`,
      data: {
        phone,
        code,
      },
    });
  },
  loginByPwd(account, password) {
    return axios({
      method: 'post',
      url: `${host}/login/pwd`,
      data: {
        account,
        password,
      },
    });
  },
};

export default apiService;
