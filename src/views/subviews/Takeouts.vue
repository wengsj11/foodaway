<template>
  <div>
    <Top title="福建农林大学"
    :left="{path:'/search',icon:'search'}"
    :right="{path:'/login',text:'登录 | 注册'}">
    </Top>
    外卖首页
  </div>
</template>
<script>
  import Top from '../../components/Top.vue';

  export default {
    name: 'takeouts',
    components: {
      Top,
    },
  }
</script>
<style>

</style>
