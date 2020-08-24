<template>
  <div class="goods-list" @click="itemClick">
    <img :src="showImage" @load="imgLoad"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
    }
  },
  methods: {
    itemClick() {
      // 跳转到详情页面
      this.$router.push("/detail/"+this.goodsItem.iid);   
    },
    imgLoad(){
      if(this.$route.path.indexOf('/home')!=-1){
        this.$bus.$emit('homeItemImgLoad')
      }else if(this.$route.path.indexOf('/detail')!=-1){
        this.$bus.$emit('detailitemImgLoad')
      }else if(this.$route.path.indexOf('/category')!=-1){
        this.$bus.$emit('categoryImgLoad')
      }
     
    }
  },
};
</script>

<style scoped>
.goods-list {
  width: 50%;
  padding: 5px;
  display: inline-block;
}
.goods-list img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 14px;
  text-align: center;
  margin-top: 2px;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: #ff8198;
  margin-right: 20px;
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 1px;
  width: 14px;
  height: 14px;
  background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
}
</style>
