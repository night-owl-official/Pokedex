import { View, StyleSheet, Animated } from "react-native";

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
                <View style={styles.container}>
                    {/* First Evolution section */}
                    {pokemonData.evolutionChain.first && (
                        <EvolutionSection
                            firstName={pokemonData.evolutionChain.base.name}
                            firstImageURL={
                                pokemonData.evolutionChain.base.image
                            }
                            evolveLevel={
                                pokemonData.evolutionChain.first[0].minLevel
                            }
                            secondName={
                                pokemonData.evolutionChain.first[0].name
                            }
                            secondImageURL={
                                pokemonData.evolutionChain.first[0].image
                            }
                        />
                    )}

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
                </View>
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
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
    },
    noEvolutionsText: {
        color: "#919191",
    },
});
