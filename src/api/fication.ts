import axios from "axios";

export const lxy_first = () => {
  return axios.get<any>("/revision/rank/v4/rankTabs?sceneId=1");
};
export const lxy_secondary = (rankingId: string) => {
  return axios.get<any>(`/revision/rank/v4/element?rankingId=${rankingId}`);
};
