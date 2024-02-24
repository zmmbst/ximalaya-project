<template>
  <div class="zbc_category_sort">
    <div class="navigation">
      <van-tabs v-model:active="active" color="#fc2a1c" class="navigation_box">
        <van-tab v-for="item in navList" :key="item.index">
          <template #title>{{ item.title }} </template>
          <div class="classification_label">
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
          </div>
        </van-tab>
      </van-tabs>

      <!-- 下拉 -->
      <div class="box1">
        <van-icon
          name="arrow-down"
          class="drop_down"
          @click="asd"
          v-show="!isPoll"
        />
        <van-icon
          name="arrow-up"
          class="drop_down"
          @click="bbb"
          v-show="isPoll"
        />
      </div>
      <div class="box2" v-show="isPoll">
        <div class="box2_word">请选分类</div>
        <button class="btn" v-for="item in navList" :key="item.cid">
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import listenApi from "../../api/listening";
export default defineComponent({
  name: "listeningList",
});
</script>

<script lang="ts" setup>
const active = ref(0);
const isPoll = ref<boolean>(false);

// 分类的标题
const title = ref("youshengshu");
// 听单列表的当前页码
const pageNum = ref(1);
// 听单列表下的每页条数
const pageSize = ref(7);
// 存储数据总条数
const total = ref();
// 下拉
const asd = () => {
  return (isPoll.value = true);
};
const bbb = () => {
  return (isPoll.value = false);
};

const navList = ref<{ [paramsName: string]: any }[]>([]);

// 获取听单下的分类列表
async function getNavData() {
  const result = await listenApi.getNavData();

  navList.value = result.categories;
}

const listenList = ref<{ [paramsName: string]: any }[]>([]);

// 分类列表
async function ListenList() {
  const result = await listenApi.getListenList(
    title.value,
    pageNum.value,
    pageSize.value
  );
  listenList.value = result.data.subjects;
  total.value = result.totalCount;
}
console.log(total.value);

onMounted(() => {
  getNavData();
  ListenList();
});
</script>

<style lang="less" scoped>
.zbc_category_sort {
  .navigation {
    position: relative;
    .box1 {
      border: solid 1px #e7e6e6;
      width: 42px;
      height: 43px;
      background: #fff;
      position: absolute;
      top: 0;
      right: -1px;
      .drop_down {
        margin-left: 9px;
        line-height: 42px;
      }
      z-index: 2;
    }

    .box2 {
      width: 100%;
      z-index: 1;
      .box2_word {
        margin: 10px;
        font-size: 18px;
        color: #c1c1c7;
      }
      width: 100%;
      position: absolute;
      top: 0;
      background-color: #fff;
      border: solid 1px #ccc;
      .btn {
        font-size: 16px;
        color: black;
        width: 103px;
        height: 32px;
        background: #efeff1;
        text-align: center;
        // margin-right: 10px;
        // margin-bottom: 9px;
        margin: 8px;
        line-height: 32px;
        border-radius: 5px;
        border: solid 1px #fff;
      }
    }
    .classification_label {
      .card_list {
        margin-top: 1px;

        margin-bottom: 20px;

        padding: 0 20px;
        padding-top: 13px;
        border-top: solid 0.5px #e7e6e6;
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
