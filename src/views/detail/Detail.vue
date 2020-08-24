<template>
  <div id="detail" @mousewheel.prevent>
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="tabControl"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
   
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll";



import { debouce } from "common/debouce";
import { backTopMixin } from "common/mixin";
import {mapActions} from "vuex"
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      // message:"哈哈哈哈哈",
      // show:false,
      iid: null,
      topImages: null,
      goods: null,
      shop: null,
      detailInfo: null,
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themTopYs: [],
      getThemeYopY: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    // Toast
  },
  created() {
    // 保存传入的iid
    (this.iid = this.$route.params.iid),
      // 根据iid请求详情数据
      getDetail(this.iid).then((res) => {
        // 1.顶部轮播图片
        const data = res.result;

        this.topImages = data.itemInfo.topImages;
        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3.创建店铺信息对象
        this.shop = new Shop(data.shopInfo);
        // 4.获取商品详细信息
        this.detailInfo = data.detailInfo;
        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6.取出评论信息
        if (data.rate.cReat != 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });

    this.getThemeYopY = debouce(() => {
      this.themTopYs = [];
      this.themTopYs.push(0);
      this.themTopYs.push(this.$refs.param.$el.offsetTop );
      this.themTopYs.push(this.$refs.comment.$el.offsetTop );
      this.themTopYs.push(this.$refs.recommend.$el.offsetTop );
      this.$refs.scroll.scroll.refresh();
      
    }, 100);
  },
  mounted() {
    // 监听item中图片加载完成
    this.$bus.$on("detailitemImgLoad", () => {
      if (this.$refs.scroll != undefined) {
        this.imgLoad();
        
      }
    });
  },
  methods: {
    // 映射vuex中的函数
    // ...mapActions(['addCart']),
    imgLoad() {
      this.getThemeYopY();
    },
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themTopYs[index], 300);
    },
    contentScroll(position) {
      // 获取y值
      const positionY = -position.y;
      // y值和主题中值进行对比
      if (positionY < this.themTopYs[1]) {
        this.$refs.tabControl.currentIndex = 0;
      } else if (positionY < this.themTopYs[2]) {
        this.$refs.tabControl.currentIndex = 1;
      } else if (positionY < this.themTopYs[3]) {
        this.$refs.tabControl.currentIndex = 2;
      } else {
        this.$refs.tabControl.currentIndex = 3;
      }
      // 判断是否显示回到顶部
      position.y < -1000
        ? (this.isShowBackTop = true)
        : (this.isShowBackTop = false);
    },
    addCart() {
      
      // 获取购物车需要的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.peice = this.goods.realPrice;
      product.iid = this.iid
      
      // 将商品添加到购物车里
       this.$store.dispatch('addCart',product).then(res=>{ 
        this.$toast.show(res)      
       })

     
      
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>