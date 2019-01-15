<template>
     <!-- 底部+购物车 -->
    <div class="bottomcar">
    <!-- 店家详情页底部 -->
    <nav class="bot">
        <div class="cart-img" @click="showCartInfo=!showCartInfo">
            <img src="../assets/icon/购物车.png">
        </div>
        <div class="fan" @click="showCartInfo=!showCartInfo">
            <h3 class="sum">¥  730</h3>
            <h4 class="send">配送费¥5</h4>
        </div>
        <p class="cart-topay">去结算</p>
    </nav>
    <!-- 整个页面 -->
    <div class="car-info" v-if="showCartInfo">
        <div class="car-title clearfix">
            <span>已选商品</span>
            <span class="fr">清空</span>
            <div class="icon_re fr"><img class="icon" src="../assets/icon/垃圾桶.png" /></div>
        </div>
        <div class="carwraper">
        <ul class="carList">
            <!-- 商品 -->
            <li class="clearfix" v-for="(item,i) in 20" :key="i">
                <!-- 品名 -->
                <div class="food fl">
                    <span class="food-name">双人分享套餐A</span><br>
                    <span class="beizhu">芝士</span>
                </div>
                    <!-- 价格 -->
                <div class="fr contrl">
                    <div class="icon"><img class="icon" src="../assets/icon/减.png" /></div>
                    <span class="num">1</span>
                    <div class="icon"><img class="icon" src="../assets/icon/加.png" /></div>
                </div>
                <span class="fr price">¥139</span>
            </li>
        </ul>
        </div>
    </div>
    <div class="shadow" v-if="showCartInfo"></div>

</div>
</template>

<script>
export default {
    data(){
        return{
            showCartInfo:false,
        }
    },
}
</script>

 <style scoped>
        /* 全局,要注意 */
        /* 整个购物车 */
        .bottomcar{width: 100%;position: relative;line-height: 1;}
        /* 底部结算 */
        .bot{position: relative;bottom: 0;left: 0;height: .8rem;background: #3d3e3f;z-index: 980;}
        .cart-img{margin-left: .3rem;background: #3d3e3f;border-radius: 50%;width: 1rem;height: 1rem;padding: .1rem;text-align: center;position: absolute;left: 0;top: -.25rem;}
        .cart-img img{width: 100%;height: 100%;align-items: center;font-size: .7rem;background: #fff;border-radius: 50%;}
        .fan{height: .8rem;color: #fff;padding-left: 1.6rem;}
        .sum  {font-size: .3rem;font-weight: normal;font-family: '宋体';line-height: 1.5;}
        .send {font-size: .2rem;font-weight: normal;line-height: 1.5;}
        .cart-topay{width: 1.8rem;height: .8rem;color: #fff;background: #4cd964;line-height: .8rem;position: absolute;top: 0;right: 0;text-align: center;align-items: center;font-size: .27rem;}
        .carList {background: #fff;overflow: scroll;height: 100%;}
        .car-title {height: .6rem;background: #edeff1;line-height: .6rem;font-size: .27rem;color: #333;padding-left: .2rem;padding-right: .2rem;}
        .carList li{height: .8rem;font-size: .25rem;padding: .05rem .15rem;background: #fff;color: #333;border: .01rem solid #f2f2f2;}
        .icon{width: .3rem;height: .3rem;display: inline-block;}
        .icon_re{width: .3rem;height: .3rem;display: inline-block;line-height: 1.7;margin-right: .1rem;}
        .num {padding: 0 .2rem;}
        .price{color: orangered;font-weight: bold;margin-right: .3rem;margin-top: .2rem;}
        .beizhu{padding-left: .15rem;font-size: .16rem;}
        .food{padding-top: .1rem;}
        .contrl{margin-top: .2rem;}
        .carwraper{overflow: hidden;background: transparent;height: 6rem;}
        .car-info{position: absolute; bottom:.8rem;left:0;width: 100%;z-index: 900;background: #fff;padding: 0;line-height: 1;}
        .shadow{ position:fixed;top:0;left:0;width:100%; height:100%; z-index:500;background:rgba(7, 17, 27, 0.6);}

    </style>
