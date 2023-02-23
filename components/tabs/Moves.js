import { StyleSheet, FlatList, Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

import getMoves from "../../networking/getMoves";

import MoveDisplay from "../moves/MoveDisplay";
import Loading from "../Loading";

const MOVES_OFFSET = 10;

export default function Moves({ pokemonData }) {
    /// States ///
    const [moves, setMoves] = useState([]);
    const [loading, setLoading] = useState({
        initial: true,
        further: false,
    });
    const [offset, setOffset] = useState(0);
    const [offsetMultiplier, setOffsetMultiplier] = useState(1);
    const [
        onEndReachedCalledDuringMomentum,
        setOnEndReachedCalledDuringMomentum,
    ] = useState(false);
    const [latestMovesVersion, setLatestMovesVersion] = useState("");
    ////////////////

    const loadMoves = useCallback(async () => {
        try {
            setLoading({ ...loading, further: true });

            const movesData = await getMoves(
                pokemonData.id,
                offset,
                latestMovesVersion
            );
            setMoves([...moves, ...movesData.moves]);
            setLatestMovesVersion(movesData.version);
            setOffset(offsetMultiplier * MOVES_OFFSET);
            setOffsetMultiplier((offsetMultiplier) => offsetMultiplier + 1);
        } catch (error) {
            Alert.alert(
                "Failed to learn moves",
                "There was an error while retrieving the move data"
            );
        } finally {
            setLoading({ initial: false, further: false });
        }
    }, [moves, latestMovesVersion, offset, loading.initial, loading.further]);

    useEffect(() => {
        loadMoves();
    }, []);

    // Footer for the list of moves while loading
    const ListFooterLoading = () => {
        if (loading.further) return <Loading size={40} />;

        return <></>;
    };

    if (loading.initial) return <Loading size={40} />;

    return (
        <FlatList
            style={styles.moveList}
            contentContainerStyle={styles.listContent}
            data={moves}
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => <MoveDisplay move={item} />}
            showsVerticalScrollIndicator={false}
            initialNumToRender={5}
            ListFooterComponent={ListFooterLoading}
            ListFooterComponentStyle={{ marginVertical: 8 }}
            onMomentumScrollBegin={() => {
                setOnEndReachedCalledDuringMomentum(false);
            }}
            onEndReachedThreshold={0.01}
            onEndReached={() => {
                if (!onEndReachedCalledDuringMomentum && !loading.further) {
                    loadMoves();
                    setOnEndReachedCalledDuringMomentum(true);
                }
            }}
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
