import { View, Animated } from "react-native";

export default function PokemonTypes({ types, styles }) {
    return (
        <>
            {types.map((type, index) => (
                <View key={index} style={styles[0]}>
                    <View style={styles[1]}>
                        <Animated.Text style={styles[2]}>{type}</Animated.Text>
                    </View>
                </View>
            ))}
        </>
    );
}
