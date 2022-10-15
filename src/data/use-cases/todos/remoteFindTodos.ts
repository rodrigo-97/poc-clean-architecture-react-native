import { HttpClient, HttpVerbs, UsedStatusCode } from "@/data/contracts/httpClient"
import { RemoteTodo } from "@/data/contracts/remoteTodo"
import { CouldNotFetchTodos } from "@/domain/exceptions/todos/couldNotFetchTodos"
import { ITodoRepository } from "@/domain/repositories/todos/todoRepository"

export class RemoteFindTodos implements ITodoRepository {
    constructor(
        private readonly http: HttpClient<RemoteTodo[]>
    ) { }

    async find(): Promise<RemoteTodo[]> {
        const {
            data,
            statusCode
        } = await this.http.handle({
            method: HttpVerbs.GET,
            path: '/'
        })

        if (statusCode === UsedStatusCode.OK) {
            return data
        }

        throw new CouldNotFetchTodos()
    }
}