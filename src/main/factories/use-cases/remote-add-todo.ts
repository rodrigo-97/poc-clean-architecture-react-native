import { RemoteAddTodo } from "@data/use-cases/todos/remote-add-todo";
import { Todo } from "@domain/entities/todo.entity";
import { createAxiosHttpClient } from "../http/axios-http-client";

export const remoteAddTodo = () => new RemoteAddTodo(createAxiosHttpClient<Todo>())