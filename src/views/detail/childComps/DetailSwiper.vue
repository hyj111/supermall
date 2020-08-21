<template>
   <Swiper>
      <div class="swiper-slide" v-for="item in topImages" >
         <img :src="item" alt="">        
         
      </div>
    </Swiper>
</template>

<script>
import Swiper from 'components/common/swiper/swiper.vue'
export default {
    props:{
        topImages: {
            type:Array,
            default(){
                return []
            }
        }
    },
     components:{
            Swiper,
        },
}
</script>

<style scoped>
.swiper-slide  {
    height: 300px;
    /* overflow: hidden; */
}
.swiper-slide img {
   width: 100%;
}
</style>