<template>
  <div>
     <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<script>
  export default {
    data(){
      return {

      }
    },
    props:['lunbotuList','isfull']
  }
</script>


<style lang="scss" scoped>
    .mint-swipe{
      text-align: center;
    height: 200px;
    img{
      height: 100%;
    }
    .full{
      width: 100%;
    }
  }
</style>
