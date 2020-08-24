<template>
<transition name = "fade">
  <div class="toast" v-if="isShow">
      <div>{{message}}</div>
  </div>
</transition>
</template>

<script>
export default {
    data(){
        return {
            message:"",
            isShow:false
        }
    },
    methods: {
        // 当duration没有传值时使用默认时间2000
        show(message,duration=2000) {           
            this.isShow = true
            this.message = message
            setTimeout(()=>{
            this.isShow = false
            this.message = ""
            },duration)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0,0, .7);
    color: #fff;
    z-index: 10;
    border-radius: 20px;
}
 .fade-enter-active {
     transition: opacity 0.5s;
}
.fade-leave-active{
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
   opacity: 0;
}
</style>