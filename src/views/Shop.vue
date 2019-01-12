<template>
<!-- header -->
         <header class="shop-top">
            <div class="shop">
               <div class="shop-img">
                    <img src="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg" />
               </div>
               <div class="shop-info">
                   <span class="shop-title">bigbang韩国炸鸡(农大店)</span><br>
                   <span>商家配送 / </span>
                   <span> 40分钟送达</span>
                   <span>配送费￥5</span>
                   <br>
                   <span>公告:  欢迎光临,用餐高峰请提前下单,谢谢。</span>
                   <Icon type="ios-arrow-forward" />
               </div>
            </div>
               <div class="notice">
                <span class="new">新</span>
                <span class="notice-info">新用户下单离间20.0元(不与其他活动同享)(APP)专享</span>
                <span class="fr">6个活动</span>
               </div>
         </header>
<!-- 商店商品 -->
</template>

<script>
    export default {

    }
</script>

<style>
     .fr {
        float: right;
    }
    .clearfix ::before,.clearfix::after{
        content: '';
        display: table;
        clear: both;
    }
    .shop-top {
        padding: .1rem .1rem;
        /* 背景特效 */
        background: url('http://fuss10.elemecdn.com/8/e4/294f46322e8ccd3e8f25ca8261f0djpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/');
        font-size: .12rem;
        font-family: '微软雅黑';
        color: white;
    }
    .shop {
        display: flex;
        flex-wrap: nowrap;
        height: .6rem;
        border:0;
        padding: 0;
    }
    .shop-img {
        flex: 1;
    }
    .shop-img img {
        width: 100%;
        height: 100%;
    }
    .shop-info {
        flex: 4;
        margin-left: .1rem;
        text-align: left;
        font-size: .1rem;
        font-family: "微软雅黑";
    }
    .shop-title {
        display: inline-block;
        width: 100%;
        font-size: .14rem;
        font-weight: bold;
    }
    .new {
        padding-left: .01rem;
        padding-right: .01rem;
        background: #6EBE3E;
    }
    .notice-info {
        margin-left: .05rem;
    }
</style>