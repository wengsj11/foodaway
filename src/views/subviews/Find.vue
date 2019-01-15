<template>
  <div class="view">
    <h2>发现</h2>
    <div class="wrap-div">
    <div class="wrap">
            <div class="ad" @click="toBuild()">
                <img src="https://fuss10.elemecdn.com/f/08/1ab72d30ca8bd140c798387fb78eapng.png" />
            </div>
            <div class="ad_new" @click="toBuild()">
                <img src="https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/" />
            </div>
            <h2 class="title"><Icon type="ios-nutrition-outline" />为你推荐</h2>
            <h3>你的口味我都懂得</h3>
             <div class="case-div">
               <ul class="clearfix" @click="toBuild()">
                   <li>
                       <h3>
                           <img src='https://fuss10.elemecdn.com/e/e1/de9a701f053969e42d81446ffdce7jpeg.jpeg?imageMogr/format/webp/thumbnail/176x/' alt="before" />
                        </h3>
                        <div>
                            <h4>牛肉丸麻辣烫套餐</h4>
                            <span>月售14份&nbsp;好评率100%</span><br>
                            <h5><span>￥</span>5.98</h5>
                            <h6>满25-12</h6>
                        </div>
                        <p>觅姐可以喝的麻辣烫(农大店)</p>
                   </li>
                    <li>
                       <h3>
                           <img src='https://fuss10.elemecdn.com/c/87/a642a93caa190f8c3435f6645658cjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/' alt="before" />
                        </h3>
                        <div>
                            <h4>尊享红绘香薰牛肉披萨套餐</h4>
                            <span>月售14份&nbsp;好评率100%</span><br>
                            <h5><span>￥</span>5.98</h5>
                            <h6>满25-12</h6>
                        </div>
                        <p>觅姐可以喝的麻辣烫(农大店)</p>
                   </li>
                     <li>
                       <h3>
                           <img src='https://fuss10.elemecdn.com/5/66/73e9feb02bf7afdaa1b444d1ef507jpeg.jpeg?imageMogr/format/webp/thumbnail/150x/' alt="before" />
                        </h3>
                        <div>
                            <h4>广东肠粉</h4>
                            <span>月售14份&nbsp;好评率100%</span><br>
                            <h5><span>￥</span>5.98</h5>
                            <h6>满25-12</h6>
                        </div>
                        <p>觅姐可以喝的麻辣烫(农大店)</p>
                   </li>
                     <li>
                       <h3>
                           <img src='http://fuss10.elemecdn.com/f/11/80276422c74f5c4897ff99516e86fjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/' alt="before" />
                        </h3>
                        <div>
                            <h4>大闸蟹</h4>
                            <span>月售14份&nbsp;好评率100%</span><br>
                            <h5><span>￥</span>5.98</h5>
                            <h6>满25-12</h6>
                        </div>
                        <p>觅姐可以喝的麻辣烫(农大店)</p>
                   </li>
               </ul>
            </div>
            <p class="more" @click="toBuild()">查看更多<Icon type="ios-arrow-forward" /></p> 
    </div>
    </div>
  </div>
</template>
<script>
  import Top from '../../components/Top.vue';

  export default {
    name: 'find',
    components: {
      Top,
    },
     methods:{
      toBuild(){
        this.$router.push('/building')
      },
    }
  }
</script>
<style>
.view{background: #fff;height: 100%;}
.view>h2{
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  font-size: .4rem;
    font-weight: bold;
    font-family: '微软雅黑';
    line-height: 1rem;
    padding-left: .15rem;
  z-index: 2;
  width: 100%;
  height: 1rem;
}
.case-div ul{
    height: 100%;
    padding-left: 3%;
    padding-top: 3%;
    background: #fff;
}
.case-div li{
    float: left;
    padding-top: .05rem;
    border: .02rem solid #c5c5c5;
    white-space: nowrap;
    width: 47%;
    height: 5rem;
    margin-right: 3%;
    margin-bottom: .2rem;
}
.case-div li h3{
    position: relative;
    overflow: hidden;
    height: 3.1rem;
}
.case-div li h3 img {
    width: 100%;
    height: 100%;
}
.case-div li h3::before {
    content: '您可能感兴趣的美食';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .4rem;
    background: rgba(0,0,0,.4);
    text-align: center;
    font-size: .15rem;
    line-height: .4rem;
    color: #fff;
}
.case-div li>div{
    padding-left: .1rem;
}
.case-div li h4 {
    font-size: .3rem;
    font-weight: bold;
    color: #333;
    line-height: .48rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.case-div li div>span {
    font-size: .16rem;
    color: #999;
    padding-right: .2rem;
}
.case-div li h5{
    display: inline-block;
    color: orangered;
    font-size: .32rem;
    font-weight: bold;
    margin-right: .1rem;
}
.case-div li h5>span{
    font-size: .16rem;
}
.case-div li h6 {
    height: .26rem;
    display: inline-block;
    font-size: .2rem;
    color: orangered;
    line-height: .26rem;
    border: .01rem solid orangered;
    border-radius: .03rem;
}
.case-div p{
    height: .6rem;
    line-height: .6rem;
    padding-left: .1rem;
    font-size: .22rem;
    color: #999;
    border-top: .01rem dashed  #999;
}
.more{
    height: 1rem;;
    font-size: .2rem;
    color: #999;
    line-height: 1rem;
    text-align: center;
    margin-bottom: 1.2rem;
    background: #fff;
}
.wrap{
    height: 100%;
    overflow: scroll;
}
.wrapDiv{height: 100%;overflow: hidden;}
.ad{
  height: 1.5rem;
  width: 100%;
   margin-top: .3rem;
}
.ad_new{
    height: 1.8rem;
    width: 100%;
    border-top: .2rem solid #f2f2f2;
    border-bottom: .2rem solid #f2f2f2;
}
.ad img,.ad_new img{
  width: 100%;
  height: 100%;
}
.title {
  height: 1.5rem;
  background: #fff;
  text-align: center;
  color: #333;
  font-size: .25rem;
  line-height: 1;
}
.title+h3{font-size: .15rem;color: #e5e5e5;text-align: center;}
</style>


