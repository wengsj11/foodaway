<template>
   <div class="shopWrap">
       <ul >
           <li class="shop">
               <div class="shop-img">
                    <img src="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg" />
               </div>
               <div class="shop-info">
                   <span class="shop-honor__y">品牌</span>
                   <span class="shop-honor__r">星选</span>
                   <span class="shop-title">bigbang韩国炸鸡(农大店)</span>
                   <span class="assure fr">票</span>
                   <span class="assure fr">准</span>
                   <span class="assure fr">保</span>

                   <br>
                   <Rate disabled v-model="valueDisabled"/>
                   <span class="rate">4.2</span>
                   <span class="num">月售669单</span>
                   <span class="delivery_ontime">准时达</span>
                   <span class="delivery_Courier">蜂鸟专送</span>
                   <br>
                   <span class="delivery">￥0起送 / </span>
                   <span class="delivery"> 配送费￥8</span>
                   <span class="minutes fr"> 59分钟</span>
                   <span class="distance fr">1.87km / </span>
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
    .fr {
        float: right;
    }
    .shop {
        display: flex;
        flex-wrap: nowrap;
        height: 80px;
        padding: 10px 10px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 12px;
        font-family: '微软雅黑';
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
        margin-left: 10px;
        text-align: left;
    }
    .shop-honor__y {
        background: #FFDC00;
        padding:1px 3px 0 1px;
        color: black;
        font-size: 12px;
        font-family: '微软雅黑';
        font-weight: bold;
        align-items: baseline;
    }
    .shop-honor__r  {
        background: #FF2447;
        padding:1px 3px 0 1px;
        color: white;
        font-size: 12px;
        font-family: '微软雅黑';
        font-weight: bold;
        align-items: baseline;
    }
    .shop-title {
        display: inline-block;
        width: 140px;
        font-size: 13px;
        font-weight: bold;
        font-family: '微软雅黑';
        margin-left: 5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        
    }
    .ivu-rate {
        font-size: 12px!important;
    }
    .ivu-rate-star {
        margin-right: 0!important;
    }
    .rate {
        color: #FD730F;
        padding-left: 5px;
        padding-right: 5px;
    }
    .num {
        color: #666;
    }
    .delivery_Ontime {
        color: #298EEB;
        border: 1px solid #298eeb;
        padding-left: 2px;
        padding-right: 3px;
    }
    .delivery_Courier {
        background: #298EEB;
        color: white;
        font-size: 10px;
        margin-right: 3px;
        padding-left: 2px;
        padding-right: 3px;
    }
    .delivery {
        font-size: 13px;
    }
    .distance {
        color: #999;
    }
    .minutes {
        color: #3F9AEE;
        padding-left: 3px;
    }
    .assure {
        padding: 1px 2px;
        margin-right: 3px;
        border: 1px solid #e5e5e5;
        font-size: 10px;
        color: #999;
    }
</style>
