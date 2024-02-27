<template>
  <div class="search-info-content">
    <div class="info-position">
      <div class="info-tab">
        <div class="tab">全部</div>
        <div class="tab">专辑</div>
        <div class="tab">声音</div>
        <div class="tab">主播</div>
      </div>
    </div>
    <div class="info-anchorman">
      <div class="top">
        <span class="title-text">‘米小圈’相关的主播</span>
        <div class="more">
          <span class="more-text">更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="anchorman-list">
        <div class="anchorman-item">
          <a
            v-for="(user, index) in searchStore.userList"
            :key="index"
            class="userItem"
            href="/zhubo/68394601"
          >
            <img class="userCover" :src="user.userInfo.smallPic" />
            <div class="userData">
              <span class="userTitle">{{ user.userInfo.nickname }}</span>
              <span class="userInfo">
                <van-icon name="friends-o" />
                &nbsp;{{
                  bigNumberTransform(user.userInfo.followers_counts, "table")
                }}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="info-album">
      <div class="top">
        <span class="title-text">‘米小圈’相关的专辑</span>
        <div class="more">
          <span class="more-text">更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="album-list">
        <div
          v-for="album in searchStore.albumList"
          :key="album.albumInfo.id"
          class="album-item"
        >
          <div class="album-img">
            <img :src="album.albumInfo.cover_path" />
          </div>
          <div class="aldum-data">
            <div class="aldum-title">{{ album.albumInfo.custom_title }}</div>
            <div class="aldum-text">{{ album.albumInfo.intro }}</div>
            <div class="aldum-record">
              <div>
                <van-icon name="friends-o" />
                <span>{{ album.albumInfo.nickname }}</span>
              </div>
              <div>
                <van-icon name="fire-o" />
                <span>{{
                  bigNumberTransform(album.albumInfo.tracks, "")[0] +
                  bigNumberTransform(album.albumInfo.tracks, "")[2]
                }}</span>
              </div>
              <div>
                <van-icon name="service-o" />
                <span>{{
                  bigNumberTransform(album.albumInfo.play, "table")
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-sound">
      <div class="top">
        <span class="title-text">‘米小圈’相关的声音</span>
        <div class="more">
          <span class="more-text">更多</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="sound-list">
        <div
          v-for="track in searchStore.trackList"
          :key="track.trackInfo.id"
          class="sound-item"
        >
          <div class="sound-img">
            <img :src="track.trackInfo.album_cover_path" />
            <div class="sound-icon">
              <van-icon name="play-circle" />
            </div>
          </div>
          <div class="sound-data">
            <div class="sound-title">
              {{ track.trackInfo.album_title }}
            </div>
            <div class="sound-record">
              <div>
                <van-icon name="friends-o" />
                <span>{{ track.trackInfo.nickname }}</span>
              </div>
              <div>
                <van-icon name="clock-o" />
                <span>{{
                  new Date(track.trackInfo.updated_at).getHours() +
                  ":" +
                  new Date(track.trackInfo.updated_at).getMinutes()
                }}</span>
              </div>
              <div>
                <van-icon name="service-o" />
                <span>
                  {{ bigNumberTransform(track.trackInfo.count_play, "table") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "search-info",
});
</script>
<script setup lang="ts">
import { onMounted } from "vue";
import { useSearchStore } from "../../stores/search";
import bigNumberTransform from "big-number-transform";

const searchStore = useSearchStore();

onMounted(() => {
  searchStore.getCategoryList({ kw: "红" });
});
</script>

<style scoped lang="less">
.search-info-content {
  margin-left: 15px;
  .top {
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
    .title-text {
      font-size: 18px;
    }
    .more {
      font-size: 12px;
      .more-text {
        margin-right: 5px;
      }
    }
  }
  .info-position {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 35px;
    .info-tab {
      background-color: #fff;
      display: flex;
      height: 35px;
      font-size: 14px;
      color: rgb(163, 163, 172);
      border-bottom: 1px solid #eee;
      .tab {
        height: 35px;
        line-height: 35px;
        text-align: center;
        flex: 1;
      }
    }
  }
  .info-anchorman {
    // margin-top: 10px;
    padding-top: 60px;
    .anchorman-item::-webkit-scrollbar {
      display: none;
    }
    .anchorman-list {
      margin: 15px;
      margin-left: 0;
      .anchorman-item {
        display: flex;
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;
        .userItem {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          margin-right: 30px;
          .userCover {
            margin-right: 5px;
            width: 40px;
            height: 40px;
            border: 2px solid #f1f1f1;
            box-sizing: border-box;
            border-radius: 50%;
          }
          .userData {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-weight: 400;
            vertical-align: baseline;
            .userTitle {
              padding-bottom: 4px;
              max-width: 140px;
              line-height: 20px;
              font-family: PingFangSC-Medium;
              font-weight: 700;
              font-weight: 500;
              font-size: 14px;
              color: #40404c;
            }
            .userInfo {
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #a3a3ac;
              line-height: 16px;
            }
          }
        }
      }
    }
  }
  .info-album {
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
            display: flex;
            font-size: 12px;
            width: 210px;
            justify-content: space-between;
            align-items: center;
            div {
              span {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
  .info-sound {
    .sound-list {
      .sound-item {
        display: flex;
        padding: 15px 15px 15px 0;
        border-bottom: 1px solid #eee;
        .sound-img {
          width: 50px;
          height: 50px;
          position: relative;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          .sound-icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.3);
          }
        }
        .sound-data {
          margin-left: 15px;
          .sound-title {
            font-size: 16px;
          }
          .sound-record {
            display: flex;
            // width: 200px;
            margin: 10px 20px 10px 0;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            div {
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
</style>
