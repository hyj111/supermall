<template>
<div class="tab-bar-item" @click="itemClick">
  <slot name="item-icon" v-if="isActive" ></slot>
  <slot name="item-icon-active" v-else></slot>
  <div :style="{color: activeStyle}"><slot name="item-text" ></slot></div>
</div>

</template>

<script>
export default {
  name: "TabbarItem",
  data () {
      return {
        //   isActive:"true"
      }
     
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path) 
      },
      activeStyle(){
          return !this.isActive? this.activeColor :''
      }
  },
  props: {
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }

  },
   methods: {
          itemClick(){
              this.$router.push(this.path)
          }
      }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>