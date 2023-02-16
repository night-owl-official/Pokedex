import { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    Easing,
    withTiming,
    withSequence,
    withDelay,
    withRepeat,
} from "react-native-reanimated";

const loadingImage = require("../assets/loading.png");

export default function Loading({ size }) {
    const rotation = useSharedValue(0);

    const imgAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    useEffect(() => {
        rotation.value = withRepeat(
            withSequence(
                withTiming(30, {
                    duration: 200,
                }),
                withTiming(-30, {
                    duration: 100,
                    easing: Easing.bounce,
                }),
                withTiming(0, {
                    duration: 300,
                }),
                withDelay(500, withTiming(0))
            ),
            -1,
            true
        );
    }, []);

    return (
        <Animated.View style={styles.container}>
            <Animated.View style={imgAnimatedStyle}>
                <Image
                    style={{ width: size, height: size }}
                    source={loadingImage}
                />
            </Animated.View>
            <Animated.Text style={styles.text}>Loading...</Animated.Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
    },
    text: {
        marginTop: 8,
        fontWeight: "bold",
    },
});
