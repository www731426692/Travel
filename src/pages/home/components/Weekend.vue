<template>
    <div>
        <div class="title">假期去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" v-bind:key="item.id">
                <div class="item-img-wrapper">
                    <img v-bind:src="item.imgUrl" class="item-img">
                </div>
                <!-- 需要div包裹，因为img是内联元素,不独占一行 -->
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: require('../../../assets/image/GZRB.jpg'),
  //       title: '世界梦号 广州出发',
  //       desc: '畅游越南/菲律宾/日本'
  //     }, {
  //       id: '002',
  //       imgUrl: require('../../../assets/image/OZH.jpg'),
  //       title: '欧洲河轮游',
  //       desc: '欧洲河之游，不识人间愁滋味'
  //     }, {
  //       id: '003',
  //       imgUrl: require('../../../assets/image/SMJN.jpg'),
  //       title: '美丽昆明',
  //       desc: '水墨之滇,云裳之南'
  //     }]
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/mixin.styl"
// 引入styl文件,使用溢出部分打点函数ellipsis ()
    .title
        overflow hidden
        font-size .3rem
        // margin-top .2rem
        line-height .7rem
        background #eeeeee
        text-indent .2rem
        ellipsis ()
    .item-img-wrapper
        width 100%
        overflow hidden
        height 0
        padding-bottom 30.48%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            color #000
            line-height .54rem
            font-size .32rem
            ellipsis ()
        .item-desc
            line-height .4rem
            color #cccccc
            ellipsis ()
</style>
