import { ScrollView, Text } from "react-native";
import { useTodoViewModel } from "./use-view-model";

export function Todos() {
    const { todos } = useTodoViewModel()

    return (
        <ScrollView style={{
            padding: 32
        }}>
            {
                todos.map((todo, index) => {
                    return (
                        <Text key={index}>{todo.title}</Text>
                    )
                })
            }
        </ScrollView>
    )
}