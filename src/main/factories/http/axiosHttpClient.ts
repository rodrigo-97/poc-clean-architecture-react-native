import { AxiosHttpClient } from "../../../infra/protocols/http/axios/axiosHttpClient";

export const createAxiosHttpClient = <T>() => new AxiosHttpClient<T>()