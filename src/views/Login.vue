<template>
     <div class="login body-container">
        <!-- <router-view></router-view> -->
        <Top title="登录"
        :left="{icon:'back'}"
        :right="{text:codeLogin?'密码登录':'短信登录',click:switchLogin}"
        >
        </Top>
        <div :style="{marginTop:'.26rem'}" v-if="codeLogin">
            <mt-field placeholder="手机号" type="tel" v-model="phone" >
                <mt-button type="primary" size="small" @click="getCode" :disabled="codeDisabled">{{codeText}}</mt-button>
            </mt-field>
            <mt-field placeholder="验证码" v-model="code"></mt-field>
        </div>
        <div :style="{marginTop:'.26rem'}" v-else>
            <mt-field placeholder="手机号/邮箱/用户名" v-model="account"></mt-field>
            <mt-field placeholder="密码" :type="pwdseen?'text':'password'" v-model="password">
                <mt-switch v-model="pwdseen"></mt-switch>
            </mt-field>
            <mt-field placeholder="验证码" v-model="captcha">
                <img src="../assets/logo.png" height="45px" width="100px">
                <span class="code-tips">看不清<span>换一张</span></span>
            </mt-field>
        </div>
        <div class="load">
            <p>温馨提示：未注册饿了么账户的手机号，登陆时将自动注册，且代表您已经同意<span id="aggrement">《用户服务协议》</span></p>
            <mt-button 
            type="default"
            size="large"
            @click="codeLogin? loginByCode(): loginByPwd()"
            :style="{backgroundColor:'#44db5e',color:'#fff'}">
            登录
            </mt-button>
        </div> 
    </div> 
</template>

<script>
import Top from '../components/Top';
import api from '../api/server.js';
import axios from 'axios';
import { MessageBox } from 'mint-ui';

export default {
    data(){
        return {
            codeLogin: true,
            phone:'',
            code:'', //短信验证码
            codeText:'获取验证码',
            codeDisabled: false,
            account:'',
            password:'',
            captcha:'', //图形验证码
            pwdseen: false,
        };
    },
    methods: {
        switchLogin(){
            this.codeLogin = !this.codeLogin;
        },
         getCode(){
             if(!this.phone){
                 MessageBox('提示', '请先输入手机号');
                 return;
             }
             let seconds = 60;
             const timer = setInterval(()=>{
                 this.codeText = '已发送('+ seconds +')';
                 this.codeDisabled = true;
                 if(seconds-- <0){
                    clearInterval(timer);
                    this.codeText = '获取验证码'
                    this.codeDisabled = false;
                 }
             },1000)
             //发送验证码api
            api.getloginCode(this.phone).then((res)=>{
                const data = res.data;
                if(data.status === 1){
                    console.log(data.msg);
                } else {
                    console.log(data.msg);
                }
            }).catch((err)=>{
                console.log(err)
            });
        },
        loginByCode(){
            if(!this.phone || !this.code){
                 MessageBox('提示', '请先输入手机号和验证码');
                 return;
             }
            console.log('logincode');
            //短信登录
            api.loginByCode(this.phone,this.code).then((res)=>{
                const data = res.data;
                if(data.status === 1){
                    console.log(data);
                    this.$router.push('index');
                } else {
                    console.log(data.msg);
                }
            }).catch((err)=>{
                console.log(err)
            })
        },
        loginByPwd(){
            // if(!this.account || !this.password || !this.captcha){
            if(!this.account || !this.password){
                 MessageBox('提示', '请先输入账号密码和验证码');
                 return;
             }
            console.log('pwd login')
            //密码登录
            this.$store.dispatch('userLoginByPwd', { 
                account: this.account, 
                password: this.password 
            }).then((res)=>{
                this.$router.push('index');
            }).catch((err)=>{
                console.log(err)
            })
            // api.loginByCode(this.account, this.password).then((res)=>{
            //     const data = res.data;
            //     if(data.status === 1){
            //         console.log(data);
            //         this.$router.push('index');
            //     } else {
            //         console.log(data.msg);
            //     }
            // }).catch((err)=>{
            //     console.log(err)
            // })
        }
    },
    components: {
        Top,
    }
};

</script>
<style>
.login{
  background-color: #f2f2f2;
}
a{
    background-image:none !important;
}
.mint-cell-wrapper{
  border-bottom: 1px solid #d9d9d9 !important;
  background-image:none !important;
}
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
.load{
    padding: 0 .2rem;
}
.load p {
    margin: .17rem 0;
}
.load p span{
    color: #439aee;
}

</style>



