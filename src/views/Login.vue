<template>
     <div class="login">
            <!-- 头部 -->
        <header class="hd">
             <div class="left"></div>
             <span class="title">登陆</span>
             <span class="msgload">密码登陆</span>
        </header>
        <!-- 短信登陆 -->
        <div class="msg">
                <input id="phone" type="text" name="phone" maxlength="11" required placeholder="手机号">
                <button id="getcode">获取验证码</button> 
                <input id="code" type="text" name="code" maxlength="4" placeholder="验证码">            
        </div>
        <!-- 密码登陆 -->
        <div class="usr">
                <input id="name" type="text" name="name" maxlength="11" required placeholder="手机号/邮箱／用户名">
                <input id="password" type="password" name="password" maxlength="8" placeholder="密码"> 
                <!-- 显示密码 待写-->
                <div class="open">
                    <div class="turn"></div>
                </div>
                <input id="pcode" type="text" name="pcode" maxlength="4" placeholder="验证码">
                <!-- 图形验证码，待写 -->
                <div></div>   
        </div>
        <div class="load">
            <p>温馨提示：未注册饿了么账户的手机号，登陆时将自动注册，且代表您已经同意</p><span id="aggrement">《用户服务协议》</span>
            <button id="land">登陆</button>
        </div>
        </div> 
</template>


<script>
export default {
    
}


</script>


<style>
/* 布局样式 */
/* 全局 */
    button{background: #44db5e;}
    input{width:97%;height: 5.3rem;border: 0;font-size: 1.56rem;padding-left: 3%;margin-bottom: .2rem;}
    .login{width: 100%;height: 100%;background:#f2f2f2;margin: 0;font-family: "微软雅黑";}
    /* 标题 */
    .hd{width:100%;height:80px;background: #298eeb;color: white;display: flex;justify-content: space-between;line-height: 5rem;}
    .left{width: 1rem ;height: 1rem ;background:#298eeb;border-left:.2rem solid white;border-bottom:.2rem solid white; transform:rotate(45deg);margin-left: .97rem;margin-top: 1.8rem;}
    .hd .title{font-size:1.56rem; }
    .hd .msgload{font-size: 1.25rem;margin-right: 0.5rem;}
    /* 短信 */
    #phone{margin-top: 1.56rem;position: relative;margin-bottom: 0.1rem;}
      ::-webkit-input-placeholder {
        color: #999;
        font-size: 1.16rem;
    }
    ::-moz-placeholder {
        color: #999;
        font-size: 1.16rem;
    }
    :-ms-input-placeholder {
        color: #999;
        font-size: 1.16rem;
    }
    #getcode{width: 10.625rem;height: 3.44rem;color:#9f9d9d;position: absolute;right: .5rem;top:12.5rem;z-index: 999;border:0;border-radius: .3rem;font-size: 1.56rem;}
    /* 账号密码 */
    .usr{display: none;}
    #password{position: relative;}
    .open{position: absolute;width: 4rem;height: 2rem;background: #9f9d9d;border: 0;border-radius:1rem;right: .2rem;top:14rem; }
    .turn{width: 2rem;height: 2rem;background: white;border: 0;border-radius: 1rem;margin-left: .1rem ;}
    /* 协议和登陆按钮 */
    .load{font-size: 1.25rem ; width: 90%;height: 11.25rem;margin: 1.25rem auto;}   
    .load p,span{display: inline;text-align: left;} 
    .load p{color: #9f9d9d;}
    #aggrement{color:#298eeb;}
    #land{width:100%;height: 4.375rem;border: 0;border-radius:.3rem;color: white;font-size:1.56rem; margin-top: 1.25rem;}

</style>

