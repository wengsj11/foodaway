<template>
  <Footer>
      <Row type="flex">
          <Col span="6" order="4">
            <router-link to="/perfile">
                我的
            </router-link>
          </Col>
          <Col span="6" order="3">
            <router-link to="/">
                订单
            </router-link>
          </Col>
          <Col span="6" order="2">
            <router-link to="/">
              搜索
            </router-link>
          </Col>
          <Col span="6" order="1">
            <router-link to="/home">
                外卖
            </router-link>
          </Col>
      </Row>
  </Footer>
</template>
<script>
import {Row,Col} from 'iview';

export default {
  data() {
    return {
      selected: 'tab1',
    };
  },
  components:{
    Row,Col
  }
};
</script>
