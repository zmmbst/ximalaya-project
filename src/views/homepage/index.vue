<template>
  <div class="container">
    <div class="fixedTop">
      <div class="home_top">
        <div class="leftimg">
          <img src="./images//logo.png" alt="" />
        </div>
        <div class="rightbtn">打开APP</div>
      </div>
      <!-- 搜索框 -->
      <van-search
        class="search"
        shape="round"
        value="{{ value }}"
        placeholder="搜索"
      />
    </div>
    <div class="empty"></div>
    <!-- 轮播图 -->
    <el-carousel
      :interval="2000"
      type="card"
      height="139px"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in 6" :key="item">
          <img src="./images/swiper1.jpg" alt="">
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
      <div class="listSon" v-for="item in newbieStore.newbieList.albums" :key="item.albumId">
        <img :src="'https://imagev2.xmcdn.com/'+item.albumCoverPath"/>
        <van-icon class="go" name="play-circle-o" />
        <span>{{ item.albumPlayCount }}</span>
        <p>{{ item.albumTitle }}</p>
      </div>
    </div>
    <!-- 限时免费 -->
    <div class="free">
      <div class="freetime">限时免费</div>
      <van-count-down :time="time" />
    </div>
    <!-- 限时免费列表 -->
    <el-scrollbar ref="refScrollbar" @wheel.prevent="handleScroll">
      <div class="ct-scrollbar">
        <div class="freetimeList" v-for="item in freeStore.freeList.limitedFreeAlbum?.limitedTimeFreeAlbums" :key="item.id">
          <img :src="item.coverPath"/>
          <van-icon class="go" name="play-circle-o" />
          <span>{{ item.playCount }}</span>
          <p>
            {{ item.title }}
          </p>
        </div>
      </div>
    </el-scrollbar>
    <!-- 今日热点 -->
    <div class="todayHot">今日热点</div>
    <!-- 今日热点列表 -->
    <div class="hotList">
      <div class="hotSon" v-for="item in freeStore.freeList.hotTrack?.hotTracks" :key="item.trackId">
        <div class="imgs">
          <img :src="item.albumCoverPath" alt="" />
          <van-icon class="go" name="play-circle-o" />
        </div>
        <div class="hotInfo">
          <h4 class="infoTop">
            {{ item.title }}
          </h4>
          <div class="infoBottom">
            <div class="bottomAdd">
              <van-icon class="manager" name="manager-o" />
              <p>新京报</p>
            </div>
            <div class="bottomListen">
              <van-icon class="service" name="service-o" />
              <p>{{ item.playCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 博客推荐 -->
    <div class="recommend">播客推荐</div>
    <!-- 播客推荐列表 -->
    <div class="recommendList">
      <div class="recommendSon" v-for="item in newbieStore.newbieList.albums" :key="item.albumId">
        <div class="imgs">
          <img :src="'https://imagev2.xmcdn.com/'+item.albumCoverPath"/>
          <van-icon class="go" name="play-circle-o" />
        </div>
        <div class="recommendInfo">
          <h4 class="infoTop">
            {{ item.albumTitle}}
          </h4>
          <div class="infoBottom">
            <div class="bottomAdd">
              <van-icon class="manager" name="manager-o" />
              <p>余华</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结束底部 -->
    <div class="footer">
      <img src="./images/logo.png" alt="" />
      <p>© 2014-
        2024
        喜马拉雅 版权所有
      </p>
    </div>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
// import {cx_GetNewbieData,cx_GetFreetimeData} from '../../api/homepage'
export default defineComponent({
  name: "homepage",
});
</script>
<script setup lang="ts">
import {ref,onMounted} from "vue";
import {useNewbieStore,useFreeStore} from "../../stores/homepage";
const newbieStore = useNewbieStore();
const freeStore = useFreeStore();
const time = ref(30 * 60 * 60 * 1000);


// 挂载完成获取新人必听列表
onMounted(()=>{
  newbieStore.getnewbieList();
  freeStore.getfreetimeList();
})
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
  .fixedTop {
    width: 386px;
    background-color: white;
    position: fixed;
    z-index: 999;
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
  }
  .empty {
    height: 105px;
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
  }
  .ct-scrollbar {
    display: flex;
    .freetimeList {
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
  .hotList {
    .hotSon {
      padding: 10px;
      padding-top: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .imgs {
        position: relative;
        img {
          margin-right: 25px;
          width: 70px;
          height: 70px;
          border-radius: 5px;
        }
        .go {
          top: 0px;
          left: 0px;
          width: 70px;
          height: 70px;
          line-height: 70px;
          text-align: center;
          position: absolute;
        }
      }
      .hotInfo {
        height: 75px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .infoTop {
          margin: 0px;
          font-size: 14px;
          color: #40404c;
        }
        .infoBottom {
          display: flex;
          margin-bottom: 10px;
          .bottomAdd {
            display: flex;
            .manager {
              font-size: 15px;
              color: #999;
              margin-right: 5px;
            }
            p {
              font-size: 12px;
              color: #999;
              margin: 0px;
              margin-right: 20px;
            }
          }
          .bottomListen {
            display: flex;
            .service {
              font-size: 15px;
              color: #999;
              margin-right: 5px;
            }
            p {
              font-size: 12px;
              color: #999;
              margin: 0px;
            }
          }
        }
      }
    }
  }
  .recommend {
    font-size: 18px;
    color: #40404c;
    line-height: 25px;
    margin: 17px 0 17px 15px;
    font-weight: 700;
  }
  .recommendList {
    .recommendSon {
      padding: 10px;
      padding-top: 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .imgs {
        position: relative;
        img {
          margin-right: 25px;
          width: 70px;
          height: 70px;
          border-radius: 5px;
        }
        .go {
          color: #40404c;
          top: 0px;
          left: 0px;
          width: 70px;
          height: 70px;
          line-height: 70px;
          text-align: center;
          position: absolute;
        }
      }
      .recommendInfo {
        height: 75px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .infoTop {
          margin: 0px;
          font-size: 14px;
          color: #40404c;
        }
        .infoBottom {
          display: flex;
          margin-bottom: 10px;
          .bottomAdd {
            display: flex;
            .manager {
              font-size: 15px;
              color: #999;
              margin-right: 5px;
            }
            p {
              font-size: 12px;
              color: #999;
              margin: 0px;
              margin-right: 20px;
            }
          }
          .bottomListen {
            display: flex;
            .service {
              font-size: 15px;
              color: #999;
              margin-right: 5px;
            }
            p {
              font-size: 12px;
              color: #999;
              margin: 0px;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 385px;
    height: 180px;
    background-image: url("./images/bottomimg.jpg");
    background-repeat: no-repeat; /* 不重复背景图片 */
    background-size: cover; /* 背景图片覆盖整个元素 */
    background-position-y: -75px; /* 背景图片居中显示 */
    img {
      width: 120px;
      height: 30px;
      display: block; /* 将图片从内联元素转换为块级元素 */
      margin-left: auto; /* 设置左边距为自动 */
      margin-right: auto; /* 设置右边距为自动 */
      margin-top: 34px;
    }
    p{
      color: #808080;
      font-size: 12px;
      text-align: center;
    }
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>