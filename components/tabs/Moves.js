import { StyleSheet, FlatList, Alert } from "react-native";
import { useEffect, useState } from "react";

import getMoves from "../../networking/getMoves";

import MoveDisplay from "../moves/MoveDisplay";
import Loading from "../Loading";

export default function Moves({ pokemonData }) {
    const [moves, setMoves] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMoves = async (pokemonID) => {
            try {
                const movesData = await getMoves(pokemonID);
                setMoves(movesData);
            } catch (error) {
                Alert.alert(
                    "Failed to learn moves",
                    "There was an error while retrieving the move data"
                );
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        loadMoves(pokemonData.id);
    }, []);

    if (loading) return <Loading size={40} />;

    return (
        <FlatList
            style={styles.moveList}
            contentContainerStyle={styles.listContent}
            data={moves}
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => <MoveDisplay move={item} />}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            initialNumToRender={5}
        />
    );
}

const styles = StyleSheet.create({
    moveList: {
        height: "100%",
        overflow: "visible",
    },
    listContent: {
        alignItems: "center",
    },
});
