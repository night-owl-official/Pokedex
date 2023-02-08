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
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
        height: "1.70 m (5.58 ft)",
        weight: "90.50 kg (199.52 lbs)",
        gender: [
            { gender: "Male", rate: 87.5 },
            { gender: "Female", rate: 12.5 },
        ],
        eggGroups: ["Monster", "Dragon"],
        baseEggSteps: 5120,
        baseExp: 133,
        baseHappiness: 20,
        captureRate: 10,
        abilities: [
            {
                name: "Ability 1",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
                type: "Ability 1",
            },
            {
                name: "Hidden",
                description:
                    "Lorem ipsum dolor sit HIDDEN, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
                type: "Hidden",
            },
        ],
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
