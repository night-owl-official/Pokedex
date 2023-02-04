import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";

import PokemonCard from "../components/PokemonCard";

const TempData = [
    {
        id: 1,
        name: "Pokemon",
        dexNumber: 6,
        types: ["Type 1", "Type 2"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        genera: "Genera",
    },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList
                style={styles.pokemonList}
                data={TempData}
                keyExtractor={(data) => data.dexNumber}
                renderItem={({ item }) => (
                    <PokemonCard
                        pokemonName={item.name}
                        pokemonDexNumber={item.dexNumber}
                        pokemonImage={item.image}
                        pokemonTypes={item.types}
                        bgColor={"#F95D5E"}
                        onPress={() =>
                            navigation.navigate("Details", {
                                pokemonData: item,
                            })
                        }
                    />
                )}
                numColumns={2}
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
