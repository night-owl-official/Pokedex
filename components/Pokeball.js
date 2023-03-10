import { Image } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
    withRepeat,
    interpolate,
    Extrapolate,
    Easing,
} from "react-native-reanimated";
import { useEffect } from "react";

const pokeballImage = require("../assets/pokeball.png");

export default function Pokeball({ wrapperStyle, imageStyle, rotating }) {
    // Pokeball Animation
    const pokeballOpacity = useSharedValue(0);
    const pokeballRotation = useSharedValue(0);

    useEffect(() => {
        if (!rotating) return;

        // Pokeball Animation
        pokeballOpacity.value = withDelay(
            200,
            withTiming(1, { duration: 350, easing: Easing.inOut(Easing.quad) })
        );

        pokeballRotation.value = withRepeat(
            withTiming(360, { duration: 4500, easing: Easing.linear }),
            -1,
            false
        );
    }, []);

    ///////////// Pokeball Wrapper Animation /////////////
    const pokeballWrapperAnimatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            pokeballOpacity.value,
            [0, 1],
            [0, 1],
            Extrapolate.CLAMP
        );

        const rotate = interpolate(
            pokeballRotation.value,
            [0, 360],
            [0, 360],
            Extrapolate.CLAMP
        );

        return {
            opacity: opacity,
            transform: [
                {
                    rotate: `${rotate}deg`,
                },
            ],
        };
    });
    /////////////////////////////////////////////////////

    return (
        <Animated.View
            style={[wrapperStyle, rotating && pokeballWrapperAnimatedStyle]}
        >
            <Image style={imageStyle} source={pokeballImage} />
        </Animated.View>
    );
}
