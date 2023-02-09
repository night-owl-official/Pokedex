import { StyleSheet, View, FlatList } from "react-native";

import MoveDisplay from "../moves/MoveDisplay";

export default function Moves({ pokemonData }) {
    return (
        <View style={styles.movesContainer}>
            {pokemonData.moves.map((move, index) => (
                <MoveDisplay key={index} move={move} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    movesContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
});
