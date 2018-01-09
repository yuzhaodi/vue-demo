<template>
  <div class="shopcar-container">
    <!-- 根据对应的i  删除对应的商品 -->                                 
    <div class="goods-list" v-for="(item,i) in goodsList" :key="item.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <!-- v-model绑定的是对应的按钮选中状态 selected:true/false-->
            <!-- mt-switch 中有change事件,监听选中状态的改变 -->
            <mt-switch 
            v-model="$store.getters.getSelectedCount[item.id]"
            @change='getselectedChange(item.id,$store.getters.getSelectedCount[item.id])'></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount='$store.getters.getIdCount[item.id]' :goodsid='item.id'></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
              <p>总计（不含运费）</p>
              <p>已勾选商品 <span class="red">{{$store.getters.getGoodsCountPrc.count}}</span> 件， 总价 <span class="red">￥{{$store.getters.getGoodsCountPrc.price}}</span></p>
            </div>
             <mt-button type="danger">去结算</mt-button>
					</div>
				</div>
			</div>
      <p>{{$store.getters.getSelectedCount}}</p>
  </div>
</template>

<script>
import numbox from '../subcomponents/Shop_numberBox.vue'
export default {
  data(){
    return {
      goodsList:[]
    }
  },
  created(){
    this.getGoodsList()
  },
  methods:{

    //根据本地存储获取商品列表
    getGoodsList(){
      var idArr=[];
      //遍历购物车信息,将商品id放入数组
      this.$store.state.car.forEach(item=>idArr.push(item.id))
      if(idArr.length<=0){
        return
      }   
      //根据id获取对应的商品列表
      this.$http.get("api/goods/getshopcarlist/" + idArr.join(",")).then(result=>{
        if(result.body.status===0){
          this.goodsList=result.body.message;
        }
      })
    },

    //删除商品
    remove(id,i){
      //页面数组删除
      this.goodsList.splice(i,1);
      //本地存储删除
      this.$store.commit('removeList',id)
    },

    //改变按钮的选中状态
    getselectedChange(id,val){
      // console.log(id,val)
      //将对应的值传入updateSelected事件中 进行操作
      this.$store.commit('updateSelected',{id,selected:val})
    }
  },
  components:{
    numbox
  }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
