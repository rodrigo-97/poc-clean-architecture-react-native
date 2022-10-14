import { AxiosHttpClient } from "../../../infra/protocols/http/axios/axios.http-client";

export const createAxiosHttpClient = <T>() => new AxiosHttpClient<T>()