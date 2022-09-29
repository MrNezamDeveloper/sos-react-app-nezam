import axios from "axios";

export const api =  axios.create({
	baseURL: 'https://fake.cafepy.ir/v1/',
})