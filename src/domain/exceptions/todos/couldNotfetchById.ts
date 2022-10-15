export class CouldNotFetchTodoById extends Error {
    constructor(msg?: string) {
        const errorMessage = msg ?? 'Não foi possível buscar suas TODO com o id passdo'
        super(errorMessage)
        this.name = 'CouldNotFetchTodoById'
    }
}