<template>
  <view class="home">
    <view class="nav_l">
      <view class="nav_left_l">
        <img class="nav_left_img"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png" alt="">
      </view>
      <view class="nav_right_l">
        打开App
      </view>
    </view>
    <view>
      <van-search class="search_l" value="{{ value }}" shape="round" placeholder="请输入搜索关键词" />
    </view>
    <!-- 上方标题 -->
    <view>

      <van-tabs active="{{ active }}" bind:change="onChange">
        <van-tab class="brod_l" title="标签 1">
          <view>
            <van-sidebar active-key="{{ activeKey }}">
              <van-sidebar-item title="标签名" />
            </van-sidebar>


          </view>
          <view>
            <img class="content-box-img"
              src="//imagev2.xmcdn.com/storages/5a86-audiofreehighqps/D8/E5/GKwRIJEFfkl9AAOIigD9zcBJ.png!op_type=3&columns=144&rows=144&magick=webp"
              alt="">
            <view class="content-box-item">
               <view class="content-box-text">
                郭德纲
               </view>
               <view class="content-box-text1">
                郭德纲
               </view>
               <view>
                
               </view>
            </view>
          </view>
        </van-tab>

      </van-tabs>


    </view>


  </view>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
// import { ref } from 'vue';


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

  .search_l {
    margin: 5px;
    // width: 80%;
    // height:30px
  }

  .brod_l {
    display: flex;
  }
}
</style>