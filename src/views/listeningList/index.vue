<template>
  <div class="zbc_category_sort">
    <div class="navigation">
      <van-tabs v-model:active="active" color="#fc2a1c" class="navigation_box">
        <van-tab title="有声书" class="classification_label">
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
          <div class="card_list">
            <img src="./image/01.png" alt="" />
            <div class="card_right">
              <div class="card_right_top">
                畅销书上新推荐第13期，这些书值得听
              </div>
              <div class="card_right_bottom">
                <van-icon name="setting-o" /> 33&nbsp;&nbsp;&nbsp;&nbsp;
                2121-2-23更新
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="热门">内容 2</van-tab>
        <van-tab title="相声评书">内 容 3</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
        <van-tab title="情感生活">内容 4</van-tab>
      </van-tabs>
      <van-icon name="arrow-down" class="box1"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "listeningList",
});
</script>

<script lang="ts" setup>
const active = ref(0);
</script>

<style lang="less" scoped>
.zbc_category_sort {
  .navigation {
    position: relative;
    .box1{
     position: absolute;
     top: 8px;
     right: 10px;
    }
    .classification_label {
      .card_list {

        margin-top: 1px;

        margin-bottom: 20px;

        padding:0 20px;
        padding-top: 13px;
        border-top: solid 0.5px  #e7e6e6;;
        img {
          width: 85px;
        }
        display: flex;

        .card_right {
          width: 279px;
          height: 73px;
          padding-left: 20px;
          .card_right_top {
            font-size: 18px;
            font-weight: 600;
          }
          .card_right_bottom {
            margin-top: 18px;
            font-size: 14px;
            color: #c1c1c7;
          }
        }
      }
    }
  }
}
</style>
