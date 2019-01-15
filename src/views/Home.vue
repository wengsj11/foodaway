
<template>
 <div class="body-container">
    <keep-alive>
      <router-view class="child-view"></router-view>
    </keep-alive>
    <Bottom></Bottom>
 </div>

</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import Bottom from '../components/Bottom.vue'

export default {
  name: 'home',
  components: {
    Bottom,
  },
};
</script>
<style>
.view{
  background-color: #f2f2f2;
}
</style>

