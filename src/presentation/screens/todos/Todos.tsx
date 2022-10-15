import { Todo } from "@/domain/entities/entity";
import { remoteFindTodos } from "@/main/factories/use-cases/todos/remoteFindTodos";
import { Loading } from "@/presentation/components/Loading";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";

export function Todos() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const todos = remoteFindTodos().find()
        setLoading(true)

        todos
            .then((res) => {
                setTodos(res)
            })
            .finally(() => setLoading(false))

        return () => {
            todos
        }
    }, [])

    return (
        <ScrollView>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <Text key={index}>{todo.title}</Text>
                                )
                            })
                        }
                    </>
                )
            }
        </ScrollView>
    )
}