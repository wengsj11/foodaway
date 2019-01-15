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
        <div class="history_search">
            <h2 class="title">历史搜索</h2>
            <ul class="history_search_items">
            <li>双皮奶</li>
            <li>红烧猪蹄</li>
            <li>土豆泥</li>            
            <li>鸡公煲</li>           
            <li>虾</li>
            <li>老鸭粉丝</li>
            <li>披萨</li>
            <li>蛋糕</li>
            </ul>
        </div>
        <div class="hot_search">
            <h2 class="title">热门搜索</h2>
            <ul class="hot_search_items">
            <li>片皮鸭</li>
            <li>烤鱼</li>
            <li>麻辣烫</li>            
            <li>粥</li>           
            <li>小龙虾</li>
            </ul>
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
    text-align: left;
    padding-left: .15rem;
    font-size: .3rem;
    color:black;
    font-weight: bold;
    font-family: "微软雅黑";
    line-height: .7rem;
    background: #F3F3F3;
}
.history_search_items,.hot_search_items{
    margin:.1rem 0; 
}
.history_search_items li,.hot_search_items li{
    display: inline-block;
    height: .7rem;
    flex: 1;
    background: #f7f7f7;
    line-height: .7rem;
    text-align: center;
    font-size: .2rem;
    border:0;
    border-radius: .2rem; 
    margin:.1rem; 
    padding: 0 .4rem;
    
}



</style>