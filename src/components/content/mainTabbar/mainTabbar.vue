<template>

    <div>
        <Tabbar>
      <TabbarItem path="/home">
        <img src="~assets/img/tabbar/home.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/home_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </TabbarItem>
      <TabbarItem path="/category">
        <img src="~assets/img/tabbar/category.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </TabbarItem>
      <TabbarItem path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </TabbarItem>
      <TabbarItem path="/profile" >
        <img src="~assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </TabbarItem>
    </Tabbar>
    </div>


</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
    name:"mainTabbar",
 components: {
    Tabbar,
    TabbarItem
  },
}
</script>

<style>

</style>
