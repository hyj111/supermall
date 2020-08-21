<template>
  <div class="bottom-bar">
      <div class="check-conten">
        <check-button class="check-button"/>
        <span>全选</span>
      </div>
      <div class="price">
          合计：￥{{totalPrice}}
      </div>
      <div class="calculate">
          结算({{checkedLength}})
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    components:{
        CheckButton
    },
    
    computed :{
       totalPrice(){
           let totle=0
         for(let item of this.$store.state.cartList){
             if(item.checked!=false){
                 totle+=item.peice*item.count
             }
         }              
         return totle.toFixed(2) 
       },
       checkedLength(){
       return this.$store.state.cartList.filter(item => item.checked).length
    }
    },
    
}
</script>

<style scoped>
.bottom-bar {
    display: flex;
    height: 40px;
    background-color: #eee;
    
    
}
.check-conten {
    position: relative;
    display: flex;
    height: 100%;
    align-items:center;
    margin-left: 10px;
}
.check-button {
    margin-right: 5px;
}
.price {
    margin-left: 20px;
    line-height: 40px;
}
.calculate {
    width: 70px;
    position: absolute;
    line-height: 40px;
    right: 0px;
    color: #fff;
    text-align: center;
    background: #ff8198;
}
</style>