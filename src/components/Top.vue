
<template>
  <mt-header :title="title">
    <router-link :to="left.path" slot="left" v-if="left">
      <mt-button :icon="left.icon">{{left.text}}</mt-button>
    </router-link>
    <router-link :to="right.path" slot="right" v-if="right">
      <mt-button :icon="right.icon">{{right.text}}</mt-button>
    </router-link>
  </mt-header>
</template>
<script>
/* eslint-disable */
import { Icon } from 'iview';

export default {
  name: 'top',
  props:['title','left','right'],
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
}
</script>
<style scoped>
  #header{
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