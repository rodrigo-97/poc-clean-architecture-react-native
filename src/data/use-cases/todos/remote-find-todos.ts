import { HttpClient, HttpVerbs, UsedStatusCode } from "../../../data/contracts/http-client.contract";
import { RemoteTodo } from "@data/contracts/remote-todo.contract";
import { CouldNotFetchTodos } from "../../../domain/exceptions/could-not-fetch-todos.exception";
import { ITodoRepository } from "@domain/repositories/todo.repository";

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