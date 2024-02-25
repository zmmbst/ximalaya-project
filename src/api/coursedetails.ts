import request from '../utils/request';



    //头部内容介绍

  export const  getheadDetails=(id:number)=>{
        return request.get<any, { [paramname: string]: any }[]>(`https://m.ximalaya.com/m-revision/page/album/v2/queryAlbumPage/${id}`)
    };
    //节目列表
  export const  getprogramList=()=>{
        return request.get<any, { [paramname: string]: any }[]>(`https://m.ximalaya.com/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId=9723091&page=1&pageSize=10&asc=true&countKeys=play%2Ccomment&v=1692018651710`)
    };
    //主播信息
   export const getcommentInformation=(page:number,pageSize:number,albumId:number,v:number)=>{
        return request.get<any, { [paramname: string]: any }[]>(`https://m.ximalaya.com/m-revision/common/album/queryAlbumCommentsByPage?page=${page}&pageSize=${pageSize}&albumId=${albumId}&v=${v}`)
    };
    //猜你喜欢
   export const getguessYou=(pageNum:number,pageSize:number,sort:number)=>{
        return request.get<any, { [paramname: string]: any }[]>(`https://m.ximalaya.com/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=${sort}`)
    };
    //相关推荐
 export const getrecommend=(kw:string,page:number,rows:number,device:string,condition:string,spellchecker:boolean,core:string)=>{
        return request.get<any, { [paramname: string]: any }[]>(`https://m.ximalaya.com/revision/search/seo?kw=${kw}&page=${page}&rows=${rows}&device=${device}&condition=${condition}&spellchecker=${spellchecker}&core=${core}`)
    };
 
