<template>
    <div class="right">
     <ul class="right_list">
         <li>
             <div>
                <p class="list_name">优惠<span>美味又优惠，大家快来抢!</span></p>
                <ul class="goodsListList">
                <li class="good">
                    <div class="good-icon">
                        <img src="../assets/logo.png" />
                    </div>
                    <div class="good-info">
                        <span>海鲜至尊披萨<br/></span>
                        <span>大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹<br/></span>
                        <span>月售47份</span>
                        <span>好评率99%<br/></span>
                        <span id="money">¥47</span><span>起</span>
                        <button id="choose_it">选规格</button>
                    </div>
                </li>
                </ul>
             </div>
         </li>
     </ul>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
        .right{margin:0;padding: 0;width: 90%;float: right; text-align: left;}
        .list_name{height: .5rem;margin:0;background: #f2f2f2;line-height: .6rem;border: 0;font-size: .27rem;color: #707070;padding-left: .15rem;}
        .list_name span{font-size: .1rem;margin-left: .01rem; color: #9f9d9d;margin-left: .1rem;}
        .good{height: 1.4rem;display: flex;justify-content: space-between;border-bottom: .01rem solid #f2f2f2;padding: .1rem 0 .3rem .15rem;}
        .good-icon{width: .6rem;height: .6rem; border: .01rem solid #999;}
        .good-icon img {width: 100%;height: 100%}
        .good-info{margin:0;padding-left: .1rem;;font-size: .1rem;color: #9f9d9d;text-align: left;}
        .good-info span:nth-child(1){font-size:.1rem;color: black;line-height: .35rem;  }
        .good-info p span:nth-child(3),.goodsList p span:nth-child(4){color: black;line-height: .2rem;}
        #money{color: red;font-size: .1rem;margin-right: .03rem;line-height: .2rem;}
        #choose_it{width:.5rem;height:.2rem;background: #3291e8;float: right;margin-right: .1rem;color: white;border: 0;border-radius:.12rem;}
    </style>
