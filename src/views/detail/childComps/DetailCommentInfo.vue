<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
    <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">更多</div>
    </div>
    <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <div class="detail-item">{{commentInfo.content}}</div>
        <span class="data">{{commentInfo.created | showDate}}</span>
        <span class="info-pther">{{commentInfo.style}}</span>          
    </div> 
    <div class="info-imgs">
        <img :src="item" v-for="item in commentInfo.images" >
    </div>
  </div>
</template>

<script>
import {timeConvert} from '@/common/untils'
export default {
    props:{
        commentInfo:{
            type:Object
        }
    },
   
    filters:{
        showDate(value){         
        return timeConvert(parseInt(value),0) 
        
        
        }
    }

}
</script>

<style scoped>
.comtent-info {
    border-bottom: 5px solid #f2f5f8;
    color: #333;
    padding: 5px 12px;  
}
.info-header{  
   height: 50px;
   line-height: 50px;
   border-bottom: 1px solid rgba(0, 0,0, .1);
    
}
.header-title{
    font-size: 15px;
    float: left;
    
    margin-left: 5px;
    
}
.header-more{
    float: right;
    
    margin-right: 10px;   
}
.info-user {
   padding: 10px 0 5px;
}
.info-user img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
}
.info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
}
.info-detail {
    padding: 0 5px 15px;
}
.info-detail .info-pther{
    font-size: 12px;
    color: #999
}
.data {
    font-size: 12px;
    color: #999;
    margin-right: 5px;
    
}
.detail-item{
    margin-bottom: 10px;
}
.info-imgs{
    margin-top: 10px;
}
.info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
}
</style>

