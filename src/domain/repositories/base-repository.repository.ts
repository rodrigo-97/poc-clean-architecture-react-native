export interface IBaseRepository<T> {
    find?: () => Promise<T[]>
    get?: (id: number) => Promise<T>
    add?: (data: T) => Promise<T>
    update?: (data: T, id: number) => Promise<T>
    delete?: (id: number) => Promise<void>
}