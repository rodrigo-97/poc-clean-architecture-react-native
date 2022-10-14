import { HttpClient, Request, Response } from '@data/contracts/http-client.contract';
import { Axios } from './axios.config';

export class AxiosHttpClient<T> implements HttpClient<T> {
    async handle(request: Request<T>): Promise<Response<T>> {
        try {
            const response = await Axios({
                method: request.method,
                data: request.data,
                url: request.path
            })

            const responseData: Response<T> = {
                data: response.data,
                statusCode: response.status
            }

            return responseData
        } catch (error) {
            return Promise.reject(error)
        }
    }
}