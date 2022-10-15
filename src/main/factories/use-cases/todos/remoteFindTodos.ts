import { RemoteFindTodos } from "@/data/use-cases/todos/remoteFindTodos";
import { Todo } from "@/domain/entities/entity";
import { createAxiosHttpClient } from "../../http/axiosHttpClient";

export const remoteFindTodos = () => new RemoteFindTodos(createAxiosHttpClient<Todo[]>())