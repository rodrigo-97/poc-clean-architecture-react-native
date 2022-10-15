import { HttpClient, HttpVerbs, UsedStatusCode } from "@/data/contracts/httpClient"
import { RemoteTodo } from "@/data/contracts/remoteTodo"
import { CouldNotFetchTodos } from "@/domain/exceptions/todos/couldNotFetchTodos"
import { ITodoRepository } from "@/domain/repositories/todos/todoRepository"


export class RemoteRemoveTodo implements ITodoRepository {
    constructor(
        private readonly http: HttpClient<RemoteTodo>
    ) { }

    async delete(id: number): Promise<void> {
        const {
            statusCode
        } = await this.http.handle({
            method: HttpVerbs.GET,
            path: '/'
        })

        if (statusCode === UsedStatusCode.OK) {
            return
        }

        throw new CouldNotFetchTodos()
    }
}