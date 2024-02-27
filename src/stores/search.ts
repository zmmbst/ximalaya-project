import { defineStore } from "pinia";
import { zmm_getSearchList } from "../api/search";
import { showNotify } from "vant";

interface searchStoreData {
  userList: { [paramname: string]: any }[];
  trackList: { [paramname: string]: any }[];
  albumList: { [paramname: string]: any }[];
}

export const useSearchStore = defineStore({
  id: "search",
  state(): searchStoreData {
    return {
      userList: [],
      trackList: [],
      albumList: [],
    };
  },
  actions: {
    async getCategoryList(params: { [paramname: string]: any }) {
      try {
        const result = await zmm_getSearchList(params);
        console.log(result);
        this.albumList = result.albumViews.albums;
        this.userList = result.userViews.users;
        this.trackList = result.trackViews.tracks;
      } catch (error) {
        showNotify("请求数据失败");
      }
    },
  },
});
