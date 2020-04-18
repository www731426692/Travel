<template>
    <div>
      <home-header></home-header>
      <!-- 使用Header组件 -->
      <home-swiper></home-swiper>
      <!-- 使用Swiper组件 -->
      <!-- <div>test</div> -->
      <home-icons></home-icons>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
// 引入Header组件
import HomeSwiper from './components/HomeSwiper'
// 引入Swiper组件
import HomeIcons from './components/Icons'
// 引入Icons组件
export default {
  // ES6语法
  name: 'Home',
  components: {HomeHeader, HomeSwiper, HomeIcons}
  // 声明局部组件
}
</script>
<style>  </style>
