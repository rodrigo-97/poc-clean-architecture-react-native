import { Todo } from "@/domain/entities/entity"
import { remoteFindTodoById } from "@/main/factories/use-cases/todos/remoteFindTodoById"
import { Button } from "@/presentation/components/Button"
import { useState } from "react"
import { Text, TextInput } from "react-native"
import { View } from "react-native"

export function TodoPage() {
    const [todo, setTodo] = useState<Todo | null>()
    const [id, setId] = useState('')

    function getTodo() {
        const todo = +id >= 1 && remoteFindTodoById()
            .get(+id)
            .then((res) => setTodo(res))
    }

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
            <Button title="Procurar" onPress={getTodo} />
            <Text style={{ marginTop: 20 }}>
                {todo?.title}
            </Text>
        </View>
    )
}