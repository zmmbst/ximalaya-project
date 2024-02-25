<template>
  <div class="zbc_category_sort">
    <JgsHead></JgsHead>
    <div class="navigation">
      <!-- 导航 -->
      <van-tabs v-model:active="active" color="#fc2a1c" class="navigation_box" @change="handleTabChange">
        <van-tab v-for="item in navList" :key="item.cid">
          <!-- 导航 -->
          <template #title>{{ item.title }} </template>
          <!-- 列表 -->
          <div
            class="classification_label"
            v-infinite-scroll="load"
            infinite-scroll-immediate="false"
          >
            <div class="card_list" v-for="item in listenList" :key="item.id"  @click="goDetail(item.url)">
              <img :src="item.coverPathSmall" alt="" />
              <div class="card_right">
                <div class="card_right_top">
                  {{ item.title }}
                </div>
                <div class="card_right_bottom">
                  <van-icon name="setting-o" />{{
                    item.pageView
                  }}&nbsp;&nbsp;&nbsp;&nbsp; 2121-2-23更新
                </div>
              </div>
            </div>
            <div v-if="loading" class="loading">
              <Loading
                color="#fa3c18"
                size="30"
                text-size="16"
                text-color="#fa3c18"
                >加载中</Loading
              >
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
        <button class="btn" v-for="(item,index) in navList" :key="item.cid"
        @click="onCategoryClick(item,index)"   v-show="isPoll" >
          {{ item.title }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import JgsHead from "../../components/JgsHead/index.vue";
import { defineComponent, ref, onMounted } from "vue";
import listenApi from "../../api/listening";
export default defineComponent({
  name: "listeningList",
});
</script>

<script lang="ts" setup>
// 点击标题
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

const { getNavData, getListenList } = listenApi;
// 导航下拉
const asd = () => {
  return (isPoll.value = true);
};
const bbb = () => {
isPoll.value = false
};

const loading = ref(true);

// 获取听单下的分类列表
const navList = ref<{ cid: string; title: string; }[]>([]);



async function NavData() {
  const result = await getNavData() as any;
  navList.value = result.categories;
  
}



// 分类列表
const listenList = ref<{ [paramsName: string]: any }[]>([]);
async function ListenList() {
  loading.value = true;
  const result = await getListenList(
    title.value,
    pageNum.value,
    pageSize.value
  ) as any;
  listenList.value = [...listenList.value, ...result.subjects];
  total.value = result.totalCount;
  loading.value = false;
}

// 当标签页变化时触发
const handleTabChange = (index: number) => {
  // 更新title为当前选中的分类标题
  title.value = navList.value[index].name ;
  // 重置页码和列表
  // pageNum.value = 1;
  listenList.value = [];
  isPoll.value = false
  // 重新获取列表数据
  ListenList();
 
};



// 处理分类按钮点击事件
const onCategoryClick = (category: { cid: string; title: string  },index) => {
  // 更新title为当前选中的分类标题
title.value = category.name ;
  // 重置页码和列表
  pageNum.value = 1;
  listenList.value = [];

  isPoll.value=false
  // 重新获取列表数据
  ListenList();
  active.value=index
  
};



// 点击跳转去详情页
const goDetail = (url) => {
  window.location.href = 'https://m.ximalaya.com/revision/subject/category' + url
};

// 下拉触底
const load = () => {
  pageNum.value += 1;
  ListenList();
};




onMounted(() => {
  NavData();
  ListenList();

});
</script>

<style lang="less" scoped>
.zbc_category_sort {


  .navigation {
    position: relative;

    // 标题
    .navigation_box{
      width: 325px;
      height: 45px;
      z-index: 1;
      top: 0;
      left: 0;
     
    }
    // 下拉列表
    .box1 {
      
      border-left: solid 1px #ebebeb;
      border-bottom: solid 1px #ebebeb;
      width: 45px;
      height: 39px;
      background: #fff;
      position: absolute;
      top: 8px;
      right: 2px;
      // 展开折叠
      .drop_down {
        width: 8px;
        margin-left: 10px;
        line-height: 25px;
      }
      z-index: 3;
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
      
        width: 100%;
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
          display: flex;
          flex-direction: column;
          .card_right_top {
            font-size: 18px;
            font-weight: 600;
          }
          .card_right_bottom {
            margin-top: 20px;

            font-size: 14px;
            color: #c1c1c7;
           line-height: 40px;
          }
        }
      }
      .loading {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
