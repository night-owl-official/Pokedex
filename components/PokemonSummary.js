import { Animated, View, Image, StyleSheet } from "react-native";

export default function PokemonSummary({ pokemonData }) {
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
                            {pokemonData.name}
                        </Animated.Text>

                        <Animated.View>
                            <Animated.Text style={styles.pokemonDexNumber}>
                                #{pokemonData.dexNumber}
                            </Animated.Text>
                        </Animated.View>
                    </View>

                    <View style={[styles.pokemonSummaryRow, { marginTop: 16 }]}>
                        <View style={{ flexDirection: "row" }}>
                            {pokemonData.types.map((type, index) => (
                                <View
                                    key={index}
                                    style={styles.pokemonTypesWrapper}
                                >
                                    <View style={styles.pokemonType}>
                                        <Animated.Text
                                            style={styles.pokemonTypeText}
                                        >
                                            {type}
                                        </Animated.Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <Animated.View>
                            <Animated.Text style={styles.pokemonGeneraText}>
                                {pokemonData.genera}
                            </Animated.Text>
                        </Animated.View>
                    </View>
                </View>

                <Animated.View style={styles.pokemonImageWrapper}>
                    <Image
                        style={styles.pokemonImage}
                        source={{ uri: pokemonData.image }}
                    />
                </Animated.View>
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
    pokemonTypesWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    pokemonType: {
        backgroundColor: "#ffffff30",
        paddingVertical: 6,
        paddingHorizontal: 28,
        borderRadius: 16,
        marginRight: 8,
    },
    pokemonTypeText: {
        color: "#fff",
        fontSize: 12,
        lineHeight: 18,
    },
    pokemonGeneraText: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 18,
    },
    pokemonImageWrapper: {
        marginTop: 24,
        alignItems: "center",
    },
    pokemonImage: {
        width: 256,
        height: 256,
    },
});
