<template>
    <div class="search-page">
        <!-- 头部组件  -->
        <div class="search">
            <div class="search-input">
                <Input suffix="ios-close" search enter-button="提交" placeholder="你是不是饿得慌" />
                <!-- <Icon type="ios-close" class="icon"/> -->
            </div>
            
        </div>
        <div>
            <h2 class="title">商家</h2>
        </div>
    </div>
</template>
<script>
export default {
     
}
</script>

<style>
.search-page {
    background: #f2f2f2;
    text-align: left;
}
.search {
    padding: .1rem;
    background: #fff;
}
.search Input {
    /* background: #F2F2F2; */
    height: .3rem;
}
.search-input {
    position: relative;
}
.ivu-input-wrapper .ivu-input-suffix {
    position: absolute;
    left: 70%;
    top:0;
    z-index: 3;
}
.ivu-input-wrapper .ivu-input-suffix .ivu-icon-ios-close {
    color: #335691;
    font-size: .2rem;
    font-weight: bold;
}
.title {
    height: .35rem;
    padding-left: .15rem;
    font-size: .14rem;
    color: #666;
    font-family: "宋体";
    line-height: .35rem;
}
</style>