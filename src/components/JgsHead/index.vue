<template>
  <div>
    <div class="head">
      <a>
        <img class="xmly"
          src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png">
        </img>
      </a>
      <span class="enlarge"></span>
      <a class="mlink">打开APP</a>
    </div>
    <div class=""></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JgsHead",
});
</script>
<script lang="ts" setup>
</script>

<style lang="less"scoped>
.head {
  height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 5px 15px;
  .xmly {
    height: 30px;
  }
  .enlarge {
    position: absolute;
    right: 104px;
    width: 24px;
    height: 24px;
    margin-top: 3px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIASURBVEiJ7ZW/i9RAFMe/LytsJmQh4C1nIRx25zTuT7AR9roD9/Ba/wvBQuX+gTtW/w4bC0HlrjgQO2E32I2Wa6XCEiIsmWk2zyJzoDGXxCDY+G2GZF7eZ97kO2+A/6oQVQVIKX3Xde8CuElE28z8DcBHY8wbpdS6MUBK6QshjgA8ABADeG/HAMBtOz7VWp+UgQoB4/H4GjO/YmYfwJMwDF/mY4bD4SGAGRHFRHQwn8+/1gJIKX3P896mafrdGHNYtjpb5RkRtZMk2SuKdfIvhBBHzOxXJQcApdRaa73PzIEQ4lFlBb1eL2i1Wl8A3C/alstkt+u51rqbX9QvFRDRPoD4T5IDgI2P2+32ND+XB+wic0sTLez3pYAdZFZsohURbZcCmPkzMn830ZY9hJcDHMf5hOwQNdEIwKIUkCTJawCBdUVtDQaDKYAgiqLzUoBSas3MzwDMpJR+neRSSp+IZsx8slwuTSkAAIwxx0QUCyFO60CEEKcA4iiKjovmfwMopdZEdEBErhDiw2g0upePmUwmV/r9/i37SACCbrdbaI7Sbuq67mMieojMugsAKwBbyIzgArihtTZCiDMAVx3H2cs3vVr3ged50zRNd3+6DxZRFJ1f7PlF0yuCVALqykJeANgBcCcMwxVQ8A+aSim17nQ6U2Z+t9lsrv+tvP9ePwD0XtPTugDyDwAAAABJRU5ErkJggg==);
  }
  .mlink {
    color: #fff;
    border: none;
    width: 76px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    background-color: red;
  }
}
</style>