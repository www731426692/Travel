<template>
    <div>
      <home-header v-bind:city="city"></home-header>
      <!-- 使用Header组件 -->
      <home-swiper v-bind:swiperList="swiperList"></home-swiper>
      <!-- 使用Swiper组件 -->
      <!-- <div>test</div> -->
      <home-icons v-bind:iconsList="iconsList"></home-icons>
      <home-recommend v-bind:recommendList="recommendList"></home-recommend>
      <home-weekend v-bind:weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
// 引入Header组件
import HomeSwiper from './components/HomeSwiper'
// 引入Swiper组件
import HomeIcons from './components/Icons'
// 引入Icons组件
import HomeRecommend from './components/Recommend'
// 引入Recommend组件
import HomeWeekend from './components/Weekend'
// 引入Weekend组件
import axios from 'axios'
// 引入axios包
export default {
  // ES6语法
  name: 'Home',
  components: {
    // 声明局部组件
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    // 首页传递给子组件传值
    return {
      city: '',
      // 将city传递给home-header组件
      swiperList: [],
      // 将swiperList传递给home-swiper组件
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    // 发送ajax请求,请求所有组件的数据
    getHomeInfo () {
      // 发送get请求
      axios.get('/api/index.json')
      // 访问api的数据时候,proxy自动将api替换成static/mock
        .then(this.getHomeInfoSucc)
      // then()方法是异步执行。先get请求接收到数据之后,再执行getHomeInfoSucc方法
      // 意思是：就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到等的问题。
    },
    getHomeInfoSucc (res) {
      console.log(res)
      // res是get返回的对象集合,包含了所有网络请求数据例如data数据,状态码,responseText等
      res = res.data
      // 将get请求返回的内容中的data赋值给res
      if (res.ret && res.data) {
        // 如果后端正确返回了json数据且有data,我们在json文件中设置了一个字符串ret:true
        this.city = res.data.city
        // 获取到city的值
        this.swiperList = res.data.swiperList
        // 从index.json获取到swiperList值,更新data中的swiperList值
        this.iconsList = res.data.iconsList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    // 执行getHomeInfo函数,发送ajax请求
  }
}
</script>
<style>

</style>
