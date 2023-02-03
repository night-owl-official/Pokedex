import { StyleSheet, Animated, View, Dimensions } from "react-native";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/elements";

const { height, width } = Dimensions.get("window");
let headerHeight = 0;

export default function PokemonDetails({ pokemonData }) {
    headerHeight = useHeaderHeight();

    return (
        <Animated.View style={styles.container}>
            <View style={styles.tabs}></View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height - (Constants.statusBarHeight + headerHeight),
        backgroundColor: "#fff",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingVertical: 16,
        paddingHorizontal: 0,
    },
    tabs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 0,
        marginHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#E7E7E8",
    },
});
