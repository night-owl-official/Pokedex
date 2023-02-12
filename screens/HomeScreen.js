import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList } from "react-native";

import PokemonCard from "../components/homeScreen/PokemonCard";

import { getColorByType } from "../utils/pokemonTypeColors";

const TempData = [
    {
        id: 1,
        name: "Pokemon",
        dexNumber: 6,
        types: ["Fire", "Flying"],
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
        evYield: [{ stat: "Sp. Atk", value: 3 }],
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
        baseStats: [
            { name: "HP", value: 45 },
            { name: "Attack", value: 50 },
            { name: "Defense", value: 55 },
            { name: "Sp. Atk", value: 70 },
            { name: "Sp. Def", value: 60 },
            { name: "Speed", value: 66 },
        ],
        typeEffectiveness: [
            { type: "normal", effectiveness: 1 },
            { type: "fighting", effectiveness: 0.5 },
            { type: "flying", effectiveness: 1 },
            { type: "poison", effectiveness: 1 },
            { type: "ground", effectiveness: 0 },
            { type: "rock", effectiveness: 4 },
            { type: "bug", effectiveness: 0.25 },
            { type: "ghost", effectiveness: 1 },
            { type: "steel", effectiveness: 0.5 },
            { type: "fire", effectiveness: 0.5 },
            { type: "water", effectiveness: 2 },
            { type: "grass", effectiveness: 0.25 },
            { type: "electric", effectiveness: 2 },
            { type: "psychic", effectiveness: 1 },
            { type: "ice", effectiveness: 1 },
            { type: "dragon", effectiveness: 1 },
            { type: "dark", effectiveness: 1 },
            { type: "fairy", effectiveness: 0.5 },
        ],
        evolutionChain: {
            base: {
                name: "Charmander",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            },
            first: [
                {
                    name: "Charmeleon",
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                    minLevel: 16,
                },
                {
                    name: "Charmeleon",
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                    minLevel: 16,
                },
                {
                    name: "Charmeleon",
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                    minLevel: 16,
                },
                {
                    name: "Charmeleon",
                    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
                    minLevel: 16,
                },
            ],
            second: {
                name: "Charizard",
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
                minLevel: 36,
            },
        },
        moves: [
            {
                id: 1,
                name: "Move 1",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
                learnCondition: "Level 5",
                power: 50,
                accuracy: 100,
                effect: 10,
                category: "physicalAttack",
                type: "fire",
            },
            {
                id: 2,
                name: "Move 2",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
                learnCondition: "Level 16",
                power: 70,
                accuracy: 90,
                effect: 0,
                category: "specialAttack",
                type: "dark",
            },
            {
                id: 3,
                name: "Move 3",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam tellus, ullamcorper mollis leo nec, scelerisque tempor massa.",
                learnCondition: "TM",
                power: 0,
                accuracy: 80,
                effect: 0,
                category: "statusAttack",
                type: "ghost",
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
                renderItem={({ item }) => {
                    const bgColor = getColorByType(item.types[0]);

                    return (
                        <PokemonCard
                            pokemonName={item.name}
                            pokemonDexNumber={item.dexNumber}
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
