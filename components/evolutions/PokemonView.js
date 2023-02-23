import { View, Animated, Image, StyleSheet } from "react-native";

import CachedImage from "react-native-expo-cached-image";

import Pokeball from "../Pokeball";

export default function PokemonView({ name, imageURL }) {
    return (
        <View style={styles.container}>
            {/* Pokeball Image */}
            <Pokeball
                wrapperStyle={styles.pokeballBackground}
                imageStyle={styles.pokeballImage}
            />

            {/* Pokemon Image */}
            <CachedImage
                style={styles.pokemonImage}
                source={{
                    uri: imageURL,
                }}
            />

            {/* Pokemon Name */}
            <Animated.Text>{name}</Animated.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
});
