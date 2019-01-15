
<template>
  <mt-header :title="title" :fixed="fixed" >
    <mt-button :icon="left.icon" slot="left" v-if="left" @click="toPath(left.path)">{{left.text}}</mt-button>
    <slot name="center"></slot>
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
  methods: {
    toPath(path) {
      path ? this.$router.push(path) : this.$router.go(-1);
    }
  }
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