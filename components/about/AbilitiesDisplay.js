import { View, Animated, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useCallback } from "react";

export default function AbilitiesDisplay({ style, abilities }) {
    const [ability, setAbility] = useState({
        ...abilities[0],
    });

    const getPokemonAbilityAtIndex = useCallback(
        (index) => {
            setAbility({
                ...abilities[index],
            });
        },
        [ability]
    );

    return (
        <View style={style}>
            {/* Title */}
            <Animated.Text style={styles.sectionTitle}>Abilities</Animated.Text>

            {/* Abilities container */}
            <View style={styles.shadowContainer}>
                {/* Ability display */}
                <View>
                    <Animated.Text style={styles.shadowContainerHeaderText}>
                        {ability.name}
                    </Animated.Text>

                    <View style={styles.sectionText}>
                        <Animated.Text>{ability.description}</Animated.Text>
                    </View>

                    {/* Ability Buttons */}
                    <View
                        style={[
                            styles.abilityButtonsContainer,
                            abilities.length < 3
                                ? { justifyContent: "space-around" }
                                : { justifyContent: "space-between" },
                        ]}
                    >
                        {abilities.map((ablty, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.abilityButton,
                                    ability.type === ablty.type
                                        ? { backgroundColor: "#0055D4" }
                                        : { backgroundColor: "#0055D490" },
                                ]}
                                onPress={() => getPokemonAbilityAtIndex(index)}
                            >
                                <Animated.Text style={styles.abilityButtonText}>
                                    {ablty.type}
                                </Animated.Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
    },
    shadowContainerHeaderText: {
        color: "#919191",
        fontWeight: "bold",
        marginBottom: 8,
    },
    sectionText: {
        fontWeight: "bold",
    },
    shadowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 24,
        borderRadius: 16,
        backgroundColor: "#fff",
        shadowColor: "#000",
        marginTop: 16,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,

        elevation: 5,
    },
    abilityButtonsContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    abilityButton: {
        justifyContent: "center",
        backgroundColor: "#0055D4",
        borderRadius: 24,
        padding: 10,
    },
    abilityButtonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 12,
        color: "#fff",
    },
});
