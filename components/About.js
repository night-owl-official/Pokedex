import { StyleSheet, View } from "react-native";

export default function About({ pokemonData }) {}

const styles = StyleSheet.create({
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        marginBottom: 8,
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 22,
    },
    sectionContent: {
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    sectionSubtitle: {
        width: 100,
        color: "#919191",
    },
    sectionText: {
        fontWeight: "bold",
    },
    shadowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 24,
        borderRadius: 16,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,

        elevation: 5,
    },
});
