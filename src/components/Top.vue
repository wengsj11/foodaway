
<template>
  <Header>
    <router-link to="/home" @click.native="goBack()">
      <Icon :style="{marginLeft: '.2rem',float:'left'}" :type="iconType" size=".36rem" color="#fff"></Icon>
    </router-link>
    <slot></slot>
    <router-link :to="rightPath" v-if="rightPath"  :style="{marginRight: '.2rem',float:'right'}">
      <slot name="right"></slot>
    </router-link>
  </Header>
</template>
<script>
/* eslint-disable */
import { Icon } from 'iview';
export default {
  name: 'top',
  props:['icon','title','rightPath'],
  data(){
    return{
      iconType: "ios-arrow-back",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted(){
    //设置左边的图标
    if(this.$props.icon === 'search'){
      this.iconType = "ios-search";
    }
    else {
      this.iconType = "ios-arrow-back";
    }
  },
  components:{
    Icon,
  }
}
</script>
<style scoped>
  Header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .81rem;
    font-size: .32rem;
    background-color: #298eeb;
    color:#fff;
  }
  Header a{
    color:#fff;
  }
</style>


