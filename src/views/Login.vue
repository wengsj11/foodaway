<template>
     <div class="login">
        <router-view></router-view>
        <div class="load">
            <p>温馨提示：未注册饿了么账户的手机号，登陆时将自动注册，且代表您已经同意<span id="aggrement">《用户服务协议》</span></p>
            <mt-button type="default" size="large" :style="{backgroundColor:'#44db5e',color:'#fff'}">登录</mt-button>
        </div> 
    </div> 
</template>

<script>

export default {
    data(){
        return {
        };
    },
};

</script>
<style>
.login{
  background-color: #f2f2f2;
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



