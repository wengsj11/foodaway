/* eslint-disable */
<template>
    <div class="view">
         <Top title="我的" :fixed="true" ></Top>
        <div class="top">
        <!-- 头部 -->
        <!-- 个人信息 -->
            <div class="user">
                <div class="user-via">
                    <img src="../../assets/logo.png" />
                </div>
                <div class="user-info">
                    <h3>肥宅</h3>
                    <h3><Icon type="md-phone-portrait" /><span class="phone">18060023333</span></h3>
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
                    <div class="icon"><img src='../../assets/icon/我的订单.svg' /></div>
                    <span>我的订单</span>
                    <div class="line"></div>
                </Cell>
                <Cell title="积分商城" to="/components/button" target="_blank" >
                    <div class="icon"><img src='../../assets/icon/积分商城.svg'  /></div>
                    <span>积分商城</span>
                    <Badge :count="2" slot="extra" />
                    <div class="line"></div>

                </Cell>
                <Cell title="饿了么会员卡" to="/components/button" target="_blank" >
                    <div class="icon"><img src='../../assets/icon/皇冠会员.svg'  /></div>
                    <span>饿了么会员卡</span>
                </Cell>

                <!-- 服务中心 -->
                <Cell title="服务中心" to="/components/badge" class="huihui">
                    <div class="icon"><img src='../../assets/icon/服务中心.svg'   /></div>
                    <span>服务中心</span>
                    <div class="line"></div>
                </Cell>
                <Cell title="下载饿了么App" to="/components/badge">
                    <div class="icon"><img src='../../assets/icon/饿了么.svg'  solt='icon' /></div>
                    <span>下载饿了么App</span>
                    <!-- <Icon type="md-flame" /> -->
                    <!-- <Icon type="ios-pricetags-outline" /> -->
                </Cell>
            </CellGroup>    
        </div>
    </div>
</template>
<script>
import Top from '../../components/Top.vue';
export default {
     data () {
            return {
                switchValue: true
            }
        },
        components: {
            Top,
        }
}
</script>

<style>
.clearfix {
    content:'';
    display: table;
    clear: both;
}
.ivu-layout-content {
    height: 100%;
}
.view {
    height: 100%;
    background: #F1F1F1;
}
.user {
    display: flex;
    position: relative;
    text-align: left;
    height: 1.4rem;
    padding: .3rem .2rem;
    background: #26a2ff;
    color: white;
    font-size: .13rem;
    font-family: "宋体";
    align-items: center;
}
  .user-via {
      float: left;
      width: .8rem;
      height: .8rem;
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
      margin: auto .2rem;
      font-size: .22rem;
  }
    .ivu-icon-md-phone-portrait:before {
        font-size: .3rem;
        line-height: .3rem;
        vertical-align: center;
        text-align: left;
    }
     .user-info .ivu-icon-ios-arrow-forward {
        position: absolute;
        top: 50%;
        right: 5%;
        margin-top: -.15rem;
        font-size: .3rem;
    }
    .phone {
        line-height: .3rem;
    }
    .pannel {
        width: 100%;
        height: 1.2rem;
        display: flex;
        font-size: .13rem;
        color: #666;
        font-family: '宋体';
        background: #fff;
    }
    .pannel>div {
        flex: 1;
        border-right: .01rem solid #e5e5e5;
        padding-top: .25rem;
    }
    .orange {
        font-size: .4rem;
        font-weight: bold;
        color: #FFAA25;
        font-family: '微软雅黑';

    }
    .red {
        font-size: .4rem;
        color: #FF5E35;
        font-weight: bold;
        font-family: '微软雅黑';

    }
    .green {
        font-size: .4rem;
        font-weight: bold;
        color: #6CC606;
        font-family: '微软雅黑';
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
.line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 93%;
    height: 0;
    border: .01rem solid #f2f2f2;
}

.cellgroup {
    background: #fff;
}
.cellgroup:nth-child(1) {
    border-top: .15rem solid #F1F1F1;
}
 .huihui{
    border-top: .15rem solid #F1F1F1;
 }
</style>