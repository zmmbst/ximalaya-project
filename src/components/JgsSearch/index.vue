<template>
  <div>
    <form action="/">
      <van-search placeholder="搜索" shape="round" @click="showPopup" />
      <div style="width: 100%; height: 100%; background-color: aliceblue;" clear-trigger="always">
      </div>
      <van-popup class="jsearch_history" v-model:show="show" position="bottom" :style="{ height: '100%' }" closeable>
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
          <div style="padding: 15px 0;" class="ergodic_search">
            <div>
              <img style="width: 40px;height: 40px;" src="./img/1.png" alt="">
              <p></p>
              <p>
                <span></span>
                <span></span>
                <span></span>
              </p>
            </div>
            <span></span>
          </div>
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
    const show = ref(true);
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
}
</style>