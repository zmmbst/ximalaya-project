import request from "../utils/request";

export const zmm_getLogin = (data: { [paramname: string]: any }) => {
  return request.post<any, { [paramname: string]: any }>(
    "http://sph-h5-api.atguigu.cn/api/user/passport/login",
    data
  );
};
