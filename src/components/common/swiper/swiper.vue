<template>
    <swiper class="swiper" :options="swiperOptions">
          <slot></slot>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from 'vue-awesome-swiper'

    import 'swiper/css/swiper.css'
    export default {
        name: 'swiper-example-pagination',
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay: {
                        delay: 3000,

                        disableOnInteraction: false,
                    },
                    spaceBetween: 30,
                    loop: true,
                },
            }
        }

    }
</script>

<style scoped>
    .swiper {
        width: 100%;
        /* --swiper-theme-color: #ff6600; */
        --swiper-pagination-color: #cf280b;
        /* 两种都可以 */
    }

</style>
