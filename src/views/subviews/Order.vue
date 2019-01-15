<template>

<div class="order-wraper" >
  <h2>历史订单</h2>
  <ul class="order-list" @click="toBuild()">
    <li class="order clearfix">
      <div class="order-img fl">
        <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
      </div>
      <div class="order-info fl">
        <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
        <h4>2019-01-12 11:48</h4>
        <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
      </div>
      <p class="fr">订单已送达</p>
      <p class="fr">￥9.98</p>
    </li>
      <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
    <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
    <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
    <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
    <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
    <li class="order clearfix">
    <div class="order-img fl">
      <div><img src="https://fuss10.elemecdn.com/0/0a/54dd7d402f229aac635be66c3afe7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"></div>
    </div>
    <div class="order-info fl">
      <h3><span>北岛酱爆猪肉饭</span> <Icon type="ios-arrow-forward" /></h3>
      <h4>2019-01-12 11:48</h4>
      <h5>招牌猪肉组合套餐 + 鸡腿 + 海带排骨汤</h5>
    </div>
    <p class="fr">订单已送达</p>
    <p class="fr">￥9.98</p>
  </li>
  </ul>
</div>
</template>
<script>
  import Top from '../../components/Top.vue';

  export default {
    // name: 'order',
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
<style scope>
  .order-wraper{
    text-align: left;
    overflow: hidden;
  }
  .order-wraper h2{
    display: flex;
    height: 1rem;
    font-size: .4rem;
    font-weight: bold;
    font-family: '微软雅黑';
    line-height: 1rem;
    padding-left: .15rem;
  }
  .order-list {
    height: 100%;
    overflow: scroll;
  }
  .order {
    position: relative;
    width: 100%;
    padding: .35rem .25rem ;
    border-bottom: .005rem solid #eaeaea;
  }
  .order-img {
    width: 1rem;
    height: 1rem;
    border: .01rem solid #b5b5b5;
    margin-right: .4rem;
  }
  .order-img img {
    width: 100%;
    height: 100%;
  }
 
  .order-info h3 {
    width: 3.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .3rem;
    line-height: .3rem;
  }
  .order-info h4 {
    font-size: .28rem;
    color: #b5b5b5;
    margin-top: .25rem;
    margin-bottom: .3rem;
  }
  .order p:first-of-type{
    position: absolute;
    top: .35rem;
    right: .22rem;
    font-size: .25rem;
    color: #666;
  }
  .order-info h5{
    width: 2.5rem;
    font-size: .28rem;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .order p:last-of-type{
    position: absolute;
    bottom: .35rem;
    right: .25rem;
    font-size: .3rem;
    color: #333;
  }
  .order .ivu-icon-ios-arrow-forward {
    position: relative;
    left: 0;
    top: 0;
    margin: 0;
    font-size: .3rem;
    left: .2rem;
    line-height: .25rem;
  }
  .order .ivu-icon-ios-arrow-forward::before {
    font-size: .27rem;
  }
</style>


