import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import {
    Gesture,
    GestureDetector,
    GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    Extrapolate,
    withSpring,
} from "react-native-reanimated";

import PokemonSummary from "../components/detailsScreen/PokemonSummary";
import PokemonDetails from "../components/detailsScreen/PokemonDetails";

import { getColorByType } from "../utils/pokemonTypeColors";

const POKEMON_SUMMARY_HEIGHT = 360;

export default function DetailScreen({ route }) {
    const pokemon = route.params.pokemonData;

    ///////////// Bottom Sheet Animation /////////////
    const translateY = useSharedValue(0);
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination) => {
        "worklet";
        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const panGesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
        })
        .onEnd(() => {
            if (translateY.value < -100) scrollTo(-POKEMON_SUMMARY_HEIGHT);
            else scrollTo(0);
        });

    const detailsContainerStyle = useAnimatedStyle(() => {
        const yTranslate = interpolate(
            translateY.value,
            [-POKEMON_SUMMARY_HEIGHT, 0, 200],
            [-POKEMON_SUMMARY_HEIGHT, 0, 50],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateY: yTranslate }],
        };
    });
    ////////////////////////////////////////////////////

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light" />

            {/* Background */}
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: getColorByType(pokemon.types[0]),
                    },
                ]}
            >
                {/* Screen Container */}
                <View>
                    <PokemonSummary
                        pokemonData={pokemon}
                        translateY={translateY}
                    />

                    <GestureDetector gesture={panGesture}>
                        {/* Details Section */}
                        <Animated.View
                            style={[
                                styles.detailsContainer,
                                detailsContainerStyle,
                            ]}
                        >
                            <PokemonDetails
                                pokemonData={pokemon}
                                translateY={translateY}
                                panGesture={panGesture}
                            />
                        </Animated.View>
                    </GestureDetector>
                </View>
            </View>
        </GestureHandlerRootView>
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
