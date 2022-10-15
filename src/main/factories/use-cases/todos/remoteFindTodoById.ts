import { RemoteFindTodoById } from "@/data/use-cases/todos/remoteFindTodo";
import { Todo } from "@/domain/entities/entity";
import { createAxiosHttpClient } from "../../http/axiosHttpClient";

export const remoteFindTodoById = () => new RemoteFindTodoById(createAxiosHttpClient<Todo>())