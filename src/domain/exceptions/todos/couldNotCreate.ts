export class CouldNotCreateTodo extends Error {
    constructor(msg?: string) {
        const errorMessage = msg ?? 'Não foi possível adicionar sua TODO'
        super(errorMessage)
        this.name = 'CouldNotCreateTodo'
    }
}