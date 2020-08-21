<template>
  <div id="app">
      <keep-alive exclude="Detail">
      <router-view></router-view>
      </keep-alive>
      
    <MainTabbar></MainTabbar>
    
  </div>
</template>
<script>
import MainTabbar from 'components/content/mainTabbar/mainTabbar'
export default {
  name:"app",
  components:{
     MainTabbar
  }
}
</script>

<style>
@import url("assets/css/base.css");

</style>
