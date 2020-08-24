<template>
  <div class="information">
      <div class="balance">
          <span class="zeor">0.00</span>元
          <div>我的余额</div>
      </div>
      <div class="discount">
          <span class="zeor">0</span>个
          <div>我的优惠</div>
      </div>
      <div class="points">
          <span class="zeor">0</span>分
          <div>我的积分</div>
      </div>     
  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.information {
    height: 90px;
    display: flex;
    text-align: center;
    
}
.information>div {
    flex: 1;
    height: 90px;
    padding-top: 30px;
    font-size: 12px;
}
.discount {
    border-right: 2px solid #f2f2f2;
    border-left: 2px solid #f2f2f2;
}
.zeor {
    font-size: 26px;
    font-weight: 600;
    color: #ff5f3e;
    
}

</style>