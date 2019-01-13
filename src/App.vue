<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
export default {
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
}
</script>

<style>
html, body{
  height: 100%;
  background-color: #f2f2f2;
}
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 670px;
  margin: 0 auto;
  height: 100%;
}
.view, .child-view{
  height: 100%;
  /* right: 0;
  bottom: 0;
  left: 0;
  position: absolute; */
}
.slide-left-enter,
.slide-right-leave-active {
    -webkit-transform: translate(500px, 0) ;
    transform: translate(500px, 0) ;
}

.slide-left-leave-active,
.slide-right-enter {
    -webkit-transform: translate(-500px, 0) ;
    transform: translate(-500px, 0) ;
}
</style>
