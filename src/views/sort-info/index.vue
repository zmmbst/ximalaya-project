<template>
  <div class="sort-info-content">
    <JgsHead></JgsHead>
    <div class="sort-info-tabout">
      <div class="sort-info-tab">
        <div class="tab-list" v-if="!isShowCollapse">
          <a
            @click="changeMetadata2Name"
            :data-name="''"
            :class="{
              'tab-item': true,
              'tab-action': metadata2Name === '',
            }"
            href="#"
          >
            全部
            <span class="red-line"></span>
          </a>
          <a
            v-for="tab in categories"
            @click="changeMetadata2Name"
            :data-name="tab.displayName"
            :class="{
              'tab-item': true,
              'tab-action': metadata2Name === tab.displayName,
            }"
            href="#"
            :key="tab.id"
          >
            {{ tab.displayName }}
            <span class="red-line"></span>
          </a>
        </div>
        <div v-else class="collapse-text">请选择分类</div>
        <div class="tab-icon">
          <van-icon
            v-if="!isShowCollapse"
            name="arrow-down"
            size="14"
            @click="isShowCollapse = !isShowCollapse"
          />
          <van-icon
            v-else
            name="arrow-up"
            size="14"
            color="#f06742"
            @click="isShowCollapse = !isShowCollapse"
          />
        </div>
      </div>
      <div
        @click="changeMetadata2Name"
        v-if="isShowCollapse"
        class="categories"
      >
        <a :data-name="''" class="categories-item" href="#">全部</a>
        <a
          v-for="tab in categories"
          class="categories-item"
          href="#"
          :key="tab.id"
          :data-name="tab.displayName"
        >
          {{ tab.displayName }}
        </a>
      </div>
    </div>
    <div class="sort-container">
      <div class="menu-row">
        <a
          @click="changeSort(1)"
          href="#"
          :class="{
            'row-item': true,
            active: sort === 1,
          }"
        >
          综合排序
        </a>
        <a
          @click="changeSort(2)"
          href="#"
          :class="{
            'row-item': true,
            active: sort === 2,
          }"
        >
          最多播放
        </a>
        <a
          @click="changeSort(3)"
          href="#"
          :class="{
            'row-item': true,
            active: sort === 3,
          }"
        >
          最近更新
        </a>
      </div>
      <div class="album-list">
        <div
          class="album-item"
          v-for="item in sortStore.categoryAlbums"
          :key="item.albumId"
        >
          <div class="album-img">
            <img :src="'https://imagev2.xmcdn.com/' + item.albumCoverPath" />
          </div>
          <div class="aldum-data">
            <div class="aldum-title">{{ item.albumTitle }}</div>
            <div class="aldum-text">
              {{ item.intro }}
            </div>
            <div class="aldum-record">
              <span>
                <van-icon name="fire-o" />
                <span>392</span>
              </span>
              <span>
                <van-icon name="service-o" />
                <span>14.03亿</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useSortStore } from "../../stores/sort";
import { ElLoading } from "element-plus";
import JgsHead from "../../components/JgsHead/index.vue";

const { query } = useRoute();
const metadataTitle = ref<string>("");
const metadataName = ref<string>("");
const metadata2Name = ref<string>("");
const sortStore = useSortStore();
const categories = ref<{ [paramname: string]: any }[]>([]);
const sort = ref<number>(1);
const pageNum = ref<number>(1);
const isground = ref<boolean>(true);

const isShowCollapse = ref(false);

const changeMetadata2Name = async (e: any) => {
  if (metadata2Name.value === e.target.dataset.name) {
    isShowCollapse.value = false;
    return;
  }
  const loadingInstance = ElLoading.service();
  metadata2Name.value = e.target.dataset.name;
  pageNum.value = 1;
  isShowCollapse.value = false;
  isground.value = false;
  await sortStore.getCategoryAlbums({
    categoryId: query.categoryId,
    metadataValues: metadataName.value + "," + e.target.dataset.name,
  });
  loadingInstance.close();
  isground.value = true;
};

