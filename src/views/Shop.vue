<template>
    <div class="view body-container" :style="{padding:'0'}" @scroll="handleScroll">
        <Top
        :left="{path:'/index',icon:'back'}"
        :right="{icon:'more',click:handleClick}"
        :fixed="true"
        :style="{background:topBackground,color:topColor,transition:'.3s'}">
        </Top>
        <div class="searchbox" slot="center">想吃什么搜一搜</div>
        <mt-navbar :style="{top:'40px', position:'fixed',width:'100%',zIndex:zIndex}" ref="navbar">
            <mt-tab-item id="1">点餐</mt-tab-item>
            <mt-tab-item id="2">评价</mt-tab-item>
            <mt-tab-item id="3">商家</mt-tab-item>
        </mt-navbar>
        <!-- header -->
        <header class="shop-top clearfix" :style="{paddingTop:'40px'}" @click="show=true" ref="header">
            <div class="shop-img fl">
                <img src="" />
            </div>
            <div class="shop-info fl">
                <span class="shop-title">bigbang韩国炸鸡(农大店)</span><br>
                <p class="middle">
                <span>商家配送 / </span>
                <span> 40分钟送达</span>
                <span>配送费￥5</span>
                </p>
                <span>公告:  欢迎光临,用餐高峰请提前下单,谢谢。</span>
                <Icon type="ios-arrow-forward" />
            </div>
               <p class="notice clearfix">
                <span class="new">新</span>
                <span class="notice-info">新用户下单离间20.0元(不与其他活动同享)(APP)专享</span>
                <span class="fr">6个活动</span>
               </p>
         </header>
