<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    addToCart(){
      this.$emit('addCart')
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  /* box-sizing: border-box;   */
  z-index: 9;
  display: flex;
}
.bar-left{
    flex: 1;
    height: 49px;
    background-color: #fff;
    width: 60%;
    display: flex;
    text-align: center;
}
.text {
    font-size: 13px;
}
.bar-left>div{
    flex: 1;
    z-index: 10;
}
.bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
     background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.bar-left .service {
    background-position: 0 -54px;
}
.bar-left .shop {
    background-position: 0 -98px;
}



.bar-right{
    flex: 1;
  
    height: 49px;  
    width: 40%;
    display: flex;
}
.bar-right>div{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 15px;
}
.cart{
    background-color: #fada0f;
}
.buy{
    background-color: #f97496;
    color: #fff;
}
</style>