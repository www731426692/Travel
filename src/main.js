// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/style/reset.css'
// 引入重置默认样式reset.css文件
import './assets/style/border.css'
// 引入解决移动端1px问题的文件

Vue.config.productionTip = false
fastClick.attach(document.body)
// 将fastClick加载到页面中

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
