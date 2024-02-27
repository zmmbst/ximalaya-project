import { defineStore } from "pinia";
import {
  zmm_getCategoryList,
  zmm_getCategoryInfo,
  zmm_getCategoryAlbums,
} from "../api/sort";
import { showNotify } from "vant";

interface sortStoreData {
  categoryList: { [paramname: string]: any }[];
  categoryInfo: { [paramname: string]: any }[];
  categoryAlbums: { [paramname: string]: any }[];
}

export const useSortStore = defineStore({
  id: "sort",
  state(): sortStoreData {
    return {
      categoryList: [],
      categoryInfo: [],
      categoryAlbums: [],
    };
  },
  actions: {
    async getCategoryList() {
      try {
        const result = await zmm_getCategoryList();
        this.categoryList = result;
      } catch (error) {
        showNotify("请求数据失败");
      }
    },
    async getCategoryInfo(id: number | string) {
      try {
        const result = await zmm_getCategoryInfo(id);
        this.categoryInfo = result.metadata;
      } catch (error) {
        showNotify("请求数据失败");
      }
    },
    async getCategoryAlbums(
      params: { [paramname: string]: any },
      isClear?: number
    ) {
      if (isClear !== 1) {
        this.categoryAlbums = [];
      }
      try {
        const result = await zmm_getCategoryAlbums(params);
        this.categoryAlbums = [...this.categoryAlbums, ...result.albums];
      } catch (error) {
        showNotify("请求数据失败");
      }
    },
  },
});
