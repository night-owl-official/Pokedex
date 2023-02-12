import { View, Animated, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

export default function MinLevel({ level }) {
    return (
        <View style={styles.container}>
            <Icon name={"arrow-right"} size={20} color={"#919191"} />

            <Animated.Text style={styles.text}>
                {level > 0 ? `Level ${level}` : ""}
            </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        marginTop: 8,
    },
});
