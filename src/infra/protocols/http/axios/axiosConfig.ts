import axios from "axios";

export const Axios = axios.create({
    baseURL: "https://6349b7aca59874146b2603ce.mockapi.io/api/v1/todos"
})