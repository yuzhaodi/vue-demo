// 入口文件


//导入Vue
import Vue from 'vue'


//导入路由
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//导入路由文件
import router from './router.js'

//导入头部固定部分
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//导入app.vue
import app from './App.vue'



var vm=new Vue({
  el:'#app',
  render:c=>c(app),
     //渲染到index.html
  router  //挂载路由组件
})