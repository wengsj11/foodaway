<template>
  <!-- 密码登陆 -->
  <div>
    <Top title="登录" :left="{path:'/index',icon:'back'}" :right="{path:'/login',text: '短信登录'}"></Top>
    <div :style="{marginTop:'.26rem'}">
      <mt-field placeholder="手机号/邮箱/用户名" v-model="account"></mt-field>
      <mt-field placeholder="密码" type="password" v-model="password">
        <mt-switch v-model="pwdseen"></mt-switch>
      </mt-field>
      <mt-field placeholder="验证码" v-model="code">
        <img src="../assets/logo.png" height="45px" width="100px">
        <span class="code-tips">看不清<span>换一张</span></span>
      </mt-field>
    </div>
  </div>
</template>
<script>
import Top from '../components/Top';
export default {
  data() {
    return {
      account:'',
      password:'',
      code:'',
      pwdseen: false,
    }
  },
  components: {
    Top,
  },
}
</script>
<style>
  .code-tips{
    margin-left: .2rem;
    display: inline-block;
    font-size: .12rem;
    width: .7rem;
    line-height: .4rem;
    vertical-align:middle;
  }
  .code-tips span{
    display: block;
    color:#439aee;
  }
</style>