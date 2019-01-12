
<template>
 <div class="view">
    <Top rightPath="/login" icon="search">
      福建农林大学
      <template slot="right" >
        登录|注册
      </template>
    </Top>
    <Tabbar></Tabbar>
   <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
 </div>

</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import Top from '../components/Top.vue';
import Tabbar from '../components/Tabbar.vue'

export default {
  name: 'home',
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
  components: {
    Top,
    Tabbar,
  },
};
</script>
