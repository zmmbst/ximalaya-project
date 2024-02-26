import request from '../utils/request'

// 新人必听
export interface cx_GetNewbieData{
    ret:number;
        currentUid:number;
        total:number;
        pageNum:number;
        pageSize:number;
        albums:{[paramname:string]:any}[];
}


// 限时免费
export interface cx_GetFreetimeData{
    code:number,
    msg:string,
    remainingTime:number,
    limitedTimeFreeAlbums:{[paramname:string]:any}[];
}
// 今日热点
export interface cx_GetTodayData{
    code:number,
    msg:string,
    hotTracks:{[paramname:string]:any}[]
}

export default {
    // 新人必听的api函数
    getNewbieList(pageNum=1,pageSize=6){
        return request.get<any,cx_GetNewbieData>(`api/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=1`)
    },
    // 限时免费的api函数
    getFreetimeList(){
        return request.get<any,cx_GetFreetimeData>("api/web-site/main/page")
    },
    // 今日热点的api函数
    getTodayhotList(){
        return request.get<any,cx_GetTodayData>("api/web-site/main/page")
    }
}