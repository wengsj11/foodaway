<template>
    <!-- 头部 -->
    <!-- 个人信息 -->

    <!-- 单元格 -->
    <div style="padding: 10px;background: #f8f8f9">
        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" >
                    <image src='../../icon/皇冠会员.svg'  solt='icon' />
                </Cell>
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <!-- <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell> -->
            </CellGroup>
        </Card>
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
  
</style>