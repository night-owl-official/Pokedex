import { StyleSheet, View, Animated, Image } from "react-native";

import { getMoveIconByType, getTypeIconByType } from "../../utils/pokemonIcons";
import { getColorByType } from "../../utils/pokemonTypeColors";

import MoveStat from "./MoveStat";

export default function MoveDisplay({ move }) {
    return (
        <View style={styles.shadowContainer}>
            <Animated.Text style={styles.heading}>{move.name}</Animated.Text>

            <Animated.Text>{move.description}</Animated.Text>

            <Animated.Text style={styles.moveLearnCondition}>
                {move.learnCondition}
            </Animated.Text>

            <View style={styles.moveInfoContainer}>
                <View style={styles.moveStatsContainer}>
                    <MoveStat title={"Power"} value={move.power} />
                    <MoveStat title={"Accuracy"} value={move.accuracy} />
                    <MoveStat title={"Effect %"} value={move.effect} />
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
    moveIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 2,
    },
});
