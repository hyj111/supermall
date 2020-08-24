<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <span slot="center">HYJ商城</span>
    </nav-bar>
    <user-info></user-info>
    <userinformation></userinformation>
    <div class="seize"></div>
    <info></info>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import UserInfo from "./childComps/UserInfo"
import Userinformation from "./childComps/Userinformation"
import Info from "./childComps/Info"
export default {
  name: "Profile",
  components: {
    
    NavBar,
    UserInfo,
    Userinformation,
    Info
  },
};
</script>

<style scoped>
.profile-nav {
  background-color: #ff8198;
  font-weight: 700;
    color: #fff;
}
.seize {
    height: 10px;
    background-color: #f2f2f2;
}
</style>
