<template>
    <div class="search-page">
        <!-- 头部组件  -->
        <Top title="发现美食" :left="{icon:'back',path:'/index'}">
        </Top>
        <div class="search clearfix">
            <!-- <Input suffix="ios-close" search enter-button="提交" placeholder="你是不是饿得慌" /> -->
            <!-- <Icon type="ios-close" class="icon"/> -->
            <Input clearable placeholder="ET,你是不是饿得慌" class="fl" />
            <Button type="primary" class="fl" >提交</Button>

        </div>
             

    </div>
</template>
<script>
import Top from '../components/Top';
export default {
    data(){
        return {

        };
    },
     components:{
         Top,
     }
}
</script>

<style>
.search-page {
    text-align: left;
    background: #fff;
    height: 100%;
    overflow: hidden;
}
.search {
    width: 100%;
    padding: .15rem;
}
.search .ivu-input-wrapper {
    width: 77%;
    height: .7rem;
}
.ivu-input-type .ivu-input-default {
    font-size: .25rem!important;
    font-weight: bold;
    color: #666;
}
Input::placeholder {
    font-size: .23rem;
    font-weight: normal!important;
}
.ivu-input-type .ivu-input-default {
    font-weight: normal;
    color: #333;
}
.search-input {
    position: relative;
}
.ivu-icon-ios-close::before {
    font-size: .45rem;
    font-weight: bold;
    color: #3E69AE;
}
.ivu-input-default {
    background-color: #F2F2F2!important;
}
.ivu-btn-primary {
    width: 20%;
    margin-left: .1rem;
}
.title {
    height: .7rem;
    text-align: center;
    padding-left: .15rem;
    font-size: .3rem;
    color: #666;
    font-family: "微软雅黑";
    line-height: .6rem;
}
.ivu-icon-ios-nutrition-outline:before {
    font-size: .6rem;
    color: #666;
    line-height: .4rem;
}


</style>