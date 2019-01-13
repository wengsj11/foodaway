<template>
  <!-- 短信登陆 -->
  <div>
    <Top title="登录" :left="{path:'/index',icon:'back'}" :right="{path:'/login/pwd',text: '密码登录'}"></Top>
    <div :style="{marginTop:'.26rem'}">
      <mt-field placeholder="手机号" type="tel" v-model="phone" >
        <mt-button type="primary" size="small" @click="getCaptcha">获取验证码</mt-button>
      </mt-field>
      
      <mt-field placeholder="验证码" v-model="captcha"></mt-field>
    </div>
  </div>
</template>
<script>
import Top from '../components/Top';
export default {
  data() {
    return {
      phone:'',
      captcha:'',
    };
  },
  methods: {
    getCaptcha(){

    },
  },
  components: {
    Top,
  },
}
</script>
<style>
a{
    background-image:none !important;
}
.mint-cell-wrapper{
  border-bottom: 1px solid #d9d9d9 !important;
  background-image:none !important;
}
</style>
