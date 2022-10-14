import { Todo } from "@domain/entities/todo.entity";
import { useEffect, useState } from "react";
import { remoteFindTodos } from "../../main/factories/use-cases/remote-find-todos";

export function useTodoViewModel() {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const todos = remoteFindTodos().find()

        todos.then((res) => {
            setTodos(res)
        })

        return () => {
            todos
        }
    }, [])


    return { todos }
}