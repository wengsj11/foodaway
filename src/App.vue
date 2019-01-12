<template>
  <Layout id="app">
    <Content>
    <router-view class="view"></router-view>
    </Content>
  </Layout>
</template>
<script>
/* eslint-disable */

export default {

}
</script>

<style>
html, body{
  height: 100%;
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
}
</style>
