import { Animated, View, Image, StyleSheet } from "react-native";

export default function PokemonSummary() {
    return (
        <>
            <Animated.View style={styles.pokeballImageWrapper}>
                <Image
                    style={styles.pokeballImage}
                    source={require("../assets/pokeball.png")}
                />
            </Animated.View>

            <Animated.View style={styles.pokemonSummary}>
                <View style={styles.pokemonSummaryHeader}>
                    <View style={styles.pokemonSummaryRow}>
                        <Animated.Text style={styles.pokemonName}>
                            Pokemon 1
                        </Animated.Text>

                        <Animated.View>
                            <Animated.Text style={styles.pokemonDexNumber}>
                                #6
                            </Animated.Text>
                        </Animated.View>
                    </View>
                </View>
            </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({
    pokeballImageWrapper: {
        zIndex: -1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        alignSelf: "center",
    },
    pokeballImage: {
        width: 250,
        height: 250,
        tintColor: "#ffffff20",
    },
    pokemonSummary: {
        height: 360,
    },
    pokemonSummaryHeader: {
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 24,
    },
    pokemonSummaryRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pokemonName: {
        alignSelf: "flex-start",
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        lineHeight: 44,
    },
    pokemonDexNumber: {
        color: "#fff",
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "bold",
    },
});
