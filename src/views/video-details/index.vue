<template>
    <div class="video-details">
        <div class="top">
            <image class="top-tupian" src="//imagev2.xmcdn.com/storages/95aa-audiofreehighqps/38/EA/GMCoOSII_TADAAUsMQJq2bC0.jpeg!op_type=3&columns=144&rows=144"></image>

            <div class="album-content">
                <div class="top-biaoti">美味童话｜汉堡王子1·膳食宝塔｜下饭故事</div>
            <a class="album-author" href="">
                <img class="top-touxiang" src="//imagev2.xmcdn.com/storages/8224-audiofreehighqps/1C/33/GMCoOSQJl-CBAABzZAKlrTvn.jpg!op_type=5&device_type=ios&name=web_meduim&upload_type=cover&magick=webp">
                <span class="tou-zuozhe" >超能童话镇</span>
            </a>
            <div class="top-boufang">

                <span class="top-bofang">
                    <van-icon class="top-bofangtubiao" name="play" />
                <span class="top-bofangliang">141.90万
                </span>
                </span>
                <span class="top-shouchang">
                    <van-icon class="top-tubiaocishu" name="certificate" />
                <span class="top-dianjishu">2972</span>
            </span>
                
            </div>



            </div>



       
        </div>
        <div class="stretch-box">
            <div class="rich-box">
                <p class="zi">汉堡王子第二季来了，快快订阅，关注不迷路。</p>
                <p class="tu">
                    <img class="xiangqingtu" src="https://imagev2.xmcdn.com/storages/dcf1-audiofreehighqps/B1/7D/GKwRIUEI_TCEAAh0BQJq2iVF.png!op_type=4&device_type=ios&upload_type=attachment&name=mobile_large">
                </p>
            </div>
        </div>
        <div class="program">
            <div class="">
                <div>节目(150)</div>
                <div>切换顺序</div>
            </div>
            <div>
                
            </div>
            
        </div>
    </div>
  
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "video-details",
  });
  </script>
  <script setup lang="ts"></script>
  
  <style scoped lang="less">





  .video-details{
    margin-top:80px;
    width:345px;
    height: 100%;
    margin-left: 15px;
    border: 1px solid red;
        .top{
            width:314px;
            height:120px;
            border:1px solid red;
            display:flex;
            padding: 26px 15px 15px;
            // justify-content: space-around;
            
            .top-tupian{
                width:120px;
                height:120px;
                border-radius:12px ;
                overflow: hidden;
            }
            .album-content{
              margin-left: 10px;
              -webkit-box-flex: 1;
            //   -ms-flex: 1;
              flex: 1;
              .top-biaoti{
                font-size: 20px;
                line-height: 24px;
                font-weight: 600;
              }
            }
            .album-author{
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                margin-top: 8px;
                color: #7e8c8d;
                .top-touxiang{
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 10px;
                }
                .tou-zuozhe{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 14px;
                }
            }
            .top-boufang{
                font-size:12px ;
                color: #aaa;
                margin-top: 6px;
                .top-bofang{
                    margin-right:10px ;
                    position: relative;
                    .top-bofangtubiao{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                    }
                    .top-bofangliang{
                        display: inline-block;
                        vertical-align: middle;

                    }
                }
                .top-shouchang{
                    margin-right: 10px;
                    position: relative;
                    .top-tubiaocishu{
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        vertical-align: middle;
                    }
                    .top-dianjishu{
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
        }
        .stretch-box{
            position: relative;
            overflow: hidden;
            margin-left: -15px;
            .rich-box{
                padding: 15px 15px 0;
                font-size: 14px;
                line-height: 22px;
                color: #333;
                .zi{
                    // color:#333333;
                    font-weight:normal;
                    // font-size:16px;
                    // line-height:30px;
                    font-family:Helvetica,Arial,sans-serif;
                    // hyphens:auto;
                    text-align:justify;
                 
                }
                .tu{
                        color:#333333;
                            font-weight:normal;
                            font-size:16px;
                            line-height:30px;
                            font-family:Helvetica, Arial, sans-serif;
                            hyphens:auto;
                            text-align:justify;
                        .xiangqingtu{
                            max-width: 100%;
                            height: 2541px;
                            // border: none;
                            width: 345px;
                            // font-size: 10px;
                        }
                    }

            }
        }

  }
  </style>
  