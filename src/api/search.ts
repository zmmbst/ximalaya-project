import request from "../utils/request";

export const zmm_getSearchList = ({
  kw,
  core = "all",
  page = 1,
  rows = 5,
}: {
  [paramname: string]: any;
}) => {
  return request.get<any, { [paramname: string]: any }>(
    `/api/m-revision/page/search?kw=${kw}&core=${core}&page=${page}&rows=${rows}`
  );
};
