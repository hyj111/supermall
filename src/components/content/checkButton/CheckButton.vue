<template>
  <div class="check-button">
      <img src="~assets/img/cart/tick.svg" alt="" :class="{check:isCheck}">
  </div>
</template>

<script>
export default {
    props:{
        isCheck:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>

<style scoped>
.check-button {
    width: 20px;
    height: 20px;  
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #aaa;
}
.check {
    border-color: red;
    background-color: red;
}

</style>