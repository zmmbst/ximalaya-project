import request from "../utils/request";

export const zmm_getCategoryList = () => {
  return request.get<any, { [paramname: string]: any }[]>(
    "https://m.ximalaya.com/m-revision/page/category/queryCategoriesV2"
  );
};
