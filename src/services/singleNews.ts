import { ISingleNews } from "./../models/singleNews";
import { api } from "./api";

export const getSingleNews = (params: string | undefined) =>
  api.get<ISingleNews>(`news/${params}`);