const changeSort = async (index: number) => {
  if (sort.value === index) return;
  const loadingInstance = ElLoading.service();
  isground.value = false;
  pageNum.value = 1;
  sort.value = index;
  await sortStore.getCategoryAlbums({
    categoryId: query.categoryId,
    metadataValues: metadataTitle.value + "," + metadataName.value,
    sort: index,
  });
  loadingInstance.close();
  isground.value = true;
};

const scroll = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const scrollTop = document.documentElement.scrollTop;
  const clientHeight = document.documentElement.clientHeight;
  if (clientHeight + scrollTop >= scrollHeight) {
    if (!isground.value) return;
    pageNum.value += 1;
    sortStore.getCategoryAlbums(
      {
        categoryId: query.categoryId,
        metadataValues: metadataTitle.value + "," + metadataName.value,
        sort: sort.value,
        pageNum: pageNum.value,
      },
      1
    );
  }
};

onUnmounted(() => window.removeEventListener("scroll", scroll));

onMounted(async () => {
  const loadingInstance = ElLoading.service();
  window.addEventListener("scroll", scroll);
  metadataName.value = query.metadataName as string;
  metadataTitle.value = query.metadataTitle as string;
  await sortStore.getCategoryInfo(query.categoryId as string);
  sortStore.getCategoryAlbums({
    categoryId: query.categoryId,
    metadataValues: metadataTitle.value + "," + metadataName.value,
  });
  if (query.metadataName) {
    const result = sortStore.categoryInfo[0]?.metadataValues.find(
      (item: { displayName: any }) => {
        return item.displayName === query.metadataName;
      }
    );
    categories.value = result?.metadataValues[0].metadataValues;
  } else {
    categories.value = sortStore.categoryInfo[0]?.metadataValues;
  }
  loadingInstance.close();
});
</script>

<style scoped lang="less">
.sort-info-content {
  .sort-info-tabout {
    z-index: 2;
    width: 100%;
    position: fixed;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    max-width: 800px;
    min-width: 320px;
    background: #fff;
    .sort-info-tab {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      .tab-list::-webkit-scrollbar {
        display: none;
      }
      .tab-list {
        margin-right: 40px;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        .tab-item {
          display: inline-block;
          font-size: 14px;
          color: #999;
          height: 45px;
          line-height: 45px;
          text-align: center;
          padding: 0 15px;
        }
      }
      .collapse-text {
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
        font-size: 14px;
        color: #999;
      }
      .tab-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-left: 1px solid #eee;
      }
    }
    .categories::-webkit-scrollbar {
      display: none;
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 16px;
      max-height: 400px;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      .categories-item {
        background-color: #f3f4f5;
        color: #40404c;
        width: 100px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        margin: 7.5px;
      }
      &::after {
        content: "";
        width: 115px;
      }
    }
  }
  .sort-container {
    margin-left: 15px;
    .menu-row {
      padding-top: 50px;
      height: 40px;
      // line-height: 40px;
      .row-item {
        display: inline-block;
        color: #999;
        font-size: 13px;
        margin: 8px 0;
        padding: 6px 12px;
        &.active {
          border: 1px solid #f06742;
          border-radius: 20px;
          color: #f06742;
        }
      }
    }
    .album-list {
      .album-item {
        display: flex;
        margin: 15px;
        margin-left: 0;
        .album-img {
          width: 85px;
          height: 70px;
          img {
            width: 70px;
            height: 70px;
          }
        }
        .aldum-data {
          width: 260px;
          .aldum-title {
            font-size: 16px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .aldum-text {
            color: #a3a3ac;
            font-size: 14px;
            margin-top: 5px;
            margin-bottom: 7px;
          }
          .aldum-record {
            color: #a3a3ac;
            // display: flex;
            font-size: 12px;
            width: 210px;
            // justify-content: space-between;
            // align-items: center;
            > span {
              min-width: 55px;
              margin-right: 10px;
              span {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
.tab-action {
  position: relative;
  font-size: 18px !important;
  color: #40404c !important;
  .red-line {
    display: inline-block;
    width: 50%;
    height: 3px;
    background: #f06742;
    position: absolute;
    bottom: 0;
    left: 25%;
  }
}
</style>
