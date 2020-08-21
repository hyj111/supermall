<template>
  <!-- 滚动条 -->
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    data() {
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    mounted() {
        // 创建betterscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: true,
      click:true,
     
    });
     
    // 监听betterscroll对象
    this.scroll.on("scroll", (position) => {
      this.$emit('scroll',position)
      
    });
    this.scroll.on("pullingUp", () => {
      setTimeout(() => {
        this.$emit('pullingUp')
      }, 500);
      
    });
  },
}
</script>

<style>

</style>