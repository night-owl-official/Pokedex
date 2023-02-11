import { View, Animated, StyleSheet } from "react-native";

export default function StatLine({ value }) {
    return (
        <View style={styles.statLine}>
            <Animated.View
                style={[
                    { width: `${value}%` },
                    value >= 50
                        ? value < 60
                            ? styles.statValueMid
                            : styles.statValueHigh
                        : styles.statValueLow,
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    statLine: {
        flex: 1,
        overflow: "hidden",
        height: 5,
        borderRadius: 10,
        marginLeft: 16,
        backgroundColor: "#E7E7E8",
    },
    statValueHigh: {
        borderRadius: 10,
        height: 5,
        backgroundColor: "#41D168",
    },
    statValueMid: {
        borderRadius: 10,
        height: 5,
        backgroundColor: "#fff53a",
    },
    statValueLow: {
        borderRadius: 10,
        height: 5,
        backgroundColor: "#FA6555",
    },
});
