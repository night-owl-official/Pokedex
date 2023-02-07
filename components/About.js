import { StyleSheet, View, Animated } from "react-native";

export default function About({ pokemonData }) {
    return (
        <>
            {/* Description */}
            <View style={styles.section}>
                <Animated.Text>{pokemonData.description}</Animated.Text>
            </View>

            {/* Size */}
            <View style={styles.section}>
                {/* Size container */}
                <View style={styles.shadowContainer}>
                    {/* Height display */}
                    <View>
                        <Animated.Text style={styles.sizeHeaderText}>
                            Height
                        </Animated.Text>

                        <View style={styles.sectionText}>
                            <Animated.Text>{pokemonData.height}</Animated.Text>
                        </View>
                    </View>

                    {/* Weight display */}
                    <View>
                        <Animated.Text style={styles.sizeHeaderText}>
                            Weight
                        </Animated.Text>

                        <View style={styles.sectionText}>
                            <Animated.Text>{pokemonData.weight}</Animated.Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}

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
    sizeHeaderText: {
        color: "#919191",
        fontWeight: "bold",
        marginBottom: 8,
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
