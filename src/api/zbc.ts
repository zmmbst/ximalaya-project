import result from "../utils/request";

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
    return result.get(`https://m.ximalaya.com/revision/subject/category`)
  }
}