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

import PokemonSummary from "../components/PokemonSummary";
import PokemonDetails from "../components/PokemonDetails";

const POKEMON_SUMMARY_HEIGHT = 360;

function GetPanGesture(transY) {
    const context = useSharedValue({ y: 0 });

    const scrollTo = useCallback((destination) => {
        "worklet";
        transY.value = withSpring(destination, { damping: 50 });
    }, []);

    return Gesture.Pan()
        .onStart(() => {
            context.value = { y: transY.value };
        })
        .onUpdate((event) => {
            transY.value = event.translationY + context.value.y;
        })
        .onEnd(() => {
            if (transY.value < -100) scrollTo(-POKEMON_SUMMARY_HEIGHT);
            else scrollTo(0);
        });
}

function GetDetailsContainerAnimatedStyle(transY) {
    return useAnimatedStyle(() => {
        const yTranslate = interpolate(
            transY.value,
            [-POKEMON_SUMMARY_HEIGHT, 0, 200],
            [-POKEMON_SUMMARY_HEIGHT, 0, 50],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateY: yTranslate }],
        };
    });
}

export default function DetailScreen({ route }) {
    const translateY = useSharedValue(0);

    const panGesture = GetPanGesture(translateY);
    const detailsContainerStyle = GetDetailsContainerAnimatedStyle(translateY);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <StatusBar style="light" />

                <View>
                    <PokemonSummary pokemonData={route.params.pokemonData} />

                    <GestureDetector gesture={panGesture}>
                        <Animated.View
                            style={[
                                styles.detailsContainer,
                                detailsContainerStyle,
                            ]}
                        >
                            <PokemonDetails
                                pokemonData={route.params.pokemonData}
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
