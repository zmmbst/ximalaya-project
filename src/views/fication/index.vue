<template>
  <view class="home">
    <view class="nav">
      <view class="nav_left">
        <img class="nav_left_img"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png" alt="">
      </view>
      <view class="nav_right">
        打开App
      </view>
    </view>
    <view>
      <van-search  placeholder="请输入搜索关键词"  />

    </view>


  </view>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';


export default defineComponent({


})
</script>
  
<script setup lang="ts">

</script>
  
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.home {
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 6px;


    .nav_left {
      .nav_left_img {
        width: 130px;
        height: 30px;
        border: none;
        font-size: 10px
      }
    }

    .nav_right {
      color: #fff;
      background-color: #fa2800;
      border-radius: 15px;
      border: none;
      width: 76px;
      font-size: 14px;
      text-align: center;
      padding-top: 6px;
      box-sizing: border-box;


    }
  }
}
</style>