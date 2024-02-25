import request from "../utils/request";



export default {
  getNavData() {
    return request.get(`api/revision/subject/category`)
  },
  getListenList(title?: any, pageNum?: any, pageSize?: any) {
    return request.get(`api/revision/subject/categorySubjectList/${title}?pageNum=${pageNum}&pageSize=${pageSize}`)
  }
}
