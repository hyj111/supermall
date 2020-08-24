<template>
    <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem.vue'
    export default {
        components:{
           GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>

</style>
