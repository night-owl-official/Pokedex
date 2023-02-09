import { StyleSheet, View, Animated, Image } from "react-native";

import { getMoveIconByType, getTypeIconByType } from "../../utils/pokemonIcons";
import { getColorByType } from "../../utils/pokemonTypeColors";

export default function MoveDisplay({ move }) {
    return (
        <View style={styles.shadowContainer}>
            {/* Move Name */}
            <Animated.Text style={styles.heading}>{move.name}</Animated.Text>

            <Animated.Text>{move.description}</Animated.Text>

            <Animated.Text style={styles.moveLearnCondition}>
                {move.learnCondition}
            </Animated.Text>

            <View style={styles.moveInfoContainer}>
                <View style={styles.moveStatsContainer}>
                    <View style={styles.moveStatContainer}>
                        <Animated.Text style={styles.moveStatsHeading}>
                            Power
                        </Animated.Text>

                        <Animated.Text style={styles.description}>
                            {move.power === 0 ? "-" : move.power}
                        </Animated.Text>
                    </View>

                    <View style={styles.moveStatContainer}>
                        <Animated.Text style={styles.moveStatsHeading}>
                            Accuracy
                        </Animated.Text>

                        <Animated.Text style={styles.description}>
                            {move.accuracy}
                        </Animated.Text>
                    </View>

                    <View style={styles.moveStatContainer}>
                        <Animated.Text style={styles.moveStatsHeading}>
                            Effect %
                        </Animated.Text>

                        <Animated.Text style={styles.description}>
                            {move.effect === 0 ? "-" : move.effect}
                        </Animated.Text>
                    </View>
                </View>

                {/* Move Icons */}
                <View style={styles.moveIconsContainer}>
                    {/* Move Category Icon */}
                    <Image
                        style={styles.moveIcon}
                        source={getMoveIconByType(move.category)}
                    />

                    {/* Move Type Icon */}
                    <Image
                        style={[
                            styles.moveIcon,
                            {
                                tintColor: getColorByType(move.type),
                            },
                        ]}
                        source={getTypeIconByType(move.type)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadowContainer: {
        flexDirection: "column",
        padding: 24,
        borderRadius: 16,
        marginVertical: 12,
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
    heading: {
        color: "#919191",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
    moveStatsHeading: {
        color: "#919191",
        fontWeight: "bold",
        marginBottom: 4,
    },
    description: {
        fontWeight: "bold",
    },
    moveLearnCondition: {
        color: "#919191",
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 16,
        marginBottom: 8,
        marginTop: 16,
    },
    moveInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16,
    },
    moveStatsContainer: {
        flexDirection: "row",
    },
    moveIconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 22,
    },
    moveStatContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 10,
    },
    moveIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 2,
    },
});
