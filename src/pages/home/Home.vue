<template>
    <div>
      <home-header></home-header>
      <!-- 使用Header组件 -->
    </div>
</template>
<script>
import HomeHeader from './components/Header'
// 引入Header组件
export default {
  // ES6语法
  name: 'Home',
  components: {HomeHeader}
  // 声明局部组件
}
</script>
<style>  </style>
