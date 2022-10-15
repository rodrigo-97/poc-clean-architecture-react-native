import { RemoteAddTodo } from "@/data/use-cases/todos/remoteAddTodo";
import { Todo } from "@/domain/entities/entity";
import { createAxiosHttpClient } from "../../http/axiosHttpClient";

export const remoteAddTodo = () => new RemoteAddTodo(createAxiosHttpClient<Todo>())