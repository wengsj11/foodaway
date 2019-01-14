import axios from 'axios';
/**
  axios数据接口
*/
const apiService = {
  getMenusData() {
    return axios.get('http://localhost:3000/menus');
  },
  getRestaurantsData(page, csid) {
    // return axios({
    //   method: 'get',
    //   url: 'http://localhost:3000/restaurants',
    //   data: { page, csid },
    // });
    let url = 'http://localhost:3000/restaurants?page=' + page;
    url += (csid ? '&csid=' + csid : '');
    return axios.get(url);
  },
  // /* GET方式获取班级成员数据 */
  // getClassMembers(id = '', param='') {
  //   return axios.get(host + '/members/' + id + '?' +param);
  // },
  // /* POST方式发送班级成员数据 */
  // postClassMembers(data, id = '') {
  //   return axios.post(host + '/members/' + id, data);
  // }
};

export default apiService;
