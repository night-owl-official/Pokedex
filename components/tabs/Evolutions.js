import { View, StyleSheet, Animated, ScrollView } from "react-native";

import EvolutionSection from "../evolutions/EvolutionSection";

export default function Evolutions({ pokemonData }) {
    return (
        <>
            {/* Title */}
            <Animated.Text style={styles.titleText}>
                Evolution Chain
            </Animated.Text>

            {/* Check if there are any evolutions */}
            {pokemonData.evolutionChain.first ? (
                <ScrollView
                    style={styles.scrollableContainer}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={pokemonData.evolutionChain.first.length > 3}
                >
                    {/* First Evolution section (Could have more than one) */}
                    {pokemonData.evolutionChain.first.map((pokemon, index) => (
                        <EvolutionSection
                            key={index}
                            firstName={pokemonData.evolutionChain.base.name}
                            firstImageURL={
                                pokemonData.evolutionChain.base.image
                            }
                            evolveLevel={pokemon.minLevel}
                            secondName={pokemon.name}
                            secondImageURL={pokemon.image}
                        />
                    ))}

                    {/* Second Evolution section */}
                    {pokemonData.evolutionChain.second && (
                        <EvolutionSection
                            firstName={pokemonData.evolutionChain.first[0].name}
                            firstImageURL={
                                pokemonData.evolutionChain.first[0].image
                            }
                            evolveLevel={
                                pokemonData.evolutionChain.second.minLevel
                            }
                            secondName={pokemonData.evolutionChain.second.name}
                            secondImageURL={
                                pokemonData.evolutionChain.second.image
                            }
                        />
                    )}
                </ScrollView>
            ) : (
                <View style={styles.container}>
                    <Animated.Text style={styles.noEvolutionsText}>
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
    scrollableContainer: {
        marginTop: 32,
        height: "100%",
        overflow: "visible",
        zIndex: -1,
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
    },
    noEvolutionsText: {
        color: "#919191",
    },
});
