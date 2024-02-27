<template>
  <div class="home">

    <!-- 导航条 -->
    <div class="nav_l">
      <div class="nav_left_l">
        <img class="nav_left_img"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png" alt="">
      </div>
      <div class="nav_right_l">
        打开App
      </div>
    </div>
    <!-- 搜素框 -->
    <div>
      <van-search class="search_l" value="{{ value }}" shape="round" placeholder="请输入搜索关键词" />
    </div>
    <!-- 上方标题 -->
    <div class="nav-bar">
      <van-tabs @change="handleNavigationActive">
        <van-tab :name="item" v-for="item in navigation" :title="item.name" :key="item.id" class="title-active-color" />
      </van-tabs>
    </div>
    <!-- 左右区域 -->
    <div class="nav-content">
      <div class="nav-left">
        <van-sidebar v-model="activeKey" class="nav-tabs">
          <van-sidebar-item @click="handleSidenavigation(item.rankingId)" v-for="item in Sidenavigation "
            class="nav-tabs-item" :title="item.name" />
        </van-sidebar>
      </div>
      <div class="nav-right">




        <div class="content-box" v-for="(item, index) in navOtemList" :key="index">



          <img class="content-box-img" :src="`//imagev2.xmcdn.com/${item.cover}`" alt="">
          <div class="content-box-item">
            <div class="content-box-text">{{ item.albumTitle }}</div>
            <div class="content-box-text1">{{ item.salePoint }}</div>
            <div class="content-box-icon">
              <van-icon name="play-circle-o" size="16" />
              <div class="content-bottom">{{ (item.playCount / 100000000).toFixed(2) }}亿</div>
              <van-icon name="first-aid" size="14" />
              <div class="content-bottom">{{ item.trackCount }}</div>
            </div>
          </div>

        </div>





      </div>
    </div>





  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { lxy_first, lxy_secondary } from '../../api/fication'

const activeKey = ref<string>('')

const navigation = ref<any>([])
const Sidenavigation = ref<any>([])
const navOtemList = ref<any>([])
lxy_first().then((res) => {


  navigation.value = res.data.data.tabLists

})
//顶导航处理函数
const handleNavigationActive = (active: any) => {
  Sidenavigation.value = active.tabWraps


}
//测导航处理函数
const handleSidenavigation = (id: string) => {
  lxy_secondary(id).then((res) => {
    navOtemList.value = res.data.data.rankList[0].albums


  })


}


</script>

<style lang="less"  scoped>
.home {

  width: 100%;

  .nav_l {
    display: flex;
    justify-content: space-between;
    padding: 6px;



    .nav_left_l {
      .nav_left_img {
        width: 130px;
        height: 30px;
        border: none;
        font-size: 10px
      }
    }

    .nav_right_l {
      color: #fff;
      background-color: #fa2800;
      border-radius: 74px;
      border: none;
      width: 76px;
      font-size: 14px;
      text-align: center;
      padding-top: 7px;
      box-sizing: border-box;
      height: 30px;
      text-align: center;


    }
  }

  // 上方标题
  .nav-bar {

    // padding-bottom: 10px;

    ::v-deep .van-tabs__line {
      background-color: #f87051;
      width: 15px;
      font-size: 15px;

    }

    ::v-deep .van-tab__text {
      font-size: 16px;
      // padding-bottom: 20px
    }

    // ::v-deep .van-tab {
    //     height: 60px;
    // }




    margin-bottom: 10px;
  }

  // 左右区域
  .nav-content {
    display: flex;



    .nav-content-left {
      // padding: 20px;
      width: 20%;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      background: #f3f4f5;

      .left-active {
        border-left: 5px solid #f86442;
        color: #85858d;
        background-color: #fff;
      }

      .content-text {
        color: #aaa;
        border-bottom: 1px solid #eee;

      }
    }





    .nav-right {
      width: 80%;
      padding-top: 5px;

      .content-box {
        display: flex;
        margin-left: 10px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;

        .content-box-img {
          width: 60px;
          height: 60px;
        }

        .content-box-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .content-box-text {
            padding-right: 8px;
            font-size: 14px;
            margin-left: 20px;
            margin-bottom: 2px;
            overflow: hidden;
            /*文本超出隐藏*/
            display: -webkit-box;
            /*盒子模型微弹性伸缩模型*/
            -webkit-box-orient: vertical;
            /*伸缩盒子的子元素垂直排列*/
            -webkit-line-clamp: 2;
            /*文本显示3行*/


          }

          .content-box-text1 {
            font-size: 12px;
            margin-left: 20px;
            color: #aaa;
            margin-bottom: 10px;

          }

          .content-box-icon {
            display: flex;
            padding-left: 15px;

            .content-bottom {
              margin-left: 5px;
              font-size: 10px;
              color: #aaa;
              margin-right: 15px;
            }
          }
        }
      }
    }
  }
}
</style>