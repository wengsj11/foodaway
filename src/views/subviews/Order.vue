<template>
  <div class="view">
    <Top title="订单" :fixed="true" ></Top>
    订单内容
  </div>
</template>
<script>
  import Top from '../../components/Top.vue';

  export default {
    name: 'order',
    components: {
      Top,
    },
  }
</script>
<style>

</style>


