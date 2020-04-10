<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
        <!-- &#xe624;是字体 -->
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题</div>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
  // 输出模块命名为HomeHeader
}

</script>
<style lang="stylus" scoped>
//scoped属性表明此style样式只对此组件生效,不会污染全局组件
// @import '../../../assets/style/varibles.styl'
@import '~@/assets/style/varibles.styl'
// 引用全局变量样式文件
  .header
    display flex
    height .86rem
    // background #00bcb4
    background $bgColor
    // 使用varibles.styl的全局变量  报错不生效
    color #fff
    line-height .86rem
    // 1rem = html font-size = 50px;
    // 我们在reset.css中设置的html font-size是50px
    // 设计师给的是二倍尺寸的图片,我们量出来的图片时86px,我们应该设置成43px
    // 转换成rem:86/100 = 0.86;这是我们设置html font = 50px的原因(简化了rem的计算)  ==》.86rem = 43px
    .header-left
      width .64rem
      float left
      .back-icon
      // 返回图标居中
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      border-radius .1rem
      background #fff
      color #ccc
      padding-left .2rem
    .header-right
      width 1.24rem
      float right
      text-align center
      .arrow-icon
      margin-left -.04rem
        font-size .24rem
</style>
