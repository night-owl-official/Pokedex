import { StyleSheet, View, Animated } from "react-native";
import { Foundation as Icon } from "@expo/vector-icons";

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

            {/* Breeding */}
            <View style={styles.section}>
                {/* Title */}
                <Animated.Text style={styles.sectionTitle}>
                    Breeding
                </Animated.Text>

                {/* Gender ratio */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Gender
                    </Animated.Text>

                    {/* Display Genders */}
                    {pokemonData.gender.map((gender, index) => (
                        <Animated.Text
                            style={[styles.sectionText, { marginRight: 16 }]}
                            key={index}
                        >
                            {gender.gender === "Genderless" ? (
                                // Genderless Text
                                <Animated.Text style={{ fontWeight: "bold" }}>
                                    Genderless
                                </Animated.Text>
                            ) : (
                                // Gender and symbol
                                <>
                                    <Icon
                                        name={
                                            gender.gender === "Male"
                                                ? "male-symbol"
                                                : "female-symbol"
                                        }
                                        color={
                                            gender.gender === "Male"
                                                ? "#6890F0"
                                                : "#EE99AC"
                                        }
                                        size={16}
                                    />
                                    {"  "}
                                    {gender.rate}%
                                </>
                            )}
                        </Animated.Text>
                    ))}
                </View>

                {/* Egg groups */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Egg Groups
                    </Animated.Text>

                    {/* Display Egg groups */}
                    {pokemonData.eggGroups.map((eggGroup, index) => (
                        <Animated.Text
                            key={index}
                            style={[styles.sectionText, { marginRight: 8 }]}
                        >
                            {eggGroup}
                        </Animated.Text>
                    ))}
                </View>

                {/* Base Egg steps */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Base Egg Steps
                    </Animated.Text>

                    {/* Display Base Egg Steps */}
                    <Animated.Text
                        style={[styles.sectionText, { marginRight: 8 }]}
                    >
                        {pokemonData.baseEggSteps}
                    </Animated.Text>
                </View>
            </View>

            {/* Training */}
            <View style={styles.section}>
                {/* Title */}
                <Animated.Text style={styles.sectionTitle}>
                    Training
                </Animated.Text>

                {/* Base EXP */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Base EXP
                    </Animated.Text>

                    {/* Display Base EXP */}
                    <Animated.Text
                        style={[styles.sectionText, { marginRight: 8 }]}
                    >
                        {pokemonData.baseExp}
                    </Animated.Text>
                </View>

                {/* Base Happiness */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Base Happiness
                    </Animated.Text>

                    {/* Display Base Happiness */}
                    <Animated.Text
                        style={[styles.sectionText, { marginRight: 8 }]}
                    >
                        {pokemonData.baseHappiness}
                    </Animated.Text>
                </View>

                {/* Capture Rate */}
                <View style={styles.sectionContent}>
                    {/* Subtitle */}
                    <Animated.Text style={styles.sectionSubtitle}>
                        Capture Rate
                    </Animated.Text>

                    {/* Display Capture Rate */}
                    <Animated.Text
                        style={[styles.sectionText, { marginRight: 8 }]}
                    >
                        {pokemonData.captureRate}%
                    </Animated.Text>
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
