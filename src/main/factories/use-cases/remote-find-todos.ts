import { RemoteFindTodos } from "../../../data/use-cases/todos/remote-find-todos";
import { createAxiosHttpClient } from "../http/axios-http-client";

export const remoteFindTodos = () => new RemoteFindTodos(createAxiosHttpClient())