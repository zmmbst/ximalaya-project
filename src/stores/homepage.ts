import { defineStore } from "pinia";
import homepageApi from "../api/homepage";
import type {cx_GetNewbieData,cx_GetFreetimeData} from "../api/homepage";

interface NewbieStorestateData{
    newbieList:cx_GetNewbieData;
}
interface FreeStorestateData{
    freeList:cx_GetFreetimeData;
}


export const useFreeStore = defineStore("homepage",{
    state():FreeStorestateData{
        return {
            freeList:{
                code: 0,
                msg: "",
                remainingTime: 0,
                limitedTimeFreeAlbums: []
            }
        }
    },
    actions:{
        async getfreetimeList(){
            try {
                const result = await homepageApi.getFreetimeList()
                this.freeList={...result};
                return "ok";
            } catch (error) {
                return Promise.reject(error)
            }
        },
    },
    getters:{}
})

export const useNewbieStore = defineStore("homepage1",{
    state():NewbieStorestateData{
        return {
            newbieList:{
                ret: 0,
                currentUid: 0,
                total: 0,
                pageNum: 0,
                pageSize: 0,
                albums: []
            },
        }
    },
    actions:{
        async getnewbieList(){
            try {
                const result = await homepageApi.getNewbieList()
                this.newbieList={...result};
                return "ok";
            } catch (error) {
                return Promise.reject(error)
            }
        },
    },
    getters:{}
})
  