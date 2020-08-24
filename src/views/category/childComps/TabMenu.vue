<template>
  <div class="wrapper">
    <scroll id="tab-menu">
      <div class="menu-list">
        <div
          class="menu-item"
          v-for="(item,index) in categories"
          @click="getmaitKey(item.maitKey,index,item.miniWallkey)"
          :key="item.maitKey"
          :class="{active:index===currentIndex}"
        >{{item.title}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getMenu } from "network/category.js";
import Scroll from "components/common/scroll/Scroll";
export default {
  data() {
    return {
      categories: [],
      currentIndex: 0,
    };
  },
  components: {
    Scroll,
  },
  mounted() {
    // 获取左边导航信息
    getMenu().then((res) => {
      this.categories = res.data.category.list;
    });
    this.$emit("getmaitKey", 3627, 10062603);
  },
  methods: {
    getmaitKey(maitKey, index, miniWallke) {
      this.$emit("getmaitKey", maitKey, miniWallke);
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100px;
}
#tab-menu {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.menu-list {
  width: 100px;
  background-color: #f6f6f6;
}
.menu-item {
  font-size: 14px;
  text-align: center;
  height: 45px;
  line-height: 45px;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>

