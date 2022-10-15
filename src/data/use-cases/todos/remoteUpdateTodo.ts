import { HttpClient, HttpVerbs, UsedStatusCode } from "@/data/contracts/httpClient"
import { RemoteTodo } from "@/data/contracts/remoteTodo"
import { Todo } from "@/domain/entities/entity"
import { CouldNotFetchTodos } from "@/domain/exceptions/todos/couldNotFetchTodos"
import { ITodoRepository } from "@/domain/repositories/todos/todoRepository"

export class RemoteUpdateTodo implements ITodoRepository {
    constructor(
        private readonly http: HttpClient<RemoteTodo>
    ) { }

    async update (todo: Todo, id: number): Promise<RemoteTodo> {
        const {
            data,
            statusCode
        } = await this.http.handle({
            method: HttpVerbs.GET,
            path: '/',
            data: todo
        })

        if (statusCode === UsedStatusCode.OK) {
            return data
        }

        throw new CouldNotFetchTodos()
    }
}