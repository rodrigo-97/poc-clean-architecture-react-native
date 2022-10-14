import { Todo } from "@domain/entities/todo.entity";
import { AxiosHttpClient } from "../../../infra/protocols/http/axios/axios.http-client";

export const createAxiosHttpClient = () => new AxiosHttpClient<Todo>()