<template>
  <div class="container">
    <div class="home_top">
      <div class="leftimg">
        <img src="./images//logo.png" alt="" />
      </div>
      <div class="rightbtn">打开APP</div>
    </div>
    <!-- 搜索框 -->
    <van-search shape="round" value="{{ value }}" placeholder="搜索" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "homepage",
});
</script>
  <script setup lang="ts"></script>
  
  <style lang="less" scoped>
.container {
  .home_top {
    width: 350px;
    height: 30px;
    padding: 15px 15px 5px;
    margin: 0px auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    .leftimg {
      width: 120px;
      height: 30px;
      img {
        width: 100%;
        height: 30px;
      }
    }
    .rightbtn {
      width: 76px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: white;
      font-size: 12px;
      border-radius: 50px;
      background-color: red;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>