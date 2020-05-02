/* eslint-disable no-unused-vars */
<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" ref="mySwiper" v-if="showSwiper">
      <!-- 传递过来的值如果是空数组,则swiper不会被创建【使用计算属性】 -->
      <!-- 通过v-bind实现父组件向子组件传值 -->
      <!-- option的值传递给swiper组件 -->
      <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
        <img v-bind:src="item.imgUrl" class="swiper-img" />
      </swiper-slide>
      <!-- <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/image/img.png" class="swiper-img" />
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 图片下面的点 -->
      <!-- 组件的一部分内容可以被父组件定制的时候，使用slot插槽 -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        //  swiper切换的参数配置见https://www.swiper.com.cn/api/autoplay/19.html
        // eslint-disable-next-line standard/object-curly-even-spacing
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        paginationClickable: true,
        mousewheelControl: true,
        observer: true,
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
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus">
// .wrapper >>> .swiper-pagination-bullet-active
// background #fff!important
// // 在本项目无用,不需要使用穿透
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  // 不能写height 29%是因为height相对的是父级元素的高度，而不是width
  padding-bottom: 29%;
  // 高度自动撑开父元素width的29%
  background: #ccc;

  // 图片没有加载出来的时候显示一个很浅的灰色背景
  // .swiper-pagination-bullet-active
  // background blue!important
  // // 更改圆点颜色
  .swiper-img {
    width: 100%;
  }
}
</style>
