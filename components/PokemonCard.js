import { Animated, Text, Image, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export default function PokemonCard(props) {
    return (
        <Animated.View style={styles.container}>
            <RectButton style={styles.button}></RectButton>
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
    pokemonImage: {
        width: 72,
        height: 72,
    },
    pokedexNumber: {
        color: "#000",
        position: "absolute",
        right: 10,
        top: 10,
    },
});
