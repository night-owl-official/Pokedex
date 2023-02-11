import { View, StyleSheet, Image, Animated } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import Pokeball from "../Pokeball";

export default function Evolutions({ pokemonData }) {
    return (
        <>
            {/* Title */}
            <Animated.Text style={styles.titleText}>
                Evolution Chain
            </Animated.Text>

            {/* Evolution Display */}
            {pokemonData.evolutionChain.first ? (
                <View style={styles.container}>
                    {/* First Evolution section */}
                    {pokemonData.evolutionChain.first && (
                        <View style={styles.sectionContainer}>
                            {/* Base Pokemon */}
                            <View style={styles.pokemonContainer}>
                                {/* Pokeball Image */}
                                <Pokeball
                                    wrapperStyle={styles.pokeballBackground}
                                    imageStyle={styles.pokeballImage}
                                />

                                {/* Pokemon Image */}
                                <Image
                                    style={styles.pokemonImage}
                                    source={{
                                        uri: pokemonData.evolutionChain.base
                                            .image,
                                    }}
                                />

                                {/* Pokemon Name */}
                                <Animated.Text>
                                    {pokemonData.evolutionChain.base.name}
                                </Animated.Text>
                            </View>

                            {/* Min Level */}
                            <View style={styles.minLevelContainer}>
                                <Icon
                                    name={"arrow-right"}
                                    size={20}
                                    color={"#919191"}
                                />

                                <Animated.Text style={styles.minLevelText}>
                                    Level{" "}
                                    {
                                        pokemonData.evolutionChain.first[0]
                                            .minLevel
                                    }
                                </Animated.Text>
                            </View>

                            {/* First Pokemon */}
                            <View style={styles.pokemonContainer}>
                                {/* Pokeball Image */}
                                <Pokeball
                                    wrapperStyle={styles.pokeballBackground}
                                    imageStyle={styles.pokeballImage}
                                />

                                {/* Pokemon Image */}
                                <Image
                                    style={styles.pokemonImage}
                                    source={{
                                        uri: pokemonData.evolutionChain.first[0]
                                            .image,
                                    }}
                                />

                                {/* Pokemon Name */}
                                <Animated.Text>
                                    {pokemonData.evolutionChain.first[0].name}
                                </Animated.Text>
                            </View>
                        </View>
                    )}

                    {/* Second Evolution section */}
                    {pokemonData.evolutionChain.second && (
                        <View style={styles.sectionContainer}>
                            {/* First Pokemon */}
                            <View style={styles.pokemonContainer}>
                                {/* Pokeball Image */}
                                <Pokeball
                                    wrapperStyle={styles.pokeballBackground}
                                    imageStyle={styles.pokeballImage}
                                />

                                {/* Pokemon Image */}
                                <Image
                                    style={styles.pokemonImage}
                                    source={{
                                        uri: pokemonData.evolutionChain.first[0]
                                            .image,
                                    }}
                                />

                                {/* Pokemon Name */}
                                <Animated.Text>
                                    {pokemonData.evolutionChain.first[0].name}
                                </Animated.Text>
                            </View>

                            {/* Min Level */}
                            <View style={styles.minLevelContainer}>
                                <Icon
                                    name={"arrow-right"}
                                    size={20}
                                    color={"#919191"}
                                />

                                <Animated.Text style={styles.minLevelText}>
                                    Level{" "}
                                    {pokemonData.evolutionChain.second.minLevel}
                                </Animated.Text>
                            </View>

                            {/* Second Pokemon */}
                            <View style={styles.pokemonContainer}>
                                {/* Pokeball Image */}
                                <Pokeball
                                    wrapperStyle={styles.pokeballBackground}
                                    imageStyle={styles.pokeballImage}
                                />

                                {/* Pokemon Image */}
                                <Image
                                    style={styles.pokemonImage}
                                    source={{
                                        uri: pokemonData.evolutionChain.second
                                            .image,
                                    }}
                                />

                                {/* Pokemon Name */}
                                <Animated.Text>
                                    {pokemonData.evolutionChain.second.name}
                                </Animated.Text>
                            </View>
                        </View>
                    )}
                </View>
            ) : (
                <View style={styles.container}>
                    <Animated.Text style={{ color: "#919191" }}>
                        No evolutions.
                    </Animated.Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
    },
    sectionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
        paddingBottom: 32,
        borderStyle: "solid",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#E7E7E8",
    },
    pokemonContainer: {
        alignItems: "center",
    },
    pokeballImage: {
        width: 120,
        height: 120,
        tintColor: "#F4F5F4",
    },
    pokeballBackground: {
        zIndex: -1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
    },
    pokemonImage: {
        marginBottom: 16,
        width: 112,
        height: 112,
    },
    minLevelContainer: {
        alignItems: "center",
    },
    minLevelText: {
        fontWeight: "bold",
        marginTop: 8,
    },
});
