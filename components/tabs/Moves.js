import { StyleSheet, FlatList } from "react-native";

import MoveDisplay from "../moves/MoveDisplay";

export default function Moves({ pokemonData }) {
    return (
        <FlatList
            style={styles.moveList}
            contentContainerStyle={{ alignItems: "center" }}
            data={pokemonData.moves}
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => <MoveDisplay move={item} />}
            showsVerticalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    moveList: {
        height: "100%",
        overflow: "visible",
    },
});
