import { View, Animated, StyleSheet } from "react-native";
import { Foundation as Icon } from "@expo/vector-icons";

export default function GenderRatio({ style, gender }) {
    return (
        <View style={style.sectionStyle}>
            {/* Subtitle */}
            <Animated.Text style={style.subtitleStyle}>Gender</Animated.Text>

            {/* Display Genders */}
            {gender.map((gndr, index) => (
                <Animated.Text style={styles.genderSectionText} key={index}>
                    {gndr.gender === "Genderless" ? (
                        // Genderless Text
                        <Animated.Text style={styles.genderlessText}>
                            Genderless
                        </Animated.Text>
                    ) : (
                        // Gender and symbol
                        <>
                            <Icon
                                name={
                                    gndr.gender === "Male"
                                        ? "male-symbol"
                                        : "female-symbol"
                                }
                                color={
                                    gndr.gender === "Male"
                                        ? "#6890F0"
                                        : "#EE99AC"
                                }
                                size={16}
                            />
                            {"  "}
                            {gndr.rate}%
                        </>
                    )}
                </Animated.Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    genderlessText: {
        fontWeight: "bold",
    },
    genderSectionText: {
        fontWeight: "bold",
        marginRight: 16,
    },
});
