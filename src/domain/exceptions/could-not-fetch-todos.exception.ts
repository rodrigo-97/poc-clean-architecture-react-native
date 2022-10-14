export class CouldNotFetchTodos extends Error {
    constructor(msg?: string) {
        const errorMessage = msg ?? 'Não foi possível buscar suas TODOS'
        super(errorMessage)
        this.name = 'CouldNotFetchTodos'
    }
}