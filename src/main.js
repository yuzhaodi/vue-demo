// 入口文件


//导入Vue
import Vue from 'vue'


//导入路由
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//导入路由文件
import router from './router.js'


//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//实例
//首先获取本地存储的内容
var car =JSON.parse(localStorage.getItem('car')||'[]')
const store=new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addToCar(state,goodsinfo){
      var flag=false;
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          flag=true
          item.count+=parseInt(goodsinfo.count)
          return true
        }       
      })
      if(flag==false){
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateCount(state,goodsinfo){ 
      state.car.some(item=>{
        if(item.id===goodsinfo.id){
          item.count=parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeList(state,id){
      state.car.some((item,i)=>{
        if(item.id===id){
          state.car.splice(i,1)
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateSelected(state,info){
      state.car.forEach(item=>{
        if(item.id==info.id){
          item.selected=info.selected
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var c=0;
      state.car.forEach(item=>{
        c+=item.count
      })
      return c
    },
    getIdCount(state){
      var o={};
      state.car.forEach(item=>{
        o[item.id]=item.count
      })
      return o
    },
    getSelectedCount(state){
      var s={};
      state.car.forEach(item=>{
        s[item.id]=item.selected
      })
      return s
    },
    getGoodsCountPrc(state){
      var p={
        count:0,
        price:0
      }
      state.car.forEach(item=>{
        if(item.selected==true){
          p.count+=item.count;
          p.price+=item.price*item.count
        }
      })
      return p
    }
  }
})

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
  router, //挂载路由组件
  store  //挂载vuex实例
})