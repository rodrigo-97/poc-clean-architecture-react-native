import { HttpClient, Request, Response } from '@data/contracts/http-client.contract';
import { Todo } from "@domain/entities/todo.entity";
import { Axios } from './axios.config';

export class AxiosHttpClient implements HttpClient {
    async handle(request: Request): Promise<Response> {
        try {
            const response = await Axios({
                method: request.method,
                data: request.data,
                url: request.path
            })

            const responseData: Response<Todo> = {
                data: response.data,
                statusCode: response.status
            }

            return responseData
        } catch (error) {
            return Promise.reject(error)
        }
    }
}