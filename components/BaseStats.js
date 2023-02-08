import { StyleSheet, View, Animated, Image } from "react-native";

import { getColorByType } from "../utils/pokemonTypeColors";
import { getTypeIconByType } from "../utils/pokemonIcons";

export default function BaseStats({ pokemonData }) {
    return (
        <>
            {pokemonData.baseStats.map((baseStat, index) => (
                <View key={index} style={styles.statWrapper}>
                    {/* Stat Name */}
                    <Animated.Text style={styles.statNameText}>
                        {baseStat.name}
                    </Animated.Text>

                    {/* Stat Graph */}
                    <View style={styles.statGraphWrapper}>
                        {/* Number */}
                        <Animated.Text style={styles.statValueText}>
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

                {/* Effectiveness List */}
                <View style={styles.typeEffectivenessList}>
                    {pokemonData.typeEffectiveness.map((effect, index) => (
                        <View
                            key={index}
                            style={styles.typeEffectivenessItemWrapper}
                        >
                            {/* Background */}
                            <View
                                style={[
                                    styles.typeEffectivenessItem,
                                    {
                                        backgroundColor: getColorByType(
                                            effect.type
                                        ),
                                    },
                                ]}
                            >
                                {/* Icon */}
                                <Image
                                    style={styles.typeEffectivenessIcon}
                                    source={getTypeIconByType(effect.type)}
                                />

                                {/* Type Text */}
                                <Animated.Text
                                    style={styles.typeEffectivenessItemText}
                                >
                                    {effect.type}
                                </Animated.Text>
                            </View>

                            {/* Effectiveness Value */}
                            <Animated.Text style={styles.typeEffectivenssText}>
                                {effect.effectiveness}x
                            </Animated.Text>
                        </View>
                    ))}
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
    statNameText: {
        color: "#919191",
        width: 100,
    },
    statValueText: {
        fontWeight: "bold",
        textAlign: "right",
        width: 30,
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
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    typeEffectivenessItemWrapper: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    typeEffectivenessItem: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        paddingVertical: 6,
        paddingHorizontal: 10,
        marginBottom: 16,
        marginRight: 4,
    },
    typeEffectivenessIcon: {
        width: 15,
        height: 15,
        marginRight: 6,
    },
    typeEffectivenessItemText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 18,
    },
    typeEffectivenssText: {
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 18,
    },
});
