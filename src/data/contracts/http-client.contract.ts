export type Request<T = any> = {
    headers?: any;
    data?: T;
    method: HttpVerbs;
    path: string
}

export type Response<T = any> = {
    statusCode: UsedStatusCode
    data: T
}

export type HttpClient<T = any> = {
    handle: (request: Request<T>) => Promise<Response<T>>
}

export enum UsedStatusCode {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    NOT_AUTHORIZED = 4011
}

export enum HttpVerbs {
    POST = "POST",
    DELETE = "DELEE",
    GET = "GET",
    PUT = "PUT"
}