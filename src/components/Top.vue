
<template>
  <mt-header :title="title" :fixed="fixed">
    <router-link :to="left.path" slot="left" v-if="left">
      <mt-button :icon="left.icon">{{left.text}}</mt-button>
    </router-link>
    <mt-button :icon="right.icon" slot="right" v-if="right" @click="right.click">{{right.text}}</mt-button>
  </mt-header>
</template>
<script>
/* eslint-disable */
import { Icon } from 'iview';

export default {
  name: 'top',
  props: ['title','left','right','fixed','search'],
  data(){
    return{
    };
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