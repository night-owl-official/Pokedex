import { View, Animated, StyleSheet } from "react-native";

import GenderRatio from "./GenderRatio";
import SingleValueSection from "./SingleValueSection";
import MultiValueSection from "./MultiValueSection";

export default function Breeding({ style, gender, eggGroups, eggSteps }) {
    return (
        <View style={style}>
            {/* Title */}
            <Animated.Text style={styles.sectionTitle}>Breeding</Animated.Text>

            <GenderRatio
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                }}
                gender={gender}
            />

            <MultiValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText,
                }}
                title={"Egg Groups"}
                values={eggGroups}
            />

            <SingleValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText,
                }}
                title={"Base Egg Steps"}
                text={eggSteps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
        width: 130,
        color: "#919191",
    },
    sectionText: {
        fontWeight: "bold",
        marginRight: 8,
    },
});
