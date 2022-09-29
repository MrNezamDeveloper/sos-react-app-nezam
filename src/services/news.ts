import { api } from "./api";


export const NewsList = () => api.get("news/");
