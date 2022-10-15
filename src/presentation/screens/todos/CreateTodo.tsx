import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { remoteAddTodo } from "../../../main/factories/use-cases/todos/remoteAddTodo";
import { Button } from "../../components/Button";

export function CreateTodo() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false)

    const { navigate } = useNavigation()

    async function onSubmit() {
        setLoading(true)
        const todo = await remoteAddTodo().add({
            body,
            title,
            id: 1,
            userId: 1
        })

        setLoading(false)
        if (todo) {
            Alert.alert("TODO criada com suceesso")
            navigate("home")
        } else {
            Alert.alert("Erro ao criar TODO :/")
        }
    }

    return (
        <View>
            <Text>Criar TODO</Text>

            <View style={styles.inputs}>
                <TextInput
                    style={styles.input}
                    placeholder="Título"
                    onChangeText={setTitle}
                    editable={!loading}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Descrição"
                    numberOfLines={5}
                    onChangeText={setBody}
                    editable={!loading}
                />

                <Button
                    title="Criar"
                    onPress={onSubmit}
                    loading={loading}
                    loadingText='Salvando'
                />
            </View>
        </View>
    )
}

const styles = {
    inputs: {
        marginTop: 20,
    },
    input: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#949494",
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10
    }
}