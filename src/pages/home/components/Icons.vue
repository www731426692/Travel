<template>
  <div class="icons">
        <swiper>
          <swiper-slide v-for="(page, index) of pages" v-bind:key="index">
            <!-- 轮播页面有几页,有pages决定,pages=[[],[]]如果数组二维数组，代表两页 -->
            <!-- 使用index作为key值 -->
            <!-- <div class="icon" v-for="item of iconList" v-bind:key="item.id"> -->
            <div class="icon" v-for="item of page" v-bind:key="item.id">
              <!-- 循环数据换为page了 -->
              <div class="icon-img">
                <!-- <img src="../../../assets/image/writeTxt.png" class="icon-imgContent" /> -->
                <!-- <p class="icon-p">酒店</p> -->
                <img v-bind:src='item.imgUrl' class="icon-imgContent" />
                <p class="icon-p">{{item.desc}}</p>
              </div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide>
            <div class="icon">
              <div class="icon-img">
                <img src="../../../assets/image/bus.png" class="icon-imgContent" />
                <p class="icon-p">机票</p>
              </div>
            </div>
          </swiper-slide> -->
       </swiper>
        <!-- <div class="icon-img">
        <img src="../../../assets/image/freeTravel.png" class="icon-imgContent">
        <p class="icon-p">火车票</p>
      </div>
      <div class="icon-img">
        <img src="../../../assets/image/lowFlight.png" class="icon-imgContent">
        <p class="icon-p">景点门票</p>
      </div>
      <div class="icon-img">
        <img src="../../../assets/image/writeTxt.png" class="icon-imgContent">
        <p class="icon-p">攻略</p>
      </div>
      <div class="icon-img">
        <img src="../../../assets/image/bus.png" class="icon-imgContent">
        <p class="icon-p">汽车票船票</p>
      </div>
      <div class="icon-img">
        <img src="../../../assets/image/freeTravel.png" class="icon-imgContent">
        <p class="icon-p">自由行</p>
      </div>
      <div class="icon-img">
        <img src="../../../assets/image/lowFlight.png" class="icon-imgContent">
        <p class="icon-p">低价机票</p>
        </div> -->
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: require('../../../assets/image/writeTxt.png'),
        // vue-cli与webpack本地静态路径出错导致图片不显示,通过require解决
        desc: '酒店'
      }, {
        id: '0002',
        imgUrl: require('../../../assets/image/bus.png'),
        desc: '机票'
      }, {
        id: '0003',
        imgUrl: require('../../../assets/image/freeTravel.png'),
        desc: '火车票'
      }, {
        id: '0004',
        imgUrl: require('../../../assets/image/lowFlight.png'),
        desc: '景点门票'
      }, {
        id: '0005',
        imgUrl: require('../../../assets/image/writeTxt.png'),
        desc: '攻略'
      }, {
        id: '0006',
        imgUrl: require('../../../assets/image/bus.png'),
        desc: '汽车票船票'
      }, {
        id: '0007',
        imgUrl: require('../../../assets/image/freeTravel.png'),
        desc: '自由行'
      }, {
        id: '0008',
        imgUrl: require('../../../assets/image/lowFlight.png'),
        desc: '低价机票'
      }, {
        id: '0009',
        imgUrl: require('../../../assets/image/lowFlight.png'),
        desc: '低价机票'
      }]
    }
  },
  computed: {
    // 计算属性,将九个图片的一维数组拆分成二维数组。    分页器算法
    // eslint-disable-next-line vue/return-in-computed-property
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // floor函数取不大于index/8的最大整数
        // page只有两个值0与1   pages[0]与pages[1]刚进入判断都没有赋值,都为假
        if (!pages[page]) {
          // pages[0]未赋值,为false
          pages[page] = []
          // pages[0]赋值[],变为true
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/assets/style/mixin.styl"
// 引入文字溢出部分打点styl文件
  // .icons
  //   overflow: hidden
  //   height: 0
  //   padding-bottom: 40%
  // 解决只能在上半部分拖动的问题
  .icons >>> .swiper-container
  // 样式穿透,将icons的样式写到swiper上
    overflow: hidden
    height: 0
    padding-bottom: 38%
    // 与HomeSwiper一样,占位,相对于width自动撑开38%
    // background: green;
    // .icon
    //   float left
    //   width: 100%;
    //   overflow: hidden
    //   height 0
    //   padding-bottom: 20%
    // 父级元素height 0,所以不能使用height x%的形式,要使用padding
    // padding-bottom: 25%;
    // 相对于父元素的width
    // background: red;
    .icon-img
      // border 1px solid black
      float: left
      width: 25%
      .icon-imgContent
        // background red
        width: 60%
        // 图片居中
        display: block
        margin: 0 auto
        // background red
      .icon-p
        text-align: center
        // 有个问题,如何实现字体随着页面缩小而缩小?
        // 字体居中
        // 溢出部分打点隐藏
        // overflow hidden
        // white-space nowrap
        // text-overflow ellipsis
        // 可以将这个功能封装成一个函数存在mixin.styl文件里
        ellipsis()
        // 调用mixin.styl文件里的方法
</style>
