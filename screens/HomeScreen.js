import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import { useEffect, useState, useCallback } from "react";

import PokemonCard from "../components/homeScreen/PokemonCard";
import Loading from "../components/Loading";

import { getColorByType } from "../utils/pokemonTypeColors";
import getPokemon from "../networking/getPokemon";

const API_OFFSET = 20;

export default function HomeScreen({ navigation }) {
    const [pokemonList, setPokemonList] = useState([]);
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

    const loadPokemonList = useCallback(async () => {
        try {
            setLoading({ ...loading, further: true });

            const pokemon = await getPokemon(offset);

            setPokemonList([...pokemonList, ...pokemon]);

            setOffset(API_OFFSET * offsetMultiplier);
            setOffsetMultiplier((offsetMultiplier) => offsetMultiplier + 1);
        } catch (err) {
            Alert.alert(
                "Failed to Catch 'em all",
                "An error has occurred while loading the Pokemon."
            );
        } finally {
            setLoading({ initial: false, further: false });
        }
    }, [pokemonList, loading.initial, loading.further, offset]);

    useEffect(() => {
        loadPokemonList();
    }, []);

    const ListFooterLoading = () => {
        if (loading.further) return <Loading size={40} />;

        return <></>;
    };

    if (loading.initial)
        return (
            <View style={styles.container}>
                <Loading size={80} />
            </View>
        );

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList
                style={styles.pokemonList}
                data={pokemonList}
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => {
                    const bgColor = getColorByType(item.types[0]);

                    return (
                        <PokemonCard
                            pokemonName={item.name}
                            pokemonDexNumber={item.id}
                            pokemonImage={item.image}
                            pokemonTypes={item.types}
                            bgColor={bgColor}
                            onPress={() =>
                                navigation.navigate("Details", {
                                    pokemonData: item,
                                    bgColor: bgColor,
                                })
                            }
                        />
                    );
                }}
                numColumns={2}
                getItemLayout={(_, index) => ({
                    length: 110,
                    offset: 110 * index,
                    index,
                })}
                onMomentumScrollBegin={() => {
                    setOnEndReachedCalledDuringMomentum(false);
                }}
                onEndReachedThreshold={0.01}
                onEndReached={() => {
                    if (!onEndReachedCalledDuringMomentum && !loading.further) {
                        loadPokemonList();
                        setOnEndReachedCalledDuringMomentum(true);
                    }
                }}
                ListFooterComponent={ListFooterLoading}
                ListFooterComponentStyle={{ marginVertical: 8 }}
                removeClippedSubviews={true}
                initialNumToRender={5}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    pokemonList: {
        flex: 1,
        marginTop: 8,
    },
});
