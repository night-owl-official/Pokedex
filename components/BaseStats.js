import { StyleSheet, View, Animated } from "react-native";

import { getColorByType } from "../utils/pokemonTypeColors";
import { getTypeIconByType, getMoveIconByType } from "../utils/pokemonIcons";

export default function BaseStats({ pokemonData }) {
    return (
        <>
            {pokemonData.baseStats.map((baseStat, index) => (
                <View key={index} style={styles.statWrapper}>
                    {/* Stat Name */}
                    <Animated.Text style={{ color: "#919191", width: 100 }}>
                        {baseStat.name}
                    </Animated.Text>

                    {/* Stat Graph */}
                    <View style={styles.statGraphWrapper}>
                        {/* Number */}
                        <Animated.Text
                            style={{
                                fontWeight: "bold",
                                textAlign: "right",
                                width: 30,
                            }}
                        >
                            {baseStat.value}
                        </Animated.Text>

                        {/* Slider */}
                        <View style={styles.statLine}>
                            <Animated.View
                                style={[
                                    { width: `${baseStat.value}%` },
                                    baseStat.value >= 50
                                        ? baseStat.value < 60
                                            ? styles.statValueMid
                                            : styles.statValueHigh
                                        : styles.statValueLow,
                                ]}
                            />
                        </View>
                    </View>
                </View>
            ))}

            {/* Type Effectiveness */}
            <View style={styles.typeEffectivenessContainer}>
                {/* Header */}
                <View style={styles.typeEffectivenessHeader}>
                    <Animated.Text style={styles.typeEffectivenessHeaderTitle}>
                        Type Defenses
                    </Animated.Text>

                    <Animated.Text
                        style={styles.typeEffectivenessHeaderSubtitle}
                    >
                        The effectiveness of each type on {pokemonData.name}.
                    </Animated.Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    statWrapper: {
        marginBottom: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    statGraphWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
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
    typeEffectivenessContainer: {
        flex: 1,
        marginTop: 24,
    },
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
    typeEffectivenessList: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    typeEffectivenessItem: {
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginBottom: 8,
        marginRight: 8,
    },
});
