// 入口文件


//导入Vue
import Vue from 'vue'


//导入路由
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//导入路由文件
import router from './router.js'

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://vue.studyit.io';

//导入头部固定部分
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入轮播图
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入时间插件  格式化时间
import moment from 'moment'
Vue.filter('dateformat',function(datestr,pattern='YYYY-MM-DD HH:MM:SS'){
  return moment(datestr).format(pattern)
})






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