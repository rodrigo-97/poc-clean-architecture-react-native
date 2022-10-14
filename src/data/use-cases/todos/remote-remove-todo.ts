import { HttpClient, HttpVerbs, UsedStatusCode } from "../../../data/contracts/http-client.contract";
import { RemoteTodo } from "@data/contracts/remote-todo.contract";
import { CouldNotFetchTodos } from "../../../domain/exceptions/could-not-fetch-todos.exception";
import { ITodoRepository } from "@domain/repositories/todo.repository";

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