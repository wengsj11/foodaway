<template>
    <div>
        <Top title="页面建设中"
            :left="{path:'/index',icon:'back'}">
        </Top>
        <div class="wrap">
            <img src="../assets/icon/timg.jpg" />
        </div>
    </div>
</template>

<script>
import Top from '../components/Top';
export default {
    components:{
        Top
    }
}
</script>

<style>
 .wrap {
     width: 100%;
     height: 100%;
 }
 .wrap img{
     width: 100%;
 }
</style>
