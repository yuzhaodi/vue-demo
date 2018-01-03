<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui';
  export default {
    data(){
      return {
        lunbotuList:[]
      };
    },
    created(){
      this.getlunbo()
    },
    methods:{
      getlunbo(){
        this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
          //console.log(result.body);
          if(result.body.status===0){
            this.lunbotuList=result.body.message;
          }else{
            Toast('加载失败');
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
