import { View, Animated, StyleSheet } from "react-native";

export default function Size({ style, height, weight }) {
    return (
        <View style={style}>
            {/* Size container */}
            <View style={styles.shadowContainer}>
                {/* Height display */}
                <View>
                    <Animated.Text style={styles.shadowContainerHeaderText}>
                        Height
                    </Animated.Text>

                    <View style={styles.sectionText}>
                        <Animated.Text>{height}</Animated.Text>
                    </View>
                </View>

                {/* Weight display */}
                <View>
                    <Animated.Text style={styles.shadowContainerHeaderText}>
                        Weight
                    </Animated.Text>

                    <View style={styles.sectionText}>
                        <Animated.Text>{weight}</Animated.Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    shadowContainerHeaderText: {
        color: "#919191",
        fontWeight: "bold",
        marginBottom: 8,
    },
    sectionText: {
        fontWeight: "bold",
    },
});
