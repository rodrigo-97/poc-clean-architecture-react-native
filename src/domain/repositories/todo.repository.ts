import { Todo } from "@domain/entities/todo.entity";
import { IBaseRepository } from "./base-repository.repository";

export interface ITodoRepository extends IBaseRepository<Todo> { }