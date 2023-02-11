import { View, Animated, StyleSheet } from "react-native";

export default function Header({ name }) {
    return (
        <View style={styles.typeEffectivenessHeader}>
            <Animated.Text style={styles.typeEffectivenessHeaderTitle}>
                Type Defenses
            </Animated.Text>

            <Animated.Text style={styles.typeEffectivenessHeaderSubtitle}>
                The effectiveness of each type on {name}.
            </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    typeEffectivenessHeader: {
        marginBottom: 24,
    },
    typeEffectivenessHeaderTitle: {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 22,
    },
    typeEffectivenessHeaderSubtitle: {
        color: "#919191",
        marginTop: 8,
    },
});
