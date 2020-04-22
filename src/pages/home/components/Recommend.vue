<template>
    <div>
        <div class="title">热门推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" v-bind:key="item.id">
                <!-- 引入1px边框 加上class border-bottom-->
                <!-- <img src="../../../assets/image/LH.jpg" class="item-img">
                <div class="item-info">
                    <p class="item-title">老虎滩海洋公园(5A)</p>
                    <p class="item-desc">浪漫大连首站，浪漫的海洋主题乐园</p>
                    <button class="item-button">查看详情</button>
                </div> -->
                <img v-bind:src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: require('../../../assets/image/LH.jpg'),
        title: '老虎滩海洋公园(5A)',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '002',
        imgUrl: require('../../../assets/image/XH.jpg'),
        title: '大连星海广场',
        desc: '大连城市地标'
      }, {
        id: '003',
        imgUrl: require('../../../assets/image/HC.jpg'),
        title: '海昌发现王国',
        desc: '体验惊险刺激的游戏设施'
      }, {
        id: '004',
        imgUrl: require('../../../assets/image/KH.jpg'),
        title: '星海湾跨海大桥',
        desc: '海上地锚式悬索跨海大桥'
      }, {
        id: '005',
        imgUrl: require('../../../assets/image/BC.jpg'),
        title: '棒棰岛(4A)',
        desc: '清澈神秘的海中孤岛'
      }, {
        id: '006',
        imgUrl: require('../../../assets/image/BYS.jpg'),
        title: '白玉山(4A)',
        desc: '"登顶俯瞰旅顺港全景"'
      }, {
        id: '007',
        imgUrl: require('../../../assets/image/ELS.jpg'),
        title: '俄罗斯风情街',
        desc: '"漫步俄式风情街区"'
      }, {
        id: '008',
        imgUrl: require('../../../assets/image/SL.jpg'),
        title: '大连森林动物园(4A)',
        desc: '"在森林中与动物亲密接触"'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/mixin.styl"
// 引入styl文件,使用溢出部分打点函数ellipsis ()
    .title
        overflow hidden
        font-size .3rem
        margin-top .2rem
        line-height .7rem
        background #eeeeee
        text-indent .2rem
        ellipsis ()
    .item
        // touch-action: none;
        display flex
        height 1.9rem
        // background red
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            // overflow hidden
            // flex布局下,溢出部分打点不起作用。
            // 1、在父级设置overflow:hidden解决  2、在具备flex 1的层级下奖赏min-width 0
            min-width 0
            // 设置段落的最小宽度,溢出部分打点必须要设置宽度
            flex 1
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis ()
            .item-desc
                margin-top .05rem
                line-height .4rem
                color #cccccc
                ellipsis ()
                // 溢出部分打点
            .item-button
                background #ff9300
                padding 0 .1rem
                border-radius .06rem
                margin-top .2rem
                color #fff
</style>
