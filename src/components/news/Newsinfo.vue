<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time | dateformat}}</span>
      <span>点击: {{newsinfo.click}}次</span>
    </p>
    <hr>  
    <div class="content" v-html="newsinfo.content"></div>
    <comment-Box :id='this.id'></comment-Box>
  </div>
</template>


<script>
import comment from '../subcomponents/Comments.vue'

import {Toast} from 'mint-ui'
  export default{
    data(){
      return{
        id:this.$route.params.id,
        newsinfo:{}
      }
    },
    created(){
      this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){
        this.$http.get('api/getnew/'+this.id).then(result=>{
          if(result.body.status===0){
            //console.log(result.body)
            this.newsinfo=result.body.message[0]
          }else{
            Toast('加载失败')
          }
        })
      }
    },
    components:{
      'comment-Box':comment
    }
  }
</script>

<style lang="scss">
.newsinfo-container{
  padding:0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>

