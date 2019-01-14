<template>
    <div class="view" :style="{padding:'0'}">
        <Top
        :left="{path:'/index',icon:'back'}"
        :right="{icon:'more',click:handleClick}"
        :fixed="true"
        :style="{background:'transparent'}"></Top>
        <!-- <mt-header fixed :style="{background:'transparent'}">
            <router-link to="/index" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <template  slot="right">
                <router-link to="/search">
                    <mt-button icon="search"></mt-button>
                </router-link>
                <mt-button icon="more"></mt-button>
            </template>
        </mt-header> -->
        <!-- header -->
        <header class="shop-top clearfix" :style="{paddingTop:'40px'}">
            <div class="shop-img fl">
                <img src="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg" />
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
            <ul class="catalogue">
                <li><Icon type="md-flame"  class="icon_r"/>热销榜</li>
                <li><Icon type="md-pricetag" class="icon_y"/>优惠</li>
                <li class="active">热销榜<p class="badge"><span>2</span></p></li>
            </ul>
            <div class="right" >
                <ul class="right_list">
                    <li v-for="i in 20" :key="i">
                        <div>
                            <p class="list_name">优惠<span>美味又优惠，大家快来抢!</span></p>
                            <ul class="goodsListList">
                            <li class="good clearfix">
                                <div class="good-head fl">
                                    <img src="../assets/logo.png" />
                                </div>
                                <div class="good-info fl">
                                    <span>海鲜至尊披萨<br/></span>
                                    <span>大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹<br/></span>
                                    <span>月售47份</span>
                                    <span>好评率99%<br/></span>
                                    <span id="money">¥47</span><span>起</span>
                                    <Icon type="ios-remove-circle-outline" /><span>1</span>
                                    <button id="choose_it">选规格</button>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from '../components/Top.vue';
    export default {
        data() {
            return {
                value:'',
                searchClick:false,
            };
        },
        components:{
            Top,
        },
        methods: {
            handleSearch() {
                this.searchClick = true;
            },
            handleClick(){
                console.log('clickkkkkk');
            }
        }
    }
</script>

<style>
    .shop-top {
        position: relative;
        width: 100%;
        height: 1.8rem;
        padding: .15rem 0 0 .15rem;
        /* 背景特效 */
        background: url('http://fuss10.elemecdn.com/8/e4/294f46322e8ccd3e8f25ca8261f0djpeg.jpeg?imageMogr/format/webp/thumbnail/750x/thumbnail/!40p/blur/50x40/');
        font-size: .1rem;
        font-family: '微软雅黑';
        color: white;
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
        margin-left: .1rem;
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
     .wrap{display: flex;}
     .catalogue{flex: 2;}
     .catalogue li {
         position: relative;
         height: .8rem;
         background: #F8F8F8;
         line-height: .8rem;
         font-size: .18rem;
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
     .badge {
         position: absolute;
         top: 0;
         right: 0;
         width: .25rem;
         height: .25rem;
         background-color: #f00;
         border-radius: 50%;
         text-align: center;
         align-items: center;
     }
     .badge span {
         position: absolute;
         left: 0;
         top: 0;
         width: .25rem;
         height: .25rem;
         color: #00f;
     }
      .right{margin:0;padding: 0;width: 90%;text-align: left;flex: 7;}
        .list_name{height: .5rem;margin:0;background: #f2f2f2;line-height: .6rem;border: 0;font-size: .27rem;color: #707070;padding-left: .15rem;font-family: '微软雅黑';}
        .list_name span{font-size: .1rem;margin-left: .01rem; color: #9f9d9d;margin-left: .1rem;}
        .good{height: 3rem;display: flex;justify-content: space-between;border-bottom: .01rem solid #f2f2f2;padding: .1rem 0 .3rem .15rem;}
        .good-head{width: 1.4rem;height: 1.4rem; border: .01rem solid #999;}
        .good-head img {width: 100%;}
        .good-info{margin:0;padding-left: .1rem;;font-size: .1rem;color: #9f9d9d;text-align: left;}
        .good-info span:nth-child(1){font-size:.3rem;color: black;line-height: .35rem;  }
        .good-info p span:nth-child(3),.goodsList p span:nth-child(4){color: black;line-height: .2rem;}
        #money{color: red;font-size: .1rem;margin-right: .03rem;line-height: .2rem;}
        #choose_it{width:.5rem;height:.2rem;background: #3291e8;float: right;margin-right: .1rem;color: white;border: 0;border-radius:.12rem;}
</style>