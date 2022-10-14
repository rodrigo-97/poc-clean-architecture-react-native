import { HttpClient, HttpVerbs, UsedStatusCode } from "@data/contracts/http-client.contract";
import { RemoteTodo } from "@data/contracts/remote-todo.contract";
import { Todo } from "@domain/entities/todo.entity";
import { CouldNotCreateTodo } from "@domain/exceptions/could-not-create-todo.exception";
import { ITodoRepository } from "@domain/repositories/todo.repository";

export class RemoteAddTodo implements ITodoRepository {
    constructor(
        private readonly http: HttpClient<RemoteTodo>
    ) { }

    async add(todo: Todo) {
        const {
            data,
            statusCode
        } = await this.http.handle({
            data: todo,
            method: HttpVerbs.POST,
            path: '/'
        })

        if (statusCode === UsedStatusCode.CREATED){
            return data as Todo
        }

        throw new CouldNotCreateTodo() 
    }
}