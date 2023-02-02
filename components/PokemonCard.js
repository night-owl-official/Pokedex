import { Animated, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function PokemonCard({
    pokemonName,
    pokemonDexNumber,
    pokemonTypes,
    pokemonImage,
    bgColor,
}) {
    return (
        <Animated.View style={styles.container}>
            <RectButton style={styles.button}>
                <Text style={styles.pokemonName}>{pokemonName}</Text>
                <Text style={styles.pokedexNumber}>#{pokemonDexNumber}</Text>
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: pokemonImage }}
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
        backgroundColor: "#fff",
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
        color: "#000",
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
        color: "#000",
        fontSize: 10,
        position: "absolute",
        right: 10,
        top: 10,
    },
});
