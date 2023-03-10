import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/elements";
import Animated, {
    useSharedValue,
    useDerivedValue,
    useAnimatedRef,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    scrollTo,
    interpolate,
    interpolateColor,
    Extrapolate,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import About from "../tabs/About";
import BaseStats from "../tabs/BaseStats";
import Evolutions from "../tabs/Evolutions";
import Moves from "../tabs/Moves";

const tabs = [
    { name: "About", slide: About },
    { name: "Base Stats", slide: BaseStats },
    { name: "Evolutions", slide: Evolutions },
    { name: "Moves", slide: Moves },
];
const { height, width } = Dimensions.get("window");
const TAB_BUTTON_WIDTH = (width - 48) / 4;
const POKEMON_SUMMARY_HEIGHT = 360;
let headerHeight = 0;

export default function PokemonDetails({
    pokemonData,
    translateY,
    panGesture,
}) {
    headerHeight = useHeaderHeight();

    // Enables co-operation of gestures and native gestures on Android
    const scrollGesture =
        Gesture.Native().simultaneousWithExternalGesture(panGesture);

    const translateX = useSharedValue(0);
    const scrollRef = useAnimatedRef();
    const scroll = useSharedValue(0);
    useDerivedValue(() => {
        scrollTo(scrollRef, scroll.value * width, 0, true);
    });

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    }, []);

    ///////////// Bottom Sheet Animation /////////////
    const containerAnimatedStyle = useAnimatedStyle(() => {
        const yTranslate = interpolate(
            translateY.value,
            [-POKEMON_SUMMARY_HEIGHT, 0],
            [0, -32],
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateY: yTranslate }],
        };
    });
    /////////////////////////////////////////////////////

    ///////////// Select Indicator Animation /////////////
    const tabSelectedIndicatorAnimatedStyle = useAnimatedStyle(() => {
        const xTranslate = interpolate(
            translateX.value,
            tabs.map((_, index) => width * index),
            tabs.map((_, index) => TAB_BUTTON_WIDTH * index),
            Extrapolate.CLAMP
        );

        return {
            transform: [{ translateX: xTranslate }],
        };
    });
    /////////////////////////////////////////////////////

    return (
        <Animated.View style={[styles.container, containerAnimatedStyle]}>
            <View style={styles.tabs}>
                {tabs.map((tab, index) => {
                    const tabTextAnimatedStyle = useAnimatedStyle(() => {
                        const color = interpolateColor(
                            translateX.value,
                            [
                                (index - 1) * width,
                                index * width,
                                (index + 1) * width,
                            ],
                            ["#919191", "#000", "#919191"],
                            "RGB"
                        );

                        return {
                            color: color,
                        };
                    });

                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.tabButtonWrapper}
                            onPress={() => {
                                scroll.value = index;
                            }}
                        >
                            <Animated.Text
                                style={[styles.tabText, tabTextAnimatedStyle]}
                            >
                                {tab.name}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}

                <Animated.View
                    style={[
                        styles.tabSelectedIndicator,
                        tabSelectedIndicatorAnimatedStyle,
                    ]}
                />
            </View>

            <GestureDetector gesture={scrollGesture}>
                <Animated.ScrollView
                    ref={scrollRef}
                    onScroll={scrollHandler}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    bounces={false}
                >
                    {tabs.map((tab, index) => {
                        const Tab = tab.slide;

                        return (
                            <View key={index} style={styles.tabWrapper}>
                                <Tab
                                    pokemonData={pokemonData}
                                    panGesture={panGesture}
                                />
                            </View>
                        );
                    })}
                </Animated.ScrollView>
            </GestureDetector>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height - (Constants.statusBarHeight + headerHeight),
        backgroundColor: "#fff",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingVertical: 16,
        paddingHorizontal: 0,
    },
    tabs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 0,
        marginHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#E7E7E8",
    },
    tabButtonWrapper: {
        height: 24,
        width: TAB_BUTTON_WIDTH,
        alignItems: "center",
        justifyContent: "center",
    },
    tabText: {
        color: "#919191",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 18,
    },
    tabSelectedIndicator: {
        position: "absolute",
        bottom: -1,
        height: 2,
        width: TAB_BUTTON_WIDTH,
        backgroundColor: "#0055D4",
    },
    tabWrapper: {
        width: width,
        padding: 24,
    },
});
