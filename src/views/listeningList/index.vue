<template>
  <div class="zbc_category_sort">
    
    <van-tabs
      v-model:active="active"
      color="#fc2a1c"
      title-inactive-color="#a6a6af"
      swipeable="true"
    >
      <van-tab title="有声书" class="classification_label">内容 1</van-tab>
      <van-tab title="热门" color="#fff">内容 2</van-tab>
      <van-tab title="相声评书">内容 3</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>
      <van-tab title="情感生活">内容 4</van-tab>

      <van-cell title="展示弹出层" is-link @click="showPopup" />
<van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup>
    </van-tabs>


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
const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
</script>

<style lang="less" scoped>
.zbc_category_sort {
}
</style>
