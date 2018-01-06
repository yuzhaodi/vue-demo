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
Vue.http.options.emulateJSON = true;



//导入轮播图  和头部固定部分   和按钮组件   和懒加载  按需导入
// import { Swipe, SwipeItem,Header,Button,Lazyload } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

//改为全部导入  因为懒加载需要
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//导入缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)


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