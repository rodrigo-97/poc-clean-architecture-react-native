import { StyleSheet, Pressable, Text, ActivityIndicator } from "react-native"
import { Loading } from "./Loading"

type Props = {
    title: string,
    onPress: () => void
    loading?: boolean
    loadingText?: string
}

export function Button({ title = "Salvar", onPress, loading = false, loadingText = "Salvando" }: Props) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress}
            disabled={loading}
        >
            {loading && <ActivityIndicator size="small" color="#FFF" />}
            <Text style={styles.text}>
                {loading ? loadingText : title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'B1B2FF',
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});