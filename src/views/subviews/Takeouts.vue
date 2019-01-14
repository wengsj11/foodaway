<template>
  <div class="view">
    <Top title="福建农林大学"
    :fixed="true"
    :left="{path:'/search',icon:'search'}"
    :right="{path:'/login',text:'登录 | 注册',click: toLogin}"
    >
    </Top>
    <!-- <router-link to="/goodlist"> 商店列表</router-link>
    <router-link to="/shop"> 商店详情</router-link> -->
    <mt-swipe :auto="0" :continuous="false" id="swipe">
      <mt-swipe-item class="menus">
        <ul :style="{overflow:'hidden',height:'100%'}">
          <li class="menus-item" v-for="(menu,i) in 8" :key="i">
            <router-link to="/shoplist" v-if="menus1.length > 0">
              <img :src="menus1[i].image_url">
              <p>{{menus1[i].title}}</p>
            </router-link>
            <router-link to="/shoplist" v-else>
              <img src="../../assets/logo.png" alt="aa" :style="{borderRadius: '50%',
  backgroundColor: '#f2f2f2'}">
              <div><span :style="{backgroud:'#f2f2f2'}"></span></div>
            </router-link>
          </li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item class="menus">
        <ul :style="{overflow:'hidden',height:'100%'}">
          <li class="menus-item" v-for="(menu,i) in 8" :key="i">
            <router-link to="/shoplist" v-if="menus2.length > 0">
              <img :src="menus2[i].image_url">
              <p>{{menus2[i].title}}</p>
            </router-link>
            <router-link to="/shoplist" v-else>
              <img src="../../assets/logo.png" alt="aa" :style="{borderRadius: '50%',
  backgroundColor: '#f2f2f2'}">
              <div><span :style="{backgroud:'#f2f2f2'}"></span></div>
            </router-link>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
    <div class="shop">
      <h3>
        附近商家
      </h3>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="(item,index) in list" :key="index" class="shop-item" @click="toShop">
          <img src="../../assets/logo.png" alt="logo">
          <div class="shop-item__desc">
            <p class="desc-title">
              <span class="desc-brand">品牌</span>
              bigbang韩国炸鸡(农大店)
            </p>
            <Rate allow-half v-model="shoprate" /><span class="desc-rate">{{ item }}</span><span class="desc-monthly">月售669单</span>
            <p class="desc-price">
              <span>￥0起送 / 配送费￥8</span>
            </p>
          </div>
          <div class="shop-item__label">
            <p class="label-line">
              <span class="label--white">保</span>
              <span class="label--white">准</span>
              <span class="label--white">票</span>
            </p>
            <p class="label-line">
              <span class="label--blue">蜂鸟专送</span>
              <span class="label--bluewhite">准时达</span>
            </p>
            <p class="label-line">
              <span class="label-distance">1.87km / <span class="label-time">59分钟</span></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Top from '../../components/Top.vue';
  import axios from 'axios';

  export default {
    name: 'takeouts',
    data() {
      return {
        menus:[],
        list:[1,2,3,4,5,6,7,8,9,10],
        loading: false,
        shoprate:3.5,
      };
    },
    methods: {
      toShop(){
        this.$router.push('/shop')
      },
      toLogin(){
        this.$router.push('/login')
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },
    components: {
      Top,
    },
    computed:{
      menus1(){
        return this.menus.length >0 ? this.menus.filter((_, index)=> index <= 7):[]
      },
      menus2(){
        return this.menus.length >0 ? this.menus.filter((_, index)=> index > 7):[]
      },
    },
    mounted(){
      // 获取菜单数据
      axios.get('http://localhost:3000/menus').then((res)=>{
        const data = res.data;
        if(data.status === 1){
          this.menus = data.data;
          console.log(this.menus);
        } else {
          console.log(data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      });
      // 获取首页商家列表数据

    }
  }
</script>
<style>
#swipe .mint-swipe-indicator{
  opacity: 1;
  background-color: #ccc ;
}
#swipe .mint-swipe-indicator.is-active{
  background-color: #0077ff;
}
#swipe{
  height: 3.16rem;
  background: #fff;
  margin-bottom: .17rem;
  border-bottom: .01rem solid #e6e5e5;
}
.shop{
  border-top: .01rem solid #e6e5e5;
  background-color: #fff;
}
.shop h3 {
  line-height: .67rem;
  font-size: .23rem;
  margin-left: .62rem;
}
.shop-item{
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2rem;
  background-color: #fff;
  border-bottom: .01rem solid #e6e5e5;
  padding: .3rem .16rem;
}
.shop-item img {
  width: 1.14rem;
  height: 1.14rem;
}
.shop-item__desc {
  width: 3.5rem;
  margin-left: .16rem;
  color: #000;
}
.desc-title{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: .26rem;
  font-weight: bold;
}
.desc-brand{
  display: inline-block;
  width: .57rem;
  margin-right: .08rem;
  border-radius: .05rem;
  background-color: #ffdc00;
  font-size: .19rem;
  text-align: center;
}
.desc-price {
  font-size: .2rem;
}
.desc-rate {
  margin: 0 .09rem;
  height: .18rem;
  color: #ff6700;
}
.desc-monthly {
  color: #646464;
}
.shop-item__label {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.label-line{
  text-align: right;
  white-space: nowrap;
}
.label-line span{ 
  display: inline-block;
  /* line-height: .24rem; */
  padding: 0 .05rem;
  margin-left: .04rem;
  font-size: .21rem;
  border-radius: .05rem;
}
.label-distance {
  float: right;
  font-size: .19rem;
  color: #8d8d8d;
}
.label-time {
  color: #298eeb;
}
.label--white {
  border: .02rem solid #f2f2f2;
  color: #989898;
}
.label--blue {
  background-color: #298eeb;
  color: #fff;
  border: .02rem solid #78b7f2;
}
.label--bluewhite {
  color: #298eeb;
  border: .02rem solid #78b7f2;
}
.menus{
  height: 100%;
}
.menus-item{
  margin-top: .2rem;
  text-align: center;
  float: left;
  width: 25%;
  /* height: 50%; */
}
.menus-item img {
  /* display: block; */
  height: .6rem;
  width: .6rem;
  margin-bottom: .1rem;
}
.menus-item p{
  line-height: .4rem;
  color: #727272;
}
.menus-item span {
  display: inline-block;
  width: .6rem;
  height: .4rem;
  background-color: #f2f2f2;
}
.ivu-rate {
  font-size: initial !important;
}
.ivu-rate-star{
  height: .16rem;
  margin: 0 !important;
}
</style>
