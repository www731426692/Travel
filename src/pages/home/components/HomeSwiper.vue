<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <!-- 通过v-bind实现父组件向子组件传值 -->
    <!-- option的值传递给swiper组件 -->
    <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img">
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img">
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img">
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img">
    </swiper-slide>
    <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 图片下面的点 -->
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        //  swiper切换的参数配置见https://www.swiper.com.cn/api/autoplay/19.html
        // eslint-disable-next-line standard/object-curly-even-spacing
        autoplay: { delay: 3000, stopOnLastSlide: false, disableOnInteraction: false},
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        speed: 1000,
        setWrapperSize: true,
        autoHeight: true,
        // debugger: true,
        loop: true,
        // 轮播到最后一张是否跳转到第一张
        pagination: {
          el: '.swiper-pagination'
        //   使用swiper-pagination  div
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="stylus">
// .wrapper >>> .swiper-pagination-bullet-active
//     background #fff!important
//     // 在本项目无用,不需要使用穿透
.wrapper
// 因为div加载的非常快,先撑开之后等待图片加载
    overflow hidden
    width 100%
    height 0
    padding-bottom 29%
    // 高度自动撑开width的29%
    background #ccc
    //图片没有加载出来的时候显示一个很浅的灰色背景
    // .swiper-pagination-bullet-active
    //     background blue!important
    //     // 更改圆点颜色
    .swiper-img
    // 图片自适应
        width 100%
</style>
