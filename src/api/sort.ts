import request from "../utils/request";

export const zmm_getCategoryList = () => {
  return request.get<any, { [paramname: string]: any }[]>(
    "https://m.ximalaya.com/m-revision/page/category/queryCategoriesV2"
  );
};
export const zmm_getCategoryInfo = (categoryId: string | number) => {
  return request.get<any, { [paramname: string]: any }>(
    `api/revision/category/v2/metadata/info?categoryId=${categoryId}`
  );
};
export const zmm_getCategoryAlbums = ({
  pageNum = 1,
  pageSize = 10,
  sort = 1,
  categoryId,
  metadataValues,
}: {
  [paramname: string]: any;
}) => {
  return request.get<any, { [paramname: string]: any }>(
    `api/revision/category/v2/albums?pageNum=${pageNum}&pageSize=${pageSize}&sort=${sort}&categoryId=${categoryId}&metadataValues=${metadataValues}`
  );
};
