import axios from "axios";

export const Axios = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})