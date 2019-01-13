<template>
   <div class="shopWrap">
       <ul >
           <li class="shop clearfix">
               <div class="shop-img fl">
                    <img src="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg" />
               </div>
               <div class="shop-info fl">
                   <div>
                    <span class="shop-honor__y">品牌</span>
                    <span class="shop-honor__r">星选</span>
                    <span class="shop-title">bigbang韩国炸鸡(农大店)</span>
                    <span class="assure fr">票</span>
                    <span class="assure fr">准</span>
                    <span class="assure fr">保</span>
                   </div>
                   <div class="middle">
                    <Rate disabled v-model="valueDisabled"/>
                    <span class="rate">4.2</span>
                    <span class="num">月售669单</span>
                    <span class="delivery_Ontime fr">准时达</span>
                    <span class="delivery_Courier fr">蜂鸟专送</span>
                   </div>
                   <div>
                    <span class="delivery">￥0起送 / </span>
                    <span class="delivery"> 配送费￥8</span>
                    <span class="minutes fr"> 59分钟</span>
                    <span class="distance fr">1.87km / </span>
                   </div>
               </div>
           </li>
       </ul>
   </div>
    
</template>

<script>
   
export default {
    data(){
        return{
          title:'bigbang韩国炸鸡',
          imageURL: 'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg',
          valueDisabled: 2
        }
      },
}
</script>
<style>
    .shop {
        display: flex;
        flex-wrap: nowrap;
        height: 1.5rem;
        padding: .25rem .15rem;
        border-bottom: .01rem solid #e5e5e5;
        font-size: .1rem;
        font-family: '微软雅黑';
    }
    .shop-img {
        width: 1rem;
        height: 1rem;
    }
    .shop-img img {
        width: 100%;
        height: 100%;
    }
    .shop-info {
        width: 100%;
        margin-left: .1rem;
        text-align: left;
    }
    .shop-honor__y {
        background: #FFDC00;
        padding:.01rem .03rem 0 .01rem;
        color: black;
        font-size: .1rem;
        font-family: '微软雅黑';
        font-weight: bold;
        /* vertical-align: top; */
        line-height: .2rem;
    }
    .shop-honor__r  {
        background: #FF2447;
        padding:.01rem .03rem 0 .01rem;
        color: white;
        font-size: .1rem;
        font-family: '微软雅黑';
        font-weight: bold;
        /* vertical-align: top; */
        line-height: .2rem;
    }
    .shop-title {
        display: inline-block;
        width: 2rem;
        font-size: .2rem;
        font-weight: bold;
        font-family: '微软雅黑';
        margin-left: .05rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color: #000;
        line-height: .2rem;
    }
    .middle {
        margin: .08rem 0 .12rem;
    }
    .ivu-rate {
        font-size: .12rem!important;
    }
    .ivu-rate-star {
        margin-right: 0!important;
    }
    .rate {
        color: #FD730F;
        padding-left: .1rem;
        padding-right: .1rem;
    }
    .num {
        color: #666;
    }
    .delivery_Ontime {
        color: #298EEB;
        border: .01rem solid #298eeb;
        padding-left: .02rem;
        padding-right: .03rem;
        font-size: .1rem;
    }
    .delivery_Courier {
        background: #298EEB;
        color: white;
        font-size: .1rem;
        margin-right: .03rem;
        padding: .01rem .02rem .01rem .03rem;
    }
    .delivery {
        font-size: .13rem;
    }
    .distance {
        color: #999;
    }
    .minutes {
        color: #3F9AEE;
        padding-left: .03rem;
    }
    .assure {
        padding: .01rem .02rem;
        margin-right: .03rem;
        border: .01rem solid #e5e5e5;
        font-size: .1rem;
        color: #999;
    }
</style>
