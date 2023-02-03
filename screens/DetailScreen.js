import { StatusBar } from "expo-status-bar";
import { View, Animated, StyleSheet } from "react-native";

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View></View>
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
