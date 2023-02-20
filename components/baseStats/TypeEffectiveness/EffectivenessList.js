import { View, Animated, Image, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";

import getTypeEffectiveness from "../../../networking/getTypeEffectiveness";
import Loading from "../../Loading";

import { getColorByType } from "../../../utils/pokemonTypeColors";
import { getTypeIconByType } from "../../../utils/pokemonIcons";

export default function TypeEffectiveness({ pokemonTypes }) {
    const [typeEffectiveness, setTypeEffectiveness] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTypeEffectiveness = async (pkmnTypes) => {
            try {
                const data = await getTypeEffectiveness(pkmnTypes);

                setTypeEffectiveness(data);
            } catch (err) {
                Alert.alert(
                    "Failed to get Type Effectiveness",
                    "An error has occurred while loading the type effectiveness list."
                );
            } finally {
                setLoading(false);
            }
        };

        loadTypeEffectiveness(pokemonTypes);
    }, []);

    if (loading) {
        return <Loading size={40} />;
    }

    return (
        <View style={styles.typeEffectivenessList}>
            {typeEffectiveness.map((effect, index) => (
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
                    <Animated.View
                        style={[
                            styles.typeTextWrapper,
                            {
                                backgroundColor:
                                    effect.effectiveness === 0
                                        ? "#747773"
                                        : effect.effectiveness < 0.5
                                        ? "#24711E"
                                        : effect.effectiveness > 2
                                        ? "#C3231D"
                                        : "transparent",
                            },
                        ]}
                    >
                        <Animated.Text
                            style={[
                                styles.typeEffectivenssText,
                                {
                                    color:
                                        effect.effectiveness < 1
                                            ? effect.effectiveness < 0.5
                                                ? "#fff"
                                                : "#75E366"
                                            : effect.effectiveness === 1
                                            ? "#000"
                                            : effect.effectiveness > 2
                                            ? "#fff"
                                            : "#F43E37",
                                },
                            ]}
                        >
                            {effect.effectiveness}x
                        </Animated.Text>
                    </Animated.View>
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
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        marginRight: 4,
    },
    typeEffectivenessIcon: {
        width: 16,
        height: 16,
        marginRight: 6,
    },
    typeEffectivenessItemText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    },
    typeEffectivenssText: {
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 18,
    },
    typeTextWrapper: {
        borderRadius: 4,
        paddingHorizontal: 1,
    },
});
