/* eslint-disable */
<template>
    <div>
        <div class="top">
        <!-- 头部 -->
        <!-- 个人信息 -->
            <div class="user">
                <div class="user-via">
                    <img src="../assets/logo.png" />
                </div>
                <div class="user-info">
                    <h3>肥宅</h3>
                    <h3><Icon type="ios-phone-portrait" /><span class="phone">18060023333</span></h3>
                    <Icon type="ios-arrow-forward" />
                </div>
                
            </div>
        </div>
        <div class="pannel">
            <div>
                <h3><span class="orange">0</span>元</h3>
                <h4>我的余额</h4>
            </div>
            <div>
                <h3><span class="red">1</span>个</h3>
                <h4>我的优惠</h4>
            </div>
            <div>
                <h3><span class="green">960</span>分</h3>
                <h4>我的积分</h4>
            </div>
        </div>
        <!-- 单元格 -->
        <div  class="cells">
            <CellGroup class="cellgroup">
                <Cell title="我的订单" to="/components/button" target="_blank" >
                    <div class="icon"><img src='../../icon/我的订单.svg' /></div>
                    <span>我的订单</span>
                    <div class="line"></div>
                </Cell>
                <Cell title="积分商城" to="/components/button" target="_blank" >
                    <div class="icon"><img src='../../icon/积分商城.svg'  /></div>
                    <span>积分商城</span>
                    <Badge :count="2" slot="extra" />
                    <div class="line"></div>

                </Cell>
                <Cell title="饿了么会员卡" to="/components/button" target="_blank" >
                    <div class="icon"><img src='../../icon/皇冠会员.svg'  /></div>
                    <span>饿了么会员卡</span>
                </Cell>

                <!-- 服务中心 -->
                <Cell title="服务中心" to="/components/badge" class="huihui">
                    <div class="icon"><img src='../../icon/服务中心.svg'   /></div>
                    <span>服务中心</span>
                    <div class="line"></div>
                </Cell>
                <Cell title="下载饿了么App" to="/components/badge">
                    <div class="icon"><img src='../../icon/饿了么.svg'  solt='icon' /></div>
                    <span>下载饿了么App</span>
                    <!-- <Icon type="md-flame" /> -->
                    <!-- <Icon type="ios-pricetags-outline" /> -->
                </Cell>
            </CellGroup>    
        </div>
    </div>
</template>
<script>
export default {
     data () {
            return {
                switchValue: true
            }
        },
}
</script>

<style>
.clearfix {
    content:'';
    display: table;
    clear: both;
}
.user {
    position: relative;
    text-align: left;
    height: 150px;
    padding: .5rem .2rem .3rem;
    background: #298EEB;
    color: white;
    font-size: .13rem;
    font-family: "宋体";
}
  .user-via {
      float: left;
      width: .7rem;
      height: .7rem;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #999;
      background: #fff;
  }
  .user-via img {
      width: 100%;
  }
  .user-info {
      float: left;
      width: 1.8rem;
      padding-top: .2rem;
      padding-left: .1rem;
  }

    .ivu-icon-ios-phone-portrait:before {
        font-size: .2rem;
        line-height: .24rem;
        vertical-align: center;
    }
     .user-info .ivu-icon-ios-arrow-forward {
        position: absolute;
        top: 50%;
        right: 5%;
        font-size: .18rem;
    }
    .phone {
        font-size: .16rem;
        line-height: .24rem;
    }
    .pannel {
        width: 100%;
        height: .6rem;
        display: flex;
        font-size: .13rem;
        color: #666;
        font-family: '宋体'
    }
    .pannel>div {
        flex: 1;
        border-right: .01rem solid #e5e5e5;
    }
    .orange {
        font-size: .25rem;
        font-weight: bold;
        color: #FFAA25;
    }
    .red {
        font-size: .25rem;
        color: #FF5E35;
        font-weight: bold;
    }
    .green {
        font-size: 25px;
        font-weight: bold;
        color: #6CC606;
    }

.ivu-cell-group {
    text-align: left;
}
.icon {
    display: inline-block;
    width: .15rem;
    height: .15rem;
    line-height: .24rem;
    vertical-align: top;
    margin-right: .1rem;;
}
.icon img{
    width: 100%;
    height: 100%;

}

.ivu-cell-icon {
    background: url('../../icon/皇冠会员.svg');
    
}
.line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90%;
    height: 0;
    border: 0.04rem solid #e5e5e5;
}
.cells {
    /* 高度占满整个页面: overflow:hidden? */
    height: 6rem;
    background: #F1F1F1;
}
.cellgroup {
    background: #fff;
}
.cellgroup:nth-child(1) {
    border-top: .1rem solid #F1F1F1;
}
 .huihui{
    border-top: .1rem solid #F1F1F1;
 }
</style>