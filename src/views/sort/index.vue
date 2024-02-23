<template>
  <div class="switch-Box">
    <div class="switch-left" ref="left">
      <div
        v-for="(item, index) in sortStore.categoryList"
        :key="item.id"
        @touchstart="fnS(index)"
        :class="index === num.setnum ? 'ac' : ''"
      >
        <a href="#">
          {{ item.title }}
        </a>
      </div>
    </div>
    <div
      class="switch-right"
      ref="right"
      @scroll="fnScroll"
      @touchstart="overFn"
    >
      <div
        class="category2"
        v-for="(list, index) in sortStore.categoryList"
        :key="index"
      >
        <!-- <div> -->
        <div class="category2-title border">
          <a :class="index === num.setnum ? 'bc' : ''" href="#">
            {{ list.title }}
          </a>
          <van-icon name="arrow" />
        </div>
        <div class="categoty2-list">
          <a
            v-for="item in list.subCategories[0]?.metadataValues"
            :key="item.id"
            class="categoty2-item"
            href="#"
          >
            <span>{{ item.name }}</span>
          </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { useSortStore } from "../../stores/sort";

const sortStore = useSortStore();
let num = reactive({ setnum: 0, setflag: true });
let left = ref<HTMLDivElement | null>(null);
let getleft = () => left.value as HTMLDivElement;
let right = ref<HTMLDivElement | null>(null);
let getright = () => right.value as HTMLDivElement;
let rightnum: number = 0;

onMounted(async () => {
  await sortStore.getCategoryList();
  rightnum = (getright().children[0] as HTMLDivElement).offsetHeight;
});
const fnS = (index: number) => {
  num.setnum = index;
  num.setflag = false;
  getright().scrollTop = index * rightnum;
  getleft().scrollTop = index > 4 ? (index - 3) * 93 : 0;
};
const fnScroll = () => {
  if (num.setflag === false) return false;
  let Index = Math.trunc(getright().scrollTop / rightnum + 0.01);
  num.setnum = Index;
  getleft().scrollTop = Index > 4 ? (Index - 3) * 93 : 0;
};

const overFn = () => (num.setflag = true);
</script>

<style scoped lang="less">
a {
  color: #72727b;
}
.switch-Box {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  font-size: 14px;

  .switch-left::-webkit-scrollbar {
    display: none;
  }

  .switch-left {
    width: 25vw;
    overflow-y: scroll;
    scroll-behavior: smooth;
    > div {
      width: 100%;
      height: (100vh / 13);
      text-align: center;
      line-height: (100vh / 13);
      border-bottom: 0.5px solid #eee;
      box-sizing: border-box;
    }
  }

  .switch-right::-webkit-scrollbar {
    display: none;
  }

  .switch-right {
    width: 75vw;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin-left: 10px;
    > div {
      width: 100%;
      border-bottom: 0.5px solid #eee;
      font-size: 30px;
      text-align: center;
      color: white;
    }
    .category2 {
      font-size: 14px;
      .category2-title {
        display: flex;
        line-height: (100vh / 13);
        margin: 0 15px;
        align-items: center;
        justify-content: space-between;
        a {
          font-weight: 600;
          color: #333;
        }
      }
      .categoty2-list {
        display: flex;
        flex-wrap: wrap;
        line-height: (100vh / 13);
        .categoty2-item {
          span {
            padding: 7.5px;
          }
        }
      }
    }
  }
}

.ac {
  border-left: 5px solid #ff6702;
}
.bc {
  color: #ff6702 !important;
}
</style>

<!-- <template>
  <div className="switch-Box">
    <div className="switch-left" ref="left">
      <div
        v-for="(item, index) in arr"
        :key="index"
        @touchstart="fnS(index)"
        :class="index === num.setnum ? 'ac' : ''"
      >
        {{ item }}
      </div>
    </div>
    <div
      className="switch-right"
      ref="right"
      @scroll="fnScroll"
      @touchstart="overFn"
    >
      <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
const arr = ref<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
let num = reactive({ setnum: 0, setflag: true });
let left = ref<HTMLDivElement | null>(null);
let getleft = () => left.value as HTMLDivElement;
let right = ref<HTMLDivElement | null>(null);
let getright = () => right.value as HTMLDivElement;
let rightnum: number = 0;
onMounted(() => {
  console.log(getright().children[0]);

  rightnum = (getright().children[0] as HTMLDivElement).offsetHeight;
});
const fnS = (index: number) => {
  num.setnum = index;
  num.setflag = false;
  getright().scrollTop = index * rightnum;
  getleft().scrollTop = index > 4 ? (index - 3) * 93 : 0;
};
const fnScroll = () => {
  if (num.setflag === false) return false;
  let Index = Math.trunc(getright().scrollTop / rightnum + 0.01);
  num.setnum = Index;
  getleft().scrollTop = Index > 4 ? (Index - 3) * 93 : 0;
};

const overFn = () => (num.setflag = true);
</script>

<style lang="less">
.switch-Box {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;

  .switch-left::-webkit-scrollbar {
    display: none;
  }

  .switch-left {
    width: 25vw;
    background: linear-gradient(to bottom, skyblue, pink, rebeccapurple);
    overflow-y: scroll;
    scroll-behavior: smooth;

    > div {
      width: 100%;
      height: (100vh / 8);
      text-align: center;
      line-height: (100vh / 8);
      border-bottom: 0.5px solid white;
    }
  }

  .switch-right::-webkit-scrollbar {
    display: none;
  }

  .switch-right {
    width: 75vw;
    background: linear-gradient(to bottom, skyblue, pink, rebeccapurple);
    overflow-y: scroll;
    scroll-behavior: smooth;

    > div {
      width: 100%;
      height: 110vh;
      border-bottom: 0.5px solid white;
      font-size: 30px;
      text-align: center;
      line-height: 110vh;
      color: white;
    }
  }
}

.ac {
  background: linear-gradient(to bottom, pink, skyblue, powderblue);
}
</style> -->
