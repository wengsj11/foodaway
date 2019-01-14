<template>
     <!-- 底部+购物车 -->
    <div class="bottomcar">
    <!-- 店家详情页底部 -->
    <nav class="bot">
        <div >
            <img src="../assets/icon/购物车.png">
        </div>
        <p class="fan">
            <span class="sum">¥2008</span>
            <span class="send">配送费¥5</span>
        </p>
        <p>去结算</p>
    </nav>
    <div>
        <!-- 标题 -->
        <div>
            <p><span>购物车</span>
                <span class="clr"><img src="../assets/icon/垃圾桶.png">清空</span>
            </p>
            <ul class="car">
                <!-- 商品 -->
                <li>
                    <!-- 品名 -->
                    <span class="item_name">
                        <span class="goods">双人分享套餐A</span>
                        <span class="beizhu">芝士</span>
                    </span>
                        <!-- 价格 -->
                    <span class="univalent">¥139</span>
                    <!-- 加减 -->
                    <span class="dis_and_add">
                    <img class="dis" src="../assets/icon/减.png">
                    <span>1</span>
                    <img class="add" src="../assets/icon/加.png">
                    </span>   
                </li>
                <li>
                    <!-- 品名 -->
                    <span class="item_name">
                        <span class="goods">双人分享套餐A</span>
                        <span class="beizhu">芝士</span>
                    </span>
                        <!-- 价格 -->
                    <span class="univalent">¥139</span>
                    <!-- 加减 -->
                    <span class="dis_and_add">
                    <img class="dis" src="../assets/icon/减.png">
                    <span>1</span>
                    <img class="add" src="../assets/icon/加.png">
                    </span>   
                </li>
                <li>
                    <!-- 品名 -->
                    <span class="item_name">
                        <span class="goods">双人分享套餐A</span>
                        <span class="beizhu">芝士</span>
                    </span>
                        <!-- 价格 -->
                    <span class="univalent">¥139</span>
                    <!-- 加减 -->
                    <span class="dis_and_add">
                    <img class="dis" src="../assets/icon/减.png">
                    <span>1</span>
                    <img class="add" src="../assets/icon/加.png">
                    </span>   
                </li>
                <li>
                    <span class="item_name">
                        <span class="goods">双人分享套餐A</span>
                        <span class="beizhu">芝士</span>
                    </span>
                        <!-- 价格 -->
                    <span class="univalent">¥139</span>
                    <!-- 加减 -->
                    <span class="dis_and_add">
                    <img class="dis" src="../assets/icon/减.png">
                    <span>1</span>
                    <img class="add" src="../assets/icon/加.png">
                    </span>   
                </li>
                <li>
                    <!-- 品名 -->
                    <span class="item_name">
                        <span class="goods">双人分享套餐A</span>
                        <span class="beizhu">芝士</span>
                    </span>
                        <!-- 价格 -->
                    <span class="univalent">¥139</span>
                    <!-- 加减 -->
                    <span class="dis_and_add">
                    <img class="dis" src="../assets/icon/减.png">
                    <span>1</span>
                    <img class="add" src="../assets/icon/加.png">
                    </span>   
                </li>
            </ul>
        </div>
    </div>
    
    </div>
</template>

<script>
export default {

}
</script>

 <style scoped>
        /* 全局,要注意 */
        html,body{width:100%;height:100%;}
        body{margin:0;padding: 0; height: 100%;}
        /* 整个底部 */
        .bottomcar{position: relative;width: 100%;height: 100%;bottom: 0;left: 0;}
        /* 底部结算 */
        .bottomcar nav{height:40px;width:100%;line-height:40px;position: absolute;bottom: 0;color: white;z-index: 998;}
        .bottomcar nav ul li:nth-child(1){width: 70%;background:#3d3e3f;position: absolute;left: 0;bottom: 0;height: 40px; }
        .bottomcar nav ul li:nth-child(2){width: 30%;background: #4cd964;position: absolute;right: 0;bottom: 0;text-align: center;}
        .fan{width: 80px;height: 40px;font-size: 6px;}
        .sum,.send{width: 100%;height: 20px;float: left;margin-left:70px; line-height: 20px;}
        .sum{font-size: 12px;}
        .bottomcar nav ul li img{width: 40px;height: 40px;border: 6px solid #3d3e3f;border-radius: 40px;position: absolute;bottom:0;left: 6px;background: white; }
        /* 购物车 */
        .car{position: absolute;bottom: 40px;left: 0;width: 100%;text-indent: 10px;background: #fff;}
        .car img{width: 16px;height: 16px;}
        /* 标题 */
        .car p{height: 30px;background: #edeff1;line-height: 30px;}
        .car p span:nth-child(1){font-size:16px; }
        .clr{float: right;margin-right: 10px;position: relative;}
        .clr img{width: 20px;height: 20px;position: absolute;top:5px;left: -10px;}
        /* 商品 */
        .car li{height: 40px;line-height: 40px;font-size: 12px;display: flex;}
        .univalent{color: red;font-weight: bold;float: right;margin-right: 30px;flex: 1;width: 10%;}
        .item_name{flex:1;width: 70%;font-size: 6px;height: 40px;}
        .goods,.beizhu{width: 180px;float: left;height: 10px;line-height: 10px; }
        .goods{font-size: 12px;height: 20px;line-height: 20px;}
        .dis_and_add{flex:1;width:20%;float: right;margin-right: 10px;position: relative;text-align: center;text-indent:-3px;}
        .dis{position: absolute;left: 0;top:12px;}
        .add{position: absolute;right: 0;top:12px;}

    </style>
