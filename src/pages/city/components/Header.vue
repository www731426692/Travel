<template>
    <!-- 城市选择 -->
    <div class="header">
        国内城市选择
        <router-link to="/">
        <!-- 点击跳转到首页 -->
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl'
    .header
        position relative
        // 相对定位,占据原有位置
        overflow hidden
        height  .86rem
        line-height .86rem
        text-align center
        color #fff
        background $bgColor
        font-size .3rem
        .header-back
            position absolute
            // 绝对定位,脱离文档，根据最近的position进行定位
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
</style>
