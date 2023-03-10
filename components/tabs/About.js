import { StyleSheet, ScrollView } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import AbilitiesDisplay from "../about/AbilitiesDisplay";
import Breeding from "../about/Breeding";
import Description from "../about/Description";
import Size from "../about/Size";
import Training from "../about/Training";

export default function About({ pokemonData, panGesture }) {
    // Enables co-operation of gestures and native gestures on Android
    const scrollGesture =
        Gesture.Native().simultaneousWithExternalGesture(panGesture);

    return (
        <GestureDetector gesture={scrollGesture}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollview}
            >
                <Description
                    style={styles.section}
                    text={pokemonData.description}
                />

                <Size
                    style={styles.section}
                    height={pokemonData.height}
                    weight={pokemonData.weight}
                />

                <Breeding
                    style={styles.section}
                    gender={pokemonData.gender}
                    eggGroups={pokemonData.eggGroups}
                    eggSteps={pokemonData.baseEggSteps}
                />

                <Training
                    style={styles.section}
                    exp={pokemonData.baseExp}
                    evs={pokemonData.evYield}
                    happiness={pokemonData.baseHappiness}
                    cr={pokemonData.captureRate}
                />

                <AbilitiesDisplay
                    style={styles.section}
                    abilities={pokemonData.abilities}
                />
            </ScrollView>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    section: {
        marginBottom: 32,
    },
    scrollview: {
        height: "100%",
        overflow: "visible",
    },
});
