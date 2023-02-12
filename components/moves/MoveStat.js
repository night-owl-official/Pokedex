import { View, Animated, StyleSheet } from "react-native";

export default function MoveStat({ title, value }) {
    return (
        <View style={styles.container}>
            <Animated.Text style={styles.heading}>{title}</Animated.Text>

            <Animated.Text style={styles.value}>
                {value === 0 ? "-" : value}
            </Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        color: "#919191",
        fontWeight: "bold",
        marginBottom: 4,
    },
    value: {
        fontWeight: "bold",
    },
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10,
    },
});
