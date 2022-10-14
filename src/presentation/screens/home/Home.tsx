import { Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

export function Home() {
    const { navigate } = useNavigation()

    return (
        <View>
            <Button title="Listar" onPress={() => navigate("list")} />
            <Button title="Buscar por id" onPress={() => navigate("id")} />
            <Button title="Criar" />
            <Button title="Atualizar" />
            <Button title="Deletar" />
        </View>
    )
}