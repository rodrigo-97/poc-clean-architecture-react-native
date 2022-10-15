import { HttpClient, HttpVerbs, UsedStatusCode } from "@/data/contracts/httpClient"
import { RemoteTodo } from "@/data/contracts/remoteTodo"
import { Todo } from "@/domain/entities/entity"
import { CouldNotFetchTodoById } from "@/domain/exceptions/todos/couldNotfetchById"
import { ITodoRepository } from "@/domain/repositories/todos/todoRepository"

export class RemoteFindTodoById implements ITodoRepository {
    constructor(
        private readonly http: HttpClient<RemoteTodo>
    ) { }

    async get(id: number) {
        const {
            data,
            statusCode
        } = await this.http.handle({
            method: HttpVerbs.GET,
            path: `/${id}`
        })

        if (statusCode === UsedStatusCode.OK) {
            return data as Todo
        }

        throw new CouldNotFetchTodoById()
    }
}