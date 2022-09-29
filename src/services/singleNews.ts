import { api } from "./api";

export const SingleNews = (params: string|undefined) => api.get(`news/${params}`);
