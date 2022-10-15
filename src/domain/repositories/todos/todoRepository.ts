import { Todo } from "@/domain/entities/entity";
import { IBaseRepository } from "./baseRepository";

export interface ITodoRepository extends IBaseRepository<Todo> { }