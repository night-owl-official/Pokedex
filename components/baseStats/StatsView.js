import { View, Animated, StyleSheet } from "react-native";
import StatGraph from "./StatGraph";

export default function StatsView({ stats }) {
    return (
        <>
            {stats.map((stat, index) => (
                <View key={index} style={styles.statWrapper}>
                    {/* Stat Name */}
                    <Animated.Text style={styles.statNameText}>
                        {stat.name}
                    </Animated.Text>

                    <StatGraph stat={stat} />
                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    statWrapper: {
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    statNameText: {
        color: "#919191",
        width: 100,
    },
});
