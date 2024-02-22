<template>
  <div>
    <form class="search" action="">
      <div class="search_box">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIASURBVEiJ7ZW/i9RAFMe/LytsJmQh4C1nIRx25zTuT7AR9roD9/Ba/wvBQuX+gTtW/w4bC0HlrjgQO2E32I2Wa6XCEiIsmWk2zyJzoDGXxCDY+G2GZF7eZ97kO2+A/6oQVQVIKX3Xde8CuElE28z8DcBHY8wbpdS6MUBK6QshjgA8ABADeG/HAMBtOz7VWp+UgQoB4/H4GjO/YmYfwJMwDF/mY4bD4SGAGRHFRHQwn8+/1gJIKX3P896mafrdGHNYtjpb5RkRtZMk2SuKdfIvhBBHzOxXJQcApdRaa73PzIEQ4lFlBb1eL2i1Wl8A3C/alstkt+u51rqbX9QvFRDRPoD4T5IDgI2P2+32ND+XB+wic0sTLez3pYAdZFZsohURbZcCmPkzMn830ZY9hJcDHMf5hOwQNdEIwKIUkCTJawCBdUVtDQaDKYAgiqLzUoBSas3MzwDMpJR+neRSSp+IZsx8slwuTSkAAIwxx0QUCyFO60CEEKcA4iiKjovmfwMopdZEdEBErhDiw2g0upePmUwmV/r9/i37SACCbrdbaI7Sbuq67mMieojMugsAKwBbyIzgArihtTZCiDMAVx3H2cs3vVr3ged50zRNd3+6DxZRFJ1f7PlF0yuCVALqykJeANgBcCcMwxVQ8A+aSim17nQ6U2Z+t9lsrv+tvP9ePwD0XtPTugDyDwAAAABJRU5ErkJggg=="
          alt="">
        <span>搜索</span>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JgsSearch",
});
</script>
<script lang="ts" setup>
import { ref } from "vue";
</script>

<style lang="less"scoped>
.search {
  height: 46px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  color: #acacab;
  .search_box {
    width: 100%;
    height: 30px;
    font-size: 12px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    background-color: #eff1f4;
    img {
      width: 20px;
      margin: 5px;
    }
  }
}
</style>