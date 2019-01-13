<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="/index">
      <img slot="icon" src="../assets/logo.png">
      外卖
    </mt-tab-item>
    <mt-tab-item id="/index/order">
      <img slot="icon" src="../assets/logo.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="/index/find">
      <img slot="icon" src="../assets/logo.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="/index/profile">
      <img slot="icon" src="../assets/logo.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  data() {
    return {
      selected: '外卖',
    };
  },
  watch: {
    selected: function (val, oldVal) {
        // console.log(val)
      this.$router.push(val);
    }
}
};
</script>
<style scoped>
</style>

