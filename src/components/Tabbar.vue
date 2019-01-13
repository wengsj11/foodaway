<template>
  <Row type="flex" id="footer">
      <Col span="6" order="1">
        <router-link to="/">
          <Icon type="ios-home" size="20"/>
            <p>外卖</p>
        </router-link>
      </Col>
      <Col span="6" order="2">
        <router-link to="/">
          <Icon type="ios-home" size="20"/>
          <p>搜索</p>
        </router-link>
      </Col>
      <Col span="6" order="3">
        <router-link to="/">
          <Icon type="ios-home" size="20"/>
          <p>订单</p>
        </router-link>
      </Col>
      <Col span="6" order="4">
        <router-link to="/perfile">
          <Icon type="ios-home" size="20"/>
            <p>我的</p>
        </router-link>
      </Col>
      
  </Row>
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
<style scoped>
  #footer{
    line-height: .42rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

