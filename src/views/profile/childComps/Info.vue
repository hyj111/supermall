<template>
  <div class="info">
      <div class="message" v-for="(item,index) in img">
          <img :src="require('assets/img/profile/'+item+'.svg')" alt="">
          <span class="content">{{message[index]}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message:['我的消息','积分商城','会员卡','我的购物车','下载购物APP'],

           img:['message','pointer','vip','cart','shopping']
       }
    },
}
</script>

<style scoped>
.message{
    height: 49px;
    line-height: 49px;
    border-bottom:1px solid #ccc ;
}

img {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
    margin-left: 10px;
}
</style>