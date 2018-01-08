import VueRouter from 'vue-router'


// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Photoslist from './components/photos/PhotosList.vue'
import Photoinfo from './components/photos/Photoinfo.vue'
import Goodslist from './components/goods/Goodslist.vue'
import Goodsinfo from './components/goods/Goodsinfo.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:id',component:Newsinfo},
    {path:'/home/photos',component:Photoslist},
    {path:'/home/photoinfo/:id',component:Photoinfo},
    {path:'/home/goodslist',component:Goodslist},
    {path:'/home/goodsinfo/:id',component:Goodsinfo,name:'goodsinfo'}
  ],
  linkActiveClass:' mui-active'
})

// 把路由对象暴露出去
export default router