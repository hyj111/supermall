<template>
  <div class="bottom-bar">
    <div class="check-conten">
      <check-button class="check-button" :isCheck="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">合计：￥{{totalPrice}}</div>
    <div class="calculate" @click="calcClick">结算({{checkedLength}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  components: {
    CheckButton,
  },

  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      let totle = 0;
      for (let item of this.$store.state.cartList) {
        if (item.checked != false) {
          totle += item.peice * item.count;
        }
      }
      return totle.toFixed(2);
    },
    checkedLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.filter((item) => !item.checked).length;
    },
  },
  methods: {
    checkClick() {
      //   console.log(this.cartList);
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      if(!this.isSelectAll) {
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  },
};
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
  align-items: center;
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