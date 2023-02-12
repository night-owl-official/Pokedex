import { View, StyleSheet } from "react-native";

import PokemonView from "./PokemonView";
import MinLevel from "./MinLevel";

export default function EvolutionSection({
    firstName,
    firstImageURL,
    evolveLevel,
    secondName,
    secondImageURL,
}) {
    return (
        <View style={styles.container}>
            <PokemonView name={firstName} imageURL={firstImageURL} />

            <MinLevel level={evolveLevel} />

            <PokemonView name={secondName} imageURL={secondImageURL} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 32,
        paddingBottom: 32,
        borderStyle: "solid",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: "#E7E7E8",
    },
});
