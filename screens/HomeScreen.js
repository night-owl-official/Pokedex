import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";

import PokemonCard from "../components/PokemonCard";

const TempData = [
    { id: 1, text: "Pokemon 1" },
    { id: 2, text: "Pokemon 2" },
    { id: 3, text: "Pokemon 3" },
    { id: 4, text: "Pokemon 4" },
    { id: 5, text: "Pokemon 1" },
    { id: 6, text: "Pokemon 2" },
    { id: 7, text: "Pokemon 3" },
    { id: 8, text: "Pokemon 4" },
    { id: 9, text: "Pokemon 1" },
    { id: 10, text: "Pokemon 2" },
    { id: 11, text: "Pokemon 3" },
    { id: 12, text: "Pokemon 4" },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList
                style={styles.pokemonList}
                data={TempData}
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => (
                    <PokemonCard
                        pokemonName={item.text}
                        pokemonDexNumber={item.id}
                        pokemonImage={
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                        }
                        pokemonTypes={["Type 1", "Type 2"]}
                        bgColor={"#F95D5E"}
                        onPress={() => navigation.navigate("Details")}
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
