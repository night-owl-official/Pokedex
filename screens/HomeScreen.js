import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, FlatList } from "react-native";

const TempData = [
    { id: 1, text: "Pokemon 1" },
    { id: 2, text: "Pokemon 2" },
    { id: 3, text: "Pokemon 3" },
    { id: 4, text: "Pokemon 4" },
];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <FlatList
                style={styles.pokemonList}
                data={TempData}
                keyExtractor={(data) => data.id}
                renderItem={({ item }) => (
                    <Text
                        style={{
                            backgroundColor: "#f00",
                            padding: 24,
                            marginHorizontal: 16,
                            marginVertical: 8,
                            textAlign: "center",
                        }}
                    >
                        {item.text}
                    </Text>
                )}
                numColumns={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pokemonList: {
        flex: 1,
        marginTop: 8,
    },
});
