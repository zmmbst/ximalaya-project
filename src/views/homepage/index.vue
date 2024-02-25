<template>
  <div class="container">
    <!-- <div class="home_top">
      <div class="leftimg">
        <img src="./images//logo.png" alt="" />
      </div>
      <div class="rightbtn">打开APP</div>
    </div> -->
    <JgsHead />
    <!-- 搜索框 -->
    <!-- <van-search shape="round" value="{{ value }}" placeholder="搜索" /> -->
    <JgsSearch />
    <!-- 轮播图 -->
    <el-carousel :interval="2000" type="card" height="139px" indicator-position="none">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- 三个图标 -->
    <div class="home_center">
      <!-- 第一个图标 -->
      <div class="center_left">
        <img src="./images/tubiao1.png" alt="" />
        <p>排行榜</p>
      </div>
      <!-- 第二个图标 -->
      <div class="center_middle">
        <img src="./images/tubiao2.png" alt="" />
        <p>分类</p>
      </div>
      <!-- 第三个图标 -->
      <div class="center_right">
        <img src="./images/tubiao3.png" alt="" />
        <p>电台</p>
      </div>
    </div>
    <!-- App大图 -->
    <img class="Appimg" src="./images/APP.png" />
    <!-- 新人必听 -->
    <div class="newbie">新人必听</div>
    <!-- 新人必听列表 -->
    <div class="newbieList">
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
      <div class="listSon">
        <img src="./images/dog.jpg" />
        <van-icon class="go" name="play-circle-o" />
        <span>1.18亿</span>
        <p>农门婆婆的诰命之路(古言穿书种田)</p>
      </div>
    </div>
    <!-- 限时免费 -->
    <div class="free">
      <div class="freetime">限时免费</div>
      <span class="timing">59</span>: <span class="timing">59</span>:
      <span class="timing">59</span>
    </div>
    <!-- 限时免费列表 -->
    <el-scrollbar ref="refScrollbar" @wheel.prevent="handleScroll">
      <div class="ct-scrollbar">
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
        <div class="freeList">
          <img src="./images/pinkdog.jpg" alt="" />
          <van-icon class="go" name="play-circle-o" />
          <span>1.18亿</span>
          <p>
            一人一驴一狗去修仙 | 爆笑无厘头 | 玄幻修仙 | 有声的紫襟多人有声剧
          </p>
        </div>
      </div>
    </el-scrollbar>
    <!-- 今日热点 -->
    <div class="todayHot">今日热点</div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import JgsSearch from "../../components/JgsSearch/index.vue";
import JgsHead from "../../components/JgsHead/index.vue";
export default defineComponent({
  name: "homepage",
});
</script>
<script setup lang="ts">
const refScrollbar = ref(null);
const handleScroll = (e: any) => {
  const wheelDelta = e.wheelDelta || -e.deltaY * 40;
  const scrollbar: any = refScrollbar.value;
  // scrollbar.wrap$获取到包裹容器的element对象
  scrollbar.setScrollLeft(scrollbar.wrapRef.scrollLeft + wheelDelta);
};
</script>

  
  <style lang="less" scoped>
.container {
  width: 385px;
  height: 100%;
  .home_top {
    // overflow: scroll;
    width: 350px;
    height: 30px;
    padding: 15px 15px 5px;
    margin: 0px auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    .leftimg {
      width: 120px;
      height: 30px;
      img {
        width: 100%;
        height: 30px;
      }
    }
    .rightbtn {
      width: 76px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: white;
      font-size: 12px;
      border-radius: 50px;
      background-color: red;
    }
  }
  .home_center {
    margin: 25px 0px 0px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    .center_left {
      img {
        width: 34px;
        height: 34px;
      }
      p {
        margin: 0px;
        font-size: 12px;
        color: #666;
        text-align: center;
        height: 17px;
        line-height: 17px;
      }
    }
    .center_middle {
      img {
        width: 34px;
        height: 34px;
      }
      p {
        margin: 0px;
        font-size: 12px;
        color: #666;
        text-align: center;
        height: 17px;
        line-height: 17px;
      }
    }
    .center_right {
      img {
        width: 34px;
        height: 34px;
      }
      p {
        margin: 0px;
        font-size: 12px;
        color: #666;
        text-align: center;
        height: 17px;
        line-height: 17px;
      }
    }
  }
  .Appimg {
    margin: 18px 0 8px 0;
    overflow: hidden;
    width: 385px;
    height: 80px;
  }
  .newbie {
    font-size: 18px;
    color: #40404c;
    line-height: 25px;
    margin: 17px 0 17px 15px;
    font-weight: 700;
  }
  .newbieList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .listSon {
      position: relative;
      width: 115px;
      height: 115px;
      border-radius: 5px;
      margin-bottom: 50px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      .go {
        position: absolute;
        left: 5px;
        bottom: 5px;
      }
      p {
        margin: 0px;
        color: #333;
        font-size: 13px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      span {
        position: absolute;
        left: 27px;
        bottom: 8px;
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }
    }
  }
  .free {
    display: flex;
    text-align: center;
    align-items: center;
    .freetime {
      font-size: 18px;
      color: #40404c;
      line-height: 25px;
      margin: 17px 0 17px 15px;
      font-weight: 700;
      margin-right: 15px;
    }
    .timing {
      width: 20px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      color: white;
      font-size: 16px;
      background-color: red;
    }
  }
  .ct-scrollbar {
    display: flex;
    .freeList {
      position: relative;
      margin-right: 10px;
      img {
        display: block;
        width: 115px;
        height: 115px;
        border-radius: 5px;
      }
      .go {
        position: absolute;
        left: 5px;
        bottom: 40px;
      }
      p {
        width: 115px;
        text-align: center;
        margin: 0px;
        color: #333;
        font-size: 13px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      span {
        position: absolute;
        left: 30px;
        bottom: 43px;
        font-size: 14px;
        font-weight: 700;
        color: #333;
      }
    }
  }
  .todayHot {
    font-size: 18px;
    color: #40404c;
    line-height: 25px;
    margin: 17px 0 17px 15px;
    font-weight: 700;
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>