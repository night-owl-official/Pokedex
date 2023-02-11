import { View, Animated, Image, StyleSheet } from "react-native";

import { getColorByType } from "../../../utils/pokemonTypeColors";
import { getTypeIconByType } from "../../../utils/pokemonIcons";

export default function TypeEffectiveness({ effectivenessList }) {
    return (
        <View style={styles.typeEffectivenessList}>
            {effectivenessList.map((effect, index) => (
                <View key={index} style={styles.typeEffectivenessItemWrapper}>
                    {/* Background */}
                    <View
                        style={[
                            styles.typeEffectivenessItem,
                            {
                                backgroundColor: getColorByType(effect.type),
                            },
                        ]}
                    >
                        {/* Icon */}
                        <Image
                            style={styles.typeEffectivenessIcon}
                            source={getTypeIconByType(effect.type)}
                        />

                        {/* Type Text */}
                        <Animated.Text style={styles.typeEffectivenessItemText}>
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
    );
}

const styles = StyleSheet.create({
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
