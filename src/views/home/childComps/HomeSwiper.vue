<template>
    <Swiper>
      <div class="swiper-slide" v-for="item in banners">
          <a :href="item.banners">
              <img :src="item.image" @load="imageLoad" />
          </a>
      </div>
    </Swiper>
</template>

<script>
    import Swiper from 'components/common/swiper/swiper.vue'
    export default {
        data() {
            return {
                isLoad:false
            }
        },
        components:{
            Swiper,
        },
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            imageLoad(){
               if(this.isLoad==false){
                   this.$emit('swiperImageLoad')
                   this.isLoad = !this.isLoad
               }
            }
        },
    }
</script>

<style scoped>
.swiper-slide img {
    width: 100%;
    height: 100%;
}
</style>