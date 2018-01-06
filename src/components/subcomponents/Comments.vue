<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="快点输入,别墨迹" maxlength="120"></textarea>
    <mt-button type="primary" size='large'>发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          这个写用户信息的
        </div>
        <div class="cmt-body">
          这里写用户留言的
        </div>
      </div>
    </div>
    <mt-button type='danger' size='large' plain>加载更多</mt-button>
  </div>
</template>

<script>
  
</script>


<style lang="scss" scoped>
  .cmt-container{
    h3{
      font-size: 18px
    }
    textarea{
      font-size: 14px;
      height: 85px;
      margin: 0;
    }
    .cmt-list{
      margin: 5px 0;
      .cmt-item{
        font-size: 13px;
        .cmt-title{
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body{
          line-height: 35px;
          text-indent: 2em;
        }
      }
    }
  }
</style>
