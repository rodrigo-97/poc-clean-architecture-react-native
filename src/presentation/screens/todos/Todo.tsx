import { Todo as TodoModel } from "@domain/entities/todo.entity";
import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { remoteFindTodoById } from "../../../main/factories/use-cases/remote-find-todo-by-id";

export function Todo() {
    const [todo, setTodo] = useState<TodoModel>()
    const [id, setId] = useState('')

    useEffect(() => {
        const todo = +id >= 1 && remoteFindTodoById()
            .get(+id)
            .then((res) => setTodo(res))

        return () => {
            todo
        }
    }, [id])

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#949494",
                    height: 60,
                    paddingLeft: 20
                }}
                onChangeText={setId}
            />
            <Text style={{ marginTop: 20 }}>
                {todo?.title}
            </Text>
        </View>
    )
}