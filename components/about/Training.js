import { View, Animated, StyleSheet } from "react-native";

import SingleValueSection from "./SingleValueSection";
import MultiValueSection from "./MultiValueSection";

export default function Training({ style, exp, evs, happiness, cr }) {
    return (
        <View style={style}>
            {/* Title */}
            <Animated.Text style={styles.sectionTitle}>Training</Animated.Text>

            <SingleValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText8M,
                }}
                title={"Base EXP"}
                text={exp}
            />

            <MultiValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText16M,
                }}
                title={"EV Yield"}
                values={evs}
            />

            <SingleValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText8M,
                }}
                title={"Base Happiness"}
                text={happiness}
            />

            <SingleValueSection
                style={{
                    sectionStyle: styles.sectionContent,
                    subtitleStyle: styles.sectionSubtitle,
                    textStyle: styles.sectionText8M,
                }}
                title={"Capture Rate"}
                text={`${cr}%`}
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
        width: 100,
        color: "#919191",
    },
    sectionText8M: {
        fontWeight: "bold",
        marginRight: 8,
    },
    sectionText16M: {
        fontWeight: "bold",
        marginRight: 16,
    },
});
