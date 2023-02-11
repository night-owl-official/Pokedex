import { View, Animated, StyleSheet } from "react-native";

import StatLine from "./StatLine";

export default function StatGraph({ stat }) {
    return (
        <View style={styles.statGraphWrapper}>
            {/* Number */}
            <Animated.Text style={styles.statValueText}>
                {stat.value}
            </Animated.Text>

            <StatLine value={stat.value} />
        </View>
    );
}

const styles = StyleSheet.create({
    statGraphWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    statValueText: {
        fontWeight: "bold",
        textAlign: "right",
        width: 30,
    },
});
