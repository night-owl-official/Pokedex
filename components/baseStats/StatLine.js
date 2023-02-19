import { View, Animated, StyleSheet } from "react-native";

const MAX_POKEMON_STAT = 255;
const MID_LEVEL_STAT = 80;
const HIGH_LEVEL_STAT = 100;

export default function StatLine({ value }) {
    return (
        <View style={styles.statLine}>
            <Animated.View
                style={[
                    { width: `${(value / MAX_POKEMON_STAT) * 100}%` },
                    value >= MID_LEVEL_STAT
                        ? value < HIGH_LEVEL_STAT
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
