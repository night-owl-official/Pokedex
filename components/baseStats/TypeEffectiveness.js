import { View, StyleSheet } from "react-native";

import Header from "./TypeEffectiveness/Header";
import EffectivenessList from "./TypeEffectiveness/EffectivenessList";

export default function TypeEffectiveness({ pokemonName, pokemonTypes }) {
    return (
        <View style={styles.typeEffectivenessContainer}>
            <Header name={pokemonName} />
            <EffectivenessList pokemonTypes={pokemonTypes} />
        </View>
    );
}

const styles = StyleSheet.create({
    typeEffectivenessContainer: {
        flex: 1,
        marginTop: 24,
    },
});
