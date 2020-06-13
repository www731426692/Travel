<template>
    <!-- 城市搜索框 -->
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音" onfocus="this.placeholder=''" onblur="this.placeholder='输入城市名或拼音'">
        <!-- 聚焦input为空 -->
    </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl'
  .search
    height .7rem
    text-align center
    background $bgColor
    .search-input
      box-sizing border-box
      width 96%
      height .6rem
      padding 0 .25rem
      text-align center
      border-radius .04rem
      color #000
</style>
