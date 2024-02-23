import { defineStore } from "pinia";
import { zmm_getCategoryList } from "../api/sort";
import { showNotify } from "vant";

interface sortStoreData {
  categoryList: { [paramname: string]: any }[];
}

export const useSortStore = defineStore({
  id: "sort",
  state(): sortStoreData {
    return {
      categoryList: [],
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
  },
  getters: {
    category2List(): { [paramname: string]: any }[] {
      const result = this.categoryList.map((item) => item.subCategories[0]);
      return result;
    },
  },
});
