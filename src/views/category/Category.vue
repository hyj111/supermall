<template>
  <div class="category">
    <nav-bar class="profile-nav">
      <span slot="center">分类</span>
    </nav-bar>
    <tab-menu @getmaitKey="getmaitKey"></tab-menu>
    <scroll class="content-category" ref="scroll1">
      <div class="box" v-for="item in contentList">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </div>
      <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl.vue";
import { getSubcategory, getCategoryDetail } from "network/category.js";
import NavBar from "components/common/navbar/NavBar.vue";
import TabMenu from "./childComps/TabMenu";
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList.vue";

export default {
  name: "Category",
  data() {
    return {
      contentList: [],
      titles: ["流行", "新款", "精选"],
      currentType: ["pop", "new", "sell"],
      index: 0,
      goods: [],
      miniWallke: null,
    };
  },
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabControl,
    GoodsList,
  },
  mounted() {
    // 监听图片加载完成
    this.$bus.$on("categoryImgLoad", () => {
      if (this.$refs.scroll1 != undefined) {
        this.$refs.scroll1.scroll.refresh()
      }
    });
  },
  methods: {
    tabClick(index) {
      this.index = index;
      getCategoryDetail(this.miniWallke, this.currentType[this.index]).then(
        (res) => {
          this.goods = res;
        }
      );
    },
    getmaitKey(maitKey, miniWallke) {
      getSubcategory(maitKey).then((res) => {
        this.contentList = res.data.list;
      });
      this.miniWallke = miniWallke;
      getCategoryDetail(this.miniWallke, this.currentType[this.index]).then(
        (res) => {
          this.goods = res;
        }
      );
    },
  },
};
</script>

<style scoped>
.profile-nav {
  background-color: #ff8198;
  font-weight: 700;
  color: #fff;
}
.content-category {
  /* position: relative;
  left: 100px;
  margin-top: 20px;
  width: calc(100% - 100px);
  overflow: hidden;
  height: calc(100vh - 44px - 49px); */
  width: calc(100% - 100px);
  position: absolute;
  top: 55px;
  bottom: 38px;
  left: 100px;
  right: 0;
  overflow: hidden;
}
.box {
  display: inline-block;
  width: 33.3%;
  height: 95px;
  font-size: 12px;
  text-align: center;
}
.box img {
  width: 60px;
  height: 60px;
}
</style>
