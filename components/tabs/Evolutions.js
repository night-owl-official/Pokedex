import { View, StyleSheet, Animated, ScrollView, Alert } from "react-native";
import { useEffect, useState } from "react";

import getEvolutionChain from "../../networking/getEvolutionChain";

import EvolutionSection from "../evolutions/EvolutionSection";
import Loading from "../Loading";

export default function Evolutions({ pokemonData }) {
    const [evolutionChain, setEvolutionChain] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadEvolutionChain = async (pkmnID) => {
            try {
                const evolutionChainData = await getEvolutionChain(pkmnID);
                setEvolutionChain(evolutionChainData);
            } catch (err) {
                Alert.alert(
                    "Failed to see Evolution Chain",
                    "There was an error while loading the evolution chain data"
                );
            } finally {
                setLoading(false);
            }
        };

        loadEvolutionChain(pokemonData.id);
    }, []);

    if (loading) return <Loading size={40} />;

    return (
        <>
            {/* Title */}
            <Animated.Text style={styles.titleText}>
                Evolution Chain
            </Animated.Text>

            {/* Check if there are any evolutions */}
            {evolutionChain.first ? (
                <ScrollView
                    style={styles.scrollableContainer}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={
                        evolutionChain.first.length +
                            evolutionChain.second.length >
                        3
                    }
                >
                    {/* First Evolution section (Could have none or more) */}
                    {evolutionChain.first.map((first, index) => (
                        <EvolutionSection
                            key={index}
                            firstName={evolutionChain.base.name}
                            firstImageURL={evolutionChain.base.image}
                            evolveLevel={first.minLevel}
                            secondName={first.name}
                            secondImageURL={first.image}
                        />
                    ))}

                    {/* Second Evolution section (Could have none or more) */}
                    {evolutionChain.second &&
                        evolutionChain.second.map((second, index) => (
                            <EvolutionSection
                                key={index}
                                firstName={evolutionChain.first[0].name}
                                firstImageURL={evolutionChain.first[0].image}
                                evolveLevel={second.minLevel}
                                secondName={second.name}
                                secondImageURL={second.image}
                            />
                        ))}
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
