import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    interpolate,
    Extrapolate,
    Easing,
} from "react-native-reanimated";
import Pokeball from "../Pokeball";

const POKEMON_SUMMARY_HEIGHT = 360;

export default function PokemonSummary({ pokemonData, translateY }) {
    const dexNumberTranslateX = useSharedValue(100);
    const generaTranslateX = useSharedValue(200);

    useEffect(() => {
        dexNumberTranslateX.value = withTiming(0, { duration: 300 });
        generaTranslateX.value = withTiming(0, {
            duration: 350,
            easing: Easing.inOut(Easing.quad),
        });
    }, [dexNumberTranslateX, generaTranslateX]);

    ///////////// Dex Number View Animation /////////////
    const dexNumberAnimatedStyle = useAnimatedStyle(() => {
        const xTranslate = interpolate(
            dexNumberTranslateX.value,
            [0, 100],
            [0, 100],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateX: xTranslate }],
        };
    });
    ////////////////////////////////////////////////////

    ///////////// Genera View Animation /////////////
    const generaAnimatedStyle = useAnimatedStyle(() => {
        const xTranslate = interpolate(
            generaTranslateX.value,
            [0, 200],
            [0, 200],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateX: xTranslate }],
        };
    });
    ////////////////////////////////////////////////////

    ///////////// Summary View Animation /////////////
    const animatedSummaryStyle = useAnimatedStyle(() => {
        const zIndex = interpolate(
            translateY.value,
            [-POKEMON_SUMMARY_HEIGHT, 0],
            [0, 1],
            Extrapolate.CLAMP
        );
        const opacity = interpolate(
            translateY.value,
            [-200, 0],
            [0, 1],
            Extrapolate.CLAMP
        );

        return {
            zIndex: zIndex,
            opacity: opacity,
        };
    });
    ////////////////////////////////////////////////////

    ///////////// Image Wrapper Animation /////////////
    const animatedImageWrapperStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateY.value,
            [-100, 0],
            [0, 1],
            Extrapolate.CLAMP
        );

        const yTranslate = interpolate(
            translateY.value,
            [-100, 0, 200],
            [-20, 0, 25],
            Extrapolate.CLAMP
        );

        const scale = interpolate(
            translateY.value,
            [-100, 0, 200],
            [0.9, 1, 1.1],
            Extrapolate.CLAMP
        );

        return {
            opacity: opacity,
            transform: [{ translateY: yTranslate }, { scale: scale }],
        };
    });
    ////////////////////////////////////////////////////

    return (
        <>
            <Pokeball
                wrapperStyle={styles.pokeballImageWrapper}
                imageStyle={styles.pokeballImage}
                rotating={true}
            />

            <Animated.View
                style={[styles.pokemonSummary, animatedSummaryStyle]}
            >
                <View style={styles.pokemonSummaryHeader}>
                    <View style={styles.pokemonSummaryRow}>
                        <Animated.Text style={styles.pokemonName}>
                            {pokemonData.name}
                        </Animated.Text>

                        <Animated.View style={dexNumberAnimatedStyle}>
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

                        <Animated.View style={generaAnimatedStyle}>
                            <Animated.Text style={styles.pokemonGeneraText}>
                                {pokemonData.genera}
                            </Animated.Text>
                        </Animated.View>
                    </View>
                </View>

                <Animated.View
                    style={[
                        styles.pokemonImageWrapper,
                        animatedImageWrapperStyle,
                    ]}
                >
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
