<template>
  <div class="home">

    <!-- 导航条 -->
    <div class="nav_l">
      <div class="nav_left_l">
        <img class="nav_left_img"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png" alt="">
      </div>
      <div class="nav_right_l">
        打开App
      </div>
    </div>
    <!-- 搜素框 -->
    <div>
      <van-search class="search_l" value="{{ value }}" shape="round" placeholder="请输入搜索关键词" />
    </div>
    <!-- 上方标题 -->u 
    <div class="nav-bar">
      <van-tabs>
        <van-tab v-for="index in 6" title="标题" :key="index" class="title-active-color" />
      </van-tabs>
    </div>
    <!-- 左右区域 -->
    <div class="nav-content">
      <div class="nav-left">
        <van-sidebar v-model="activeKey" class="nav-tabs">
          <van-sidebar-item class="nav-tabs-item" title="标签名称" />
          <van-sidebar-item class="nav-tabs-item" title="标签名称" />
          <van-sidebar-item class="nav-tabs-item" title="标签名称" />
          <van-sidebar-item class="nav-tabs-item" title="标签名称" />

        </van-sidebar>
      </div>
      <div class="nav-right">



        <div class="content-box">
          <img class="content-box-img"
            src="//imagev2.xmcdn.com/storages/5a86-audiofreehighqps/D8/E5/GKwRIJEFfkl9AAOIigD9zcBJ.png!op_type=3&columns=144&rows=144&magick=webp"
            alt="">
          <div class="content-box-item">
            <div class="content-box-text">郭德纲21年相声精选</div>
            <div class="content-box-icon">
              <!-- <van-icon  name="cross" size="14" /> -->
              <van-icon name="play" size="16" color="#aaa" />

              <div class="content-bottom">18</div>
              <van-icon name="coupon-o" color="#aaa" />
              <div class="content-bottom">144</div>
            </div>
          </div>

        </div>


        <ItemList></ItemList>


      </div>
    </div>





  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeKey = ref<string>('')
</script>

<style lang="less"  scoped>
.home {

  width: 100%;

  .nav_l {
    display: flex;
    justify-content: space-between;
    padding: 6px;



    .nav_left_l {
      .nav_left_img {
        width: 130px;
        height: 30px;
        border: none;
        font-size: 10px
      }
    }

    .nav_right_l {
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

  // 上方标题
  .nav-bar {

    // padding-bottom: 10px;

    ::v-deep .van-tabs__line {
      background-color: #f87051;
      width: 15px;
      font-size: 15px;

    }

    ::v-deep .van-tab__text {
      font-size: 16px;
      // padding-bottom: 20px
    }

    // ::v-deep .van-tab {
    //     height: 60px;
    // }




    margin-bottom: 10px;
  }

  // 左右区域
  .nav-content {
    display: flex;



    .nav-content-left {
      // padding: 20px;
      width: 20%;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      background: #f3f4f5;

      .left-active {
        border-left: 5px solid #f86442;
        color: #85858d;
        background-color: #fff;
      }

      .content-text {
        color: #aaa;
        border-bottom: 1px solid #eee;

      }
    }





    .nav-right {
      width: 80%;
      padding-top: 5px;

      .content-box {
        display: flex;
        margin-left: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;

        .content-box-img {
          width: 60px;
          height: 60px;
        }

        .content-box-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .content-box-text {
            padding-right: 8px;
            font-size: 14px;
            margin-left: 20px;
            margin-bottom: 2px;
            overflow: hidden;
            /*文本超出隐藏*/
            display: -webkit-box;
            /*盒子模型微弹性伸缩模型*/
            -webkit-box-orient: vertical;
            /*伸缩盒子的子元素垂直排列*/
            -webkit-line-clamp: 2;
            /*文本显示3行*/


          }

          .content-box-text1 {
            font-size: 12px;
            margin-left: 20px;
            color: #aaa;
            margin-bottom: 10px;

          }

          .content-box-icon {
            display: flex;
            padding-left: 15px;

            .content-bottom {
              margin-left: 5px;
              font-size: 10px;
              color: #aaa;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
}
</style>