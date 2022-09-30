import { api } from "./api";

export const getNewsList = () => api.get("news/");
