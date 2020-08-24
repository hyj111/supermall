<template>
  <div class="user-info">
    <div class="user-icon">
      <img src="~assets/img/profile/avatar.svg" alt />
    </div>
    <div class="right">
      <div>登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" class="icon-phone" />
        暂无绑定手机号
      </div>    
    </div>
     <div class="right-arrow"></div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
.user-info {
  position: relative;
  height: 95px;
  background-color: #ff8198;
  color: #fff;
}
.user-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.user-icon img {
  width: 100%;
  height: 100%;
}
.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 85px;
}
.phone {
  margin-top: 5px;
  font-size: 12px;
}
.icon-phone {
  vertical-align: middle;
  width: 15px;
  height: 22px;
}
.right-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    transform: rotate(45deg);
}
</style>