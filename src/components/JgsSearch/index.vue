<template>
  <div class="JgsSearch">
    <form action="/">
      <van-search placeholder="搜索" shape="round" @click="showPopup" />
      <div style="width: 100%; height: 100%; background-color: aliceblue;" clear-trigger="always">
      </div>
      <van-popup :overlay="false" class="jsearch_history" v-model:show="show" position="bottom"
        :style="{ height: '92.5%' }" closeable>
        <van-search placeholder="搜索" autofocus="autofocus" @search="onSearch" @cancel="onCancel" shape="round" focus />
        <div class="jgs_search_history">
          <div class="search_history">
            <span>搜索历史</span>
            <van-icon name="delete-o" />
          </div>
          <div class="history">
            <a class="a" href="#">1</a>
            <a class="a" href="#">123124</a>
          </div>
          <div class="albumResultList">
            <div class="ergodic_search_a">
              <img src="./img/1.png" alt="">
              <div>
                <p class="keyword">三体（全六季）| 精品广播剧，刘慈欣著</p>
                <p>
                  <span class="category">广播剧</span>
                  <van-icon class="service-o" name="service-o" />
                  <span class="play">2.17亿</span>
                  <van-icon class="service-o" name="bar-chart-o" />
                  <span class="tracks">101集</span>
                </p>
              </div>
            </div>
            <span class="play-circle-o"><van-icon class="circle" name="play-circle-o" /></span>
          </div>
          <p class="queryResultList">
            红色小汽车睡前故事
          </p>
          <p class="queryResultList">
            红色小汽车睡前故事
          </p>
          <p class="queryResultList">
            红色小汽车睡前故事
          </p>
        </div>
      </van-popup>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "JgsSearch",
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
});
</script>
<script lang="ts" setup>
</script>

<style lang="less"scoped>
.JgsSearch {
  background-color: white;
}
.jgs_search_history {
  padding: 0 15px;
  font-size: 14px;
  .search_history {
    display: flex;
    padding: 10px 0 5px;
    justify-content: space-between;
  }
  .history {
    .a {
      display: inline-block;
      padding: 5px 15px;
      margin: 5px 10px 10px 0;
      line-height: 30px;
      color: #333;
      border-radius: 6px;
      background: #f3f4f5;
    }
  }
  .albumResultList {
    padding: 15px 0;
    display: flex;
    border-bottom: 1px solid #eff1f4;
    justify-content: space-between;
    .ergodic_search_a {
      display: flex;
      img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      p {
        margin: 0;
        padding-bottom: 4px;
      }
      span {
        font-size: 12px;
        margin-right: 15px;
        color: #b3b3b3;
      }
      .service-o {
        color: #b3b3b3;
        margin-right: 4px;
      }
      .category {
        padding: 2px 4.5px 0 4.5px;
        font-size: 9px;
        border-radius: 3px;
        border: 1px solid #b3b3b3;
      }
    }
    .play-circle-o {
      display: flex;
      width: 24px;
      align-items: center;
      margin-right: 5px;
      .circle {
        font-size: 24px;
      }
    }
  }
  .queryResultList {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eff1f4;
    margin: 0;
  }
}
</style>