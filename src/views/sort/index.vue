<template>
  <JgsHead></JgsHead>
  <JgsSearch></JgsSearch>
  <div class="category-container">
    <div class="category-box">
      <div class="wrap-container" ref="wrapper">
        <ul ref="ul">
          <li
            v-for="(item, index) in sortStore.categoryList"
            :key="item.id"
            @click="changeFirstCategory(item, index, $event)"
            :class="index === leftIndex ? 'active item' : 'item'"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="content" ref="content">
        <div @click="getSortInfo" ref="rightScrollContainer">
          <div
            v-for="(item, index) in sortStore.categoryList"
            :key="item.id"
            class="content-item"
          >
            <div
              class="title"
              :data-categoryId="item.id"
              :data-metadataTitle="item.title"
              :data-metadataName="''"
            >
              <span
                :data-categoryId="item.id"
                :data-metadataTitle="item.title"
                :data-metadataName="''"
                :class="index === leftIndex ? 'checkitem' : ''"
              >
                {{ item.title }}
              </span>
              <van-icon
                :data-categoryId="item.id"
                :data-metadataTitle="item.title"
                :data-metadataName="''"
                name="arrow"
              ></van-icon>
            </div>
            <ul class="title-body">
              <li
                v-for="subItem in item.subCategories[0]?.metadataValues"
                :key="subItem.id"
                :data-categoryId="item.id"
                :data-metadataTitle="item.title"
                :data-metadataName="subItem.displayName"
              >
                {{ subItem.displayName }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, ref, onMounted, watch } from "vue";
import BScroll from "@better-scroll/core";
import { useSortStore } from "../../stores/sort";
import MouseWheel from "@better-scroll/mouse-wheel";
import JgsHead from "../../components/JgsHead/index.vue";
import JgsSearch from "../../components/JgsSearch/index.vue";
import router from "../../router/router";
BScroll.use(MouseWheel);
defineOptions({
  name: "Category",
});
const sortStore = useSortStore();
const wrapper = ref<HTMLElement | null>(null);
const ul = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);
let rightScroll: BScroll;
let leftScroll: BScroll;
const scrollY = ref<number>(0);
const leftIndex = ref<number>(0);
onMounted(async () => {
  leftScroll = new BScroll(wrapper.value as HTMLElement, {
    click: true,
    probeType: 1,
    bounce: false,
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300,
    },
  });
  rightScroll = new BScroll(content.value as HTMLElement, {
    click: true,
    probeType: 1,
    scrollY: true,
    bounce: false,
    momentum: false,
    mouseWheel: {
      speed: 20,
      invert: false,
      easeTime: 300,
    },
  });
  rightScroll.on("scroll", (position: { y: number }) => {
    scrollY.value = Math.abs(Math.round(position.y));
    leftIndex.value = currentIndex();
  });
  rightScroll.on("mousewheelMove", (position: { y: number }) => {
    scrollY.value = Math.abs(Math.round(position.y));
    leftIndex.value = currentIndex();
  });
  await sortStore.getCategoryList();
  calculateHeight();
  leftScroll.refresh();
  rightScroll.refresh();
});
watch(leftIndex, () => {
  leftScroll.scrollBy(
    0,
    -(ul.value as HTMLElement).children[leftIndex.value].getBoundingClientRect()
      .top,
    100,
    undefined
  );
  leftScroll.refresh();
});
const currentId = ref<number>(0);
const rightScrollContainer = ref<HTMLElement | null>(null);
const changeFirstCategory = function (
  item: { [paramname: string]: any },
  index: number,
  ev: any
) {
  if (ev._constructed) {
    currentId.value = item.id;
    leftIndex.value = index;
    rightScroll.scrollBy(
      0,
      -(rightScrollContainer.value as HTMLElement).children[
        index
      ].getBoundingClientRect().top,
      100,
      undefined
    );
    rightScroll.refresh();
  }
};
const rightLiHeightArray = ref<Array<number>>([]);
const calculateHeight = function () {
  let lis = (rightScrollContainer.value as HTMLElement).children;
  let height = 0;
  rightLiHeightArray.value.push(height);
  Array.from(lis).forEach((li) => {
    height += li.clientHeight;
    rightLiHeightArray.value.push(height);
  });
};
const currentIndex = function () {
  let index = rightLiHeightArray.value.findIndex((_, index) => {
    return (
      scrollY.value >= rightLiHeightArray.value[index] &&
      scrollY.value < rightLiHeightArray.value[index + 1]
    );
  });
  return index;
};
const getSortInfo = (e: any) => {
  const {
    categoryid: categoryId,
    metadatatitle: metadataTitle,
    metadataname: metadataName,
  } = e.target.dataset;
  router.push({
    path: "/sortinfo",
    query: { categoryId, metadataTitle, metadataName },
  });
};
</script>

<style scoped>
.category-container {
  width: 100%;
  height: 100vh;
}

.category-box {
  display: flex;
  height: 100vh;
}

.wrap-container {
  height: 100vh;
  width: 90px;
}

li.item {
  display: flex;
  align-items: center;
  width: 90px;
  height: 50px;
  justify-content: center;
  padding: 15px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d7d7d7;
  font-size: 14px;
  color: #72727b;
  position: relative;
}

li.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: #f86442;
}

li:last-child {
  border-bottom: 0;
}

.content {
  height: 100vh;
  background-color: #fff;
  flex: 1;
  padding-left: 10px;
}

.content-item .title {
  color: #40404c;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 20px;
  box-sizing: border-box;
  height: 50px;
  border-bottom: 0.5px solid #e8e8e8;
  sapn {
    flex: 1;
  }
}

.content-item .title-body {
  font-size: 14px;
  color: #7e8c8d;
  display: flex;
  flex-wrap: wrap;
  padding: 7.5px 0 7.5px 7.5px;
  box-sizing: border-box;
  border-bottom: 0.5px solid #e8e8e8;
}

.van-icon-arrow {
  color: #a3a3ac;
}

.content-item .title-body li {
  padding: 7.5px;
}
.checkitem {
  color: #f86442 !important;
}
</style>
