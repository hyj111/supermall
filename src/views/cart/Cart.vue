<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import NavBar from "components/common/navbar/NavBar.vue";

  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
   
    computed:{
      //两种写法
    //  ...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
    }
  }
</script>

<style scoped>
.nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
