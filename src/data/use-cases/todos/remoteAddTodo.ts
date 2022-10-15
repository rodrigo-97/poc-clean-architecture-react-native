import { HttpClient, HttpVerbs, UsedStatusCode } from "@/data/contracts/httpClient"
import { RemoteTodo } from "@/data/contracts/remoteTodo"
import { Todo } from "@/domain/entities/entity"
import { CouldNotCreateTodo } from "@/domain/exceptions/todos/couldNotCreate"
import { ITodoRepository } from "@/domain/repositories/todos/todoRepository"

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