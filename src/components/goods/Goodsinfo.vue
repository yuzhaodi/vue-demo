<template>
  <div class="goodsinfo-container">
    <!-- 小球 -->
    <transition 
    @before-enter="beforeEnter" 
    @enter="enter"
    @after-enter="afterEnter">
      <div class="ball" v-show='ballFlag' ref='ball'></div>
    </transition>





    <!-- 商品轮播 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList='lunbotu' :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{goodinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodinfo.sell_price}}</span>
          </p>
          <p>购买数量：<numbox @getCount='getSelectedCount' :max='goodinfo.stock_quantity'></numbox></p>
          <mt-button type="primary" size='small'>立即购买</mt-button>
          <mt-button type="danger" size='small' @click="addToShopCar">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodinfo.goods_no}}</p>
          <p>库存情况：{{goodinfo.stock_quantity}}</p>
          <p>上架时间：{{goodinfo.add_time | dateformat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="godec(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goCom(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponents/Lunbo.vue'
import numbox from '../subcomponents/NumberBox.vue'
  export default {
    data(){
      return{
        id:this.$route.params.id,
        lunbotu:[],
        goodinfo:{},
        ballFlag:false,
        selectedCount:1
      }
    },
    created(){
      this.getLunbo(),
      this.getGoodsinfo()
    },
    methods:{
      getLunbo(){
        this.$http.get('api/getthumimages/'+this.id).then(result=>{
          if(result.body.status===0){
            result.body.message.forEach(item=>{
              item.img=item.src
            })
            this.lunbotu=result.body.message
          }
        })
      },
      getGoodsinfo(){
        this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
          if(result.body.status===0){
            this.goodinfo=result.body.message[0]
          }
        })
      },
      godec(id){
        this.$router.push({name:'goodsdesc',params:{id}})
      },
      addToShopCar(){
        this.ballFlag=!this.ballFlag

        var goodsinfo={
          id:this.id,
          count:this.selectedCount,
          price:this.goodinfo.sell_price,
          selected:true
        }
        this.$store.commit('addToCar',goodsinfo)
      },
      goCom(id){
        this.$router.push({name:'goodscom',params:{id}})
      },
      beforeEnter(el){
        el.style.transform='translate(0,0)';
      },
      enter(el,done){
        el.offsetWidth;

        const ballPosition=this.$refs.ball.getBoundingClientRect();
        const badgePosition=document.getElementById('badge').getBoundingClientRect();

        const Xdist=badgePosition.left-ballPosition.left;
        const Ydist=badgePosition.top-ballPosition.top;
        console.log(Xdist+'....'+Ydist)
        
        el.style.transform=`translate(${Xdist}px,${Ydist}px)`

        el.style.transition='all 0.5s ease'

        done()
      },
      afterEnter(el){
        this.ballFlag =! this.ballFlag
      },
      getSelectedCount(count){
        this.selectedCount=count;
        console.log(this.selectedCount)
      }
    },
    components:{
      swiper,
      numbox
    }
  }
</script>



<style lang="scss" scoped>
  .goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  }
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
</style>
