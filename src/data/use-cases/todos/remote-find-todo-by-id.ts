import { HttpClient, HttpVerbs, UsedStatusCode } from "../../../data/contracts/http-client.contract"
import { RemoteTodo } from "../../../data/contracts/remote-todo.contract"
import { Todo } from "../../../domain/entities/todo.entity"
import { CouldNotFetchTodoById } from "../../../domain/exceptions/could-not-fetch-todo-by-id.exception"
import { ITodoRepository } from "../../../domain/repositories/todo.repository"

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