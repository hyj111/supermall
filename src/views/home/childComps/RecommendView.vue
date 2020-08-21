<template>
    <div class="recommend">
        <div v-for="item in recommends" class="view">
            <a :href="item.link">
                <img :src="item.image" />
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px #eee solid;
}
.view{
   flex: 1;

}
.view img{
    width:70px;
    height:70px;


}
</style>
