import { Todo } from "@domain/entities/todo.entity";
import { RemoteFindTodoById } from "../../../data/use-cases/todos/remote-find-todo-by-id";
import { createAxiosHttpClient } from "../http/axios-http-client";

export const remoteFindTodoById = () => new RemoteFindTodoById(createAxiosHttpClient<Todo>())