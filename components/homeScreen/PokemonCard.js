import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import CachedImage from "react-native-expo-cached-image";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from "react-native-reanimated";

import Pokeball from "../Pokeball";
import PokemonTypes from "../PokemonTypes";
import { memo, useEffect } from "react";

export default function PokemonCard({
    pokemonName,
    pokemonDexNumber,
    pokemonTypes,
    pokemonImage,
    bgColor,
    onPress,
}) {
    const MemoizedPokeball = memo(Pokeball);

    // Animate opacity on load //
    const opacity = useSharedValue(0);
    const opacityAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
        };
    }, []);
    ////////////////////////////

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 600 });
    }, []);

    return (
        <Animated.View style={[styles.container, opacityAnimatedStyle]}>
            {/* Tappable Button */}
            <RectButton
                style={[styles.button, { backgroundColor: bgColor }]}
                onPress={onPress}
            >
                {/* Pokemon Name */}
                <Animated.Text style={styles.pokemonName}>
                    {pokemonName}
                </Animated.Text>

                {/* Pokemon Dex Number */}
                <Animated.Text style={styles.pokedexNumber}>
                    #{pokemonDexNumber.toString().padStart(4, "0")}
                </Animated.Text>

                {/* Pokemon Image */}
                <CachedImage
                    style={styles.pokemonImage}
                    source={{ uri: pokemonImage }}
                />

                <MemoizedPokeball
                    wrapperStyle={styles.pokeballImageWrapper}
                    imageStyle={styles.pokeballImage}
                />

                <PokemonTypes
                    types={pokemonTypes}
                    styles={[
                        styles.pokemonTypesWrapper,
                        styles.pokemonType,
                        styles.pokemonTypeText,
                    ]}
                />
            </RectButton>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        height: 110,
        margin: 10,
        padding: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,

        elevation: 5,
    },
    pokemonName: {
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "flex-start",
    },
    pokemonImage: {
        position: "absolute",
        bottom: 4,
        right: 4,
        width: 72,
        height: 72,
    },
    pokedexNumber: {
        color: "#ffffff90",
        fontSize: 10,
        position: "absolute",
        right: 10,
        top: 10,
    },
    pokeballImageWrapper: {
        zIndex: -1,
        position: "absolute",
        right: -8,
        bottom: -8,
    },
    pokeballImage: {
        width: 80,
        height: 80,
        tintColor: "#ffffff20",
    },
    pokemonTypesWrapper: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    pokemonType: {
        backgroundColor: "#ffffff30",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 8,
        marginTop: 4,
    },
    pokemonTypeText: {
        color: "#fff",
        fontSize: 8,
        lineHeight: 10,
        fontWeight: "bold",
    },
});
