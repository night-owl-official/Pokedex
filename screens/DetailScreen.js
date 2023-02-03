import { StatusBar } from "expo-status-bar";
import { View, Animated, StyleSheet } from "react-native";

import PokemonSummary from "../components/PokemonSummary";

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            <View>
                <PokemonSummary />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F95D5E",
    },
    detailsContainer: {
        flex: 1,
    },
});