<!-- 商店商品 -->
        <div class="wrap">
             <div class="catalogue-wraper menu-wrapper fl">
                <ul class="catalogue">
                    <li><Icon type="md-flame"  class="icon_r"/>热销榜</li>
                    <li><Icon type="md-pricetag" class="icon_y"/>优惠</li>
                    <li class="active">热销榜</li>
                </ul>
             </div>
            <div class="right fr foods-wrapper" >
                <ul class="right_list">
                    <li v-for="i in 20" :key="i">
                        <div>
                            <p class="list_name">优惠
                                <span>美味又优惠，大家快来抢!</span>
                                <Icon type="ios-more" class="fr"/>
                            </p>
                            <ul class="goodsListList">
                            <li class="good clearfix">
                                <div class="good-head fl">
                                    <img src="../assets/logo.png" />
                                </div>
                                <div class="good-info fl clearfix">
                                    <span>海鲜至尊披萨<br/></span>
                                    <span>大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹</span><br>
                                    <span>月售47份</span>
                                    <span>好评率99%<br/></span>
                                    <span id="money">¥47</span><span>起</span>
                                    <button class="choose_it fr" @click="choose=true">选规格</button>
                                    <span class="choosed fr">
                                        <Icon type="ios-remove-circle-outline" />
                                        <span>1</span>
                                    </span>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
          <!-- 蒙层 -->
         <div class="activities" v-if="show" @click="show=false" >
            <h2>必胜客（新世界店）</h2>
            <!-- 这里放星星 -->
            <p><Rate disabled allow-half v-model="valueDisabled" /></p>
            <!-- 优惠信息 -->
            <p class="tit">优惠信息</p>
            <ul class="information">
                <li><p id="n">新</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>      
                <li><p id="d">减</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>
                <li><p>特</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>
                <li><p>特</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>
                <li><p>特</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>
                <li><p>特</p><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>
            </ul>
            <!-- 商家公告 -->
            <p class="tit">商家公告</p>
            <ul class="notice">
                    <li><span>新用户下单立减20元(不与其他优惠同享）(APP专享）</span></li>   
            </ul>
        </div>
         <!-- 选规格 -->
        <div class="chooseDiv" v-if="choose">
            <div class="choose">
                <h2>海鲜至尊披萨</h2>
                <Icon type="ios-close" class="choose_dele" @click="choose=false"/>
                <h3>规格</h3>
                <h4>铁盘</h4><h4 class="choose_on">芝士</h4><br>
                <span class="mon">￥<span>96</span></span>
                <p class="fr">加入购物车</p>
            </div>
        </div>
        <!-- 底部购物车 -->
        <Cart class="cart"/>
    </div>
</template>

<script>
    import Top from '../components/Top.vue';
    import Cart from '../components/Cart.vue';
    export default {
        data() {
            return {
                // topColor: 'rgba(255, 255, 255) !important',
                // topBackground: 'rgba(255, 255, 255, 0)',
                topColor: '#fff',
                topBackground: 'transparent',
                value:'',
                searchClick:false,
                valueDisabled:3.5,
                show:false,
                choose:false,
                scrollY:0,
                tops: [], // 所有右侧分类li的top组成的数组  
                zIndex: '-1',
            };
        },
        components:{
            Top,
            Cart,
        },
        methods: {
            handleSearch() {
                this.searchClick = true;
            },
            handleClick() {
                console.log('clickkkkkk');
            },
            handleScroll(e) {
                const pageHeight = e.srcElement.scrollHeight;
                const scrollTop = e.srcElement.scrollTop;
                const headerHeight = this.$refs.header.offsetHeight;
                // if(scrollTop >= 0 && scrollTop <= (headerHeight / 2)){
                //     const a = scrollTop / (headerHeight / 2);
                //     const code = 255 * (1 - a);
                //     this.topBackground = `rgba(255,255,255,${a})`; //背景透明转白色
                //     this.topColor = `rgba(${code},${code},${code}) !important`; //字体白转黑
                // }
                if(scrollTop > (headerHeight / 2)){
                    this.topBackground = '#fff'; //背景透明转白色
                    this.topColor = `#000 !important`; //字体白转黑
                    this.zIndex = '1';
                } else {
                    this.topBackground = 'transparent'; //背景透明转白色
                    this.topColor = `#fff !important`; //字体白转黑
                    this.zIndex = '-1';
                }
            }
        }
    }
</script>

<style scoped>
    
    .shop-top {
        position: relative;
        width: 100%;
        height: 2.8rem;
        padding: .25rem 0 0 .25rem;
        /* 背景特效 */
        font-size: .1rem;
        font-family: '微软雅黑';
        color: white;
        background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg")
    }
    .shop-img {
        width: 1.1rem;
        height: 1.1rem;
    }
    .shop-img img {
        width: 100%;
        height: 100%;
    }
    .shop-info {
        margin-left: .2rem;
        text-align: left;
        font-size: .1rem;
        font-family: "微软雅黑";
    }
    .shop-title {
        display: inline-block;
        width: 100%;
        font-size: .3rem;
    }
    .middle {
        line-height: .4rem;
    }
    .notice {
        width: 100%;
        text-align: left;
        padding-right: .15rem;
        line-height: .5rem;
    }
    .new {
        padding-right: .01rem;
        background: #6EBE3E;
    }
    .notice-info {
        margin-left: .05rem;
        overflow: hidden;
    }
    .ivu-icon-ios-arrow-forward {
        position: absolute;
        left: 93%;
        top: 50%;
        margin-top: -.2rem;
    }
     .ivu-icon-ios-arrow-forward::before {
        font-size: .4rem;
     }
     .head-shadow {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: -1;
        background: rgba(7, 17, 27, .4);
     }
     .head-shadow img {
         width: 100%;
         height: 100%;
         z-index: -2;
     }
     /* .wrap{display: flex;} */
     .catalogue-wraper{width: 24%;height: 100%;overflow: auto;display: inline-block;}
     .catalogue li {
         position: relative;
         background: #F8F8F8;
         padding: .15rem 0;
         line-height: .5rem;
         font-size: .22rem;
         text-align: center;
         align-items: center;
         text-align: left;
         padding-left: .1rem;
         border-bottom: .005rem solid #e5e5e5;
         border-left: .06rem solid transparent;
         flex-wrap: nowrap;
     }
    li[class='active'] {
         border-left: .06rem solid #298EEB;
         background: #fff;
     }
     .icon_r::before {
         color: #f00;
         font-size: .3rem;
         margin-right: .1rem;
     }
     .icon_y::before {
         color: #FFBB28;
         font-size: .3rem;
         margin-right: .1rem;
     }
     .active .ivu-badge  {
         position: absolute ;
         top: .4rem;
         right: .2rem;
         width: .3rem;
         height: .3rem;
         border-radius: 50%;
     }
     .ivu-badge .ivu-badge-count{
         font-size: .2rem;
         z-index: 0;
         width: .3rem;
         height: .3rem;
         border-radius: 50%;
         text-align: center;
         align-items: center;
     }
      .view .right{margin:0;padding: 0;text-align: left;width: 76%;height: 100%;}
        .view .list_name{position: relative;height: .5rem;background: #f2f2f2;line-height: .6rem;border: 0;font-size: .27rem;color: #707070;padding-left: .15rem;font-family: '微软雅黑';}
        .view .list_name span{font-size: .1rem;margin-left: .01rem; color: #9f9d9d;margin-left: .1rem;}
        .ivu-icon-ios-more{position: absolute;top: 50%;right: .15rem;margin-top: -.15rem;}
        .ivu-icon-ios-more:before{font-size: .3rem;color: #999;}
        /* 选规格 */
        .chooseDiv{width:100%;height: 100%;background: rgba(0,0,0,0.4);position: absolute;left: 0;top: 0;}
        .choose {width: 4.5rem;height: 2.8rem;text-align:left;background: #fff;padding: .15rem;position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: auto;border-radius: .1rem;}
        .choose h2{font-size: .25rem;color: #000;text-align: center;margin-bottom: .3rem;line-height: .4rem;}
        .choose h3{font-size: .19rem;color: #999;line-height: .4rem;}
        .choose h4 {display:inline-block;padding:.1rem .2rem;margin-right:.15rem;line-height:.22rem;font-size: .19rem;color: #999;border: .01rem solid #999;border-radius: .1rem;text-align: center;align-items: center;}
        .choose .choose_on {color: #3291e8;border:  .01rem solid #3291e8;border-radius: .1rem;}
        .choose .choose_dele { position: absolute;top: 3%; right: 3%;}
        .mon {font-size: .2rem;color: #FF994A;margin-top: .2rem;display: inline-block;}
        .choose span:last-child {font-size: .3rem;font-weight:bold;color: #FF994A;margin-top: .2rem;display: inline-block;}
        .choose p {padding: .1rem .15rem; background: #3291e8;color: white;border-radius: .2rem;display: inline-block;margin-top: .3rem;}
        /* 食品列表 */
        .view .good{
            height: 2.3rem;
            display: flex;
            vertical-align: bottom;
            background: #fff;
            border-bottom: .01rem solid #f2f2f2;padding: .15rem .15rem;}
        .view .good-head{width: 1.3rem;height: .8rem; border: .01rem solid #999;}
        .view .good-head img {width: 100%;height: 100%;}
        .view .good-info{padding-left: .2rem;;font-size: .18rem;color: #9f9d9d;text-align: left;}
        .view .good-info span:nth-child(1){font-size:.28rem;color: black;line-height: .5rem;  }
        .view .good-info span:nth-child(3),.view .good-info span:nth-child(4){display: inline-block;margin: .2rem .2rem 0 0;color: black;line-height: .2rem;}
        .view .good-info span:nth-child(6){line-height: .4rem;}
        .view #money{color: #FF6801;font-size: .25rem;font-weight: bold;margin-right: .1rem;line-height: .6rem;}
        #money+span{line-height: .6rem;}
        .view .choose_it{width: .8rem;height: .4rem;line-height:.4rem;background: #3291e8;color: white;border: 0;border-radius:.2rem;}
        /* .choosed {} */
        .choosed .ivu-icon-ios-remove-circle-outline:before{font-size: .3rem;line-height: .4rem;color: #a5a5a5; }
        .choosed span {font-size: .2rem;line-height: .4rem; color: #999;padding: 0 .1rem;}
    /* 蒙层 *//* 满减活动 */
       .activities{background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));position: fixed;left: 0;width: 100%;bottom: 0;top:0;z-index: 999}
        .activities h2{color: white;text-align: center;margin-top: .7rem;font-size: .3rem;}
        .activities ul{padding-left:1rem;color: white;line-height: .4rem}
        .activities p:first-of-type{text-align: center;}
        .information,.notice{font-size: .2rem;text-align: left;}
        .information li p:nth-child(1){background: coral;border: 0;margin-right:.1rem; display: inline-block;padding: .03rem;line-height: 1;}
        #n{background: #5e985e;}
        #d{background: #ca737c;}
        .information{margin-bottom: .5rem;}
        .information span{line-height: .4rem;}
        .tit{width: 1rem;height: .3rem;border: .01rem solid white;margin: .2rem auto;border-radius: .15rem;text-align: center;color: #fff;font-size: .2rem;line-height: .3rem;margin-bottom: .3rem;}
        .cart {position: fixed;bottom: 0;left: 0;}
.searchbox{
  /* height: 100%; */
  position: fixed;
  top:.15rem;
  left:50%;
  width: 5rem;
  height: .5rem;
  line-height: .5rem;
  margin-left: -2.5rem;
  border-radius: .5rem;
  background-color: #f2f2f2;
  z-index:9;
  text-align: center;
}
</style>
