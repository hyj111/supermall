<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot="center">购物街</span>
    </nav-bar>
     <tab-control :titles="titles" 
                      class="tab-control" 
                      @tabClick="tabClick" 
                      ref="tabControl1" 
                      v-show="isTabFixed"                       
                      >
                      </tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" @pullingUp="pullingUp">     
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="titles"                       
                      @tabClick="tabClick" 
                      ref="tabControl2" 
                      >
                      </tab-control>
        <goods-list :goods="goods[currentType[index]].list"></goods-list>   
    </scroll>
   <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home";
import {debouce} from 'common/debouce'

import {backTopMixin} from "common/mixin"

export default {
  name: "Home",
   mixins:[backTopMixin],
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
   
  },

  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: ["pop", "new", "sell"],
      index: 0,
      
      tabOffsetTop:0,
      isTabFixed:false
      
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 3.监听item中图片加载完成
    this.$bus.$on('homeItemImgLoad',()=>{
      
      this.$refs.scroll.scroll.refresh()
    })
    
  },
  mounted(){
    // 3.监听item中图片加载完成
    // const refresh = debounce(this.$refs.scroll.scroll.refresh,50)
    // this.$bus.$on('homeItemImgLoad',()=>{
    //   refresh()
    // })
  },
  destroyed(){
    console.log('首页销毁');
  },
  
  methods: {
    // 网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {

        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
         // 监听让batterscroll刷新一下,重新计算高度
        // this.$refs.scroll.scroll.refresh()
      });
    },
    // 事件监听相关的方法
    tabClick(index) {
      this.index = index;
       this.$refs.tabControl1.currentIndex = index
       this.$refs.tabControl2.currentIndex = index
     
     
    },
   
    contentScroll(position){
      // 1.判断BackTop是否显示
      position.y<-1000?this.isShowBackTop=true:this.isShowBackTop=false
      // 2.决定tabCon是否吸顶（position:fixed）
      this.isTabFixed = (-position.y)>this.tabOffsetTop
   
    },
    // 上拉加载更多
    pullingUp(){    
      this.getHomeGoods(this.currentType[this.index])    
      this.$refs.scroll.scroll.refresh()
      console.log('上拉加载');
      this.$refs.scroll.scroll.finishPullUp()
      
    },
    swiperImageLoad(){
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop      
    }
  },
};
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

  
    z-index: 9;
  }
  .tab-control {
    position: relative;
    z-index: 10;
  }
  

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*.content {*/
    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  /*}*/

</style>
