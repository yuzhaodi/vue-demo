<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1' data-numbox-max='9'>
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number" ref="numbox" @change='countChange'/>
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>



<script>
import mui from '../../lib/mui/js/mui.min.js'
  export default {
    data(){
      return {

      }
    },
    mounted(){
      mui('.mui-numbox').numbox()
    },
    methods:{
      countChange(){
      }
    },
  }

</script>



<style lang="scss" scoped>
</style>
