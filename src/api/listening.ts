import request from "../utils/request";

export type GetNavData={
  categories:GetNavDataList[]
}
export interface GetNavDataList{
cid: number,
title: string,
name: string,
pageView: number
}



export default {
  getNav() {
    return request.get<any,GetNavDataList>(`api/revision/subject/category`)
  }
}