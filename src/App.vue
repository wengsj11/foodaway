<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view transitionBody"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      // transitionName: 'slide-left',
      transitionName: 'transitionLeft'
    }
  },
  watch: {
    // '$route' (to, from) {
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    // },
    '$route' (to, from) {
      const arr = ['/index', '/shop', '/login', '/myPage']
      const compare = arr.indexOf(to.path) > arr.indexOf(from.path)
      this.transitionName = compare ? 'transitionLeft' : 'transitionRight'
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'transitionLeft' : 'transitionRight'
    }
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
  color: #2c3e50;
  margin: 0 auto;
  height: 100%;
}
.body-container{
    position: fixed;
    left: 0;
    right:0;
    bottom: 0;
    overflow: auto;
    height: 100%;
  }
.view{
  padding: 40px 0 55px 0;
}
.view, .child-view{
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.transitionBody{
 transition: transform .5s linear; /*定义动画的时间和过渡效果*/
}
.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  transform-origin: left;
   /*当左滑进入右滑进入过渡动画*/
}
.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
  transform-origin: right;
}
</style>
