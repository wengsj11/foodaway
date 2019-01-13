
<template>
 <div class="view">
    <router-view class="child-view"></router-view>
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
