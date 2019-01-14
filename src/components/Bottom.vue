<template>
  <mt-tabbar v-model="selected" fixed :style="{color:'#8e8e93'}">
    <mt-tab-item v-for="(item, i) in items" :key="i" :id="item.path" >
      <img slot="icon" :src="selected === item.path ? item.iconSelected : item.icon">
      {{item.text}}
    </mt-tab-item>
  
  </mt-tabbar>
</template>
<script>
export default {
  data() {
    return {
      selected: '/index',
      items: [
        {
          path: '/index',
          icon: require('@/assets/icon/takeouts.png'),
          iconSelected: require('@/assets/icon/takeouts_s.png'),
          text: '外卖'
        },
        {
          path: '/index/search',
          icon: require('@/assets/icon/find.png'),
          iconSelected: require('@/assets/icon/find_s.png'),
          text: '搜索',
        },
        {
          path: '/index/order',
          icon: require('@/assets/icon/order.png'),
          iconSelected: require('@/assets/icon/order_s.png'),
          text: '订单',
        },
        {
          path: '/index/profile',
          icon: require('@/assets/icon/profile.png'),
          iconSelected: require('@/assets/icon/profile_s.png'),
          text: '我的',
        }
      ],
    };
  },
  computed: {
    selectedIcon(i) {
      console.log('index',i)
      const item = this.items[i];
      return this.selected === item.path;
    }
  },
  watch: {
    selected: function (val, oldVal) {
        // console.log(val)
      this.$router.push(val);
    },
  }
};
</script>
<style scoped>
.mint-tab-item{
  color:inherit;
}
</style>

