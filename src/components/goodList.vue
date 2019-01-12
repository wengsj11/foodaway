<template>
    <div class="right">
     <ul class="right_list">
         <p class="list_name">优惠<span>美味又优惠，大家快来抢!</span></p>
         <li class="goods">
             <img src="../assets/logo.png">
             <p>
                 <span>海鲜至尊披萨<br/></span>
                 <span>大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹大虾鱿鱼螃蟹<br/></span>
                 <span>月售47份</span>
                 <span>好评率99%<br/></span>
                 <span id="money">¥47</span><span>起</span>
                 <button id="choose_it">选规格</button>
             </p>
         </li>
     </ul>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
        body{width: 100%;height: 100%;margin: 0 auto;text-align: left;}
        .right{margin:0;padding: 0;width: 90%;height: 100%;float: right; }
        .right_list{list-style: none;}
        .list_name{width:100%;height: 2.5rem;margin:0;background: #f2f2f2;line-height: 2.55rem;border: 0;font-size: 1rem;color: #9f9d9d;}
        .list_name span{font-size: .6rem;margin-left: .5rem;}
        .goods{height: 8.1rem;display: flex;justify-content: space-between;border-bottom: .01rem solid #f2f2f2;  }
        .goods img{width: 2.5rem;height: 2.5rem;margin-top: .5rem;}
        .goods p{margin:0;padding-left: .5rem;;font-size: .6rem;color: #9f9d9d;text-align: left;}
        .goods p span:nth-child(1){font-size:1rem;color: black;line-height: 2rem;  }
        .goods p span:nth-child(3),.goods p span:nth-child(4){color: black;line-height: 1.6rem;}
        #money{color: red;font-size: 1rem;margin-right: .2rem;line-height: 1.2rem;}
        #choose_it{width:3.5rem;height:1.4rem;background: #3291e8;float: right;margin-right: .5rem;color: white;border: 0;border-radius:.7rem;}
    </style>
