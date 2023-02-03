import { StatusBar } from "expo-status-bar";
import { View, Animated, StyleSheet } from "react-native";
// import { Gesture, GestureDetector } from "react-native-gesture-handler";

import PokemonSummary from "../components/PokemonSummary";
import PokemonDetails from "../components/PokemonDetails";

export default function DetailScreen({ route }) {
    // const panGesture = Gesture.Pan();

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View>
                <PokemonSummary pokemonData={route.params.pokemonData} />

                <Animated.View style={styles.detailsContainer}>
                    <PokemonDetails pokemonData={route.params.pokemonData} />
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F95D5E",
    },
    detailsContainer: {
        flex: 1,
    },
});
