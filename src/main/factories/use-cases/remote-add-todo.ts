import { RemoteAddTodo } from "@data/use-cases/todos/remote-add-todo";
import { createAxiosHttpClient } from "../http/axios-http-client";

export const remoteAddTodo = () => new RemoteAddTodo(createAxiosHttpClient())