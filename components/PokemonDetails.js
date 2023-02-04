import {
    StyleSheet,
    Animated,
    View,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useHeaderHeight } from "@react-navigation/elements";

const { height, width } = Dimensions.get("window");
const TAB_BUTTON_WIDTH = (width - 48) / 4;
let headerHeight = 0;

export default function PokemonDetails({ pokemonData }) {
    headerHeight = useHeaderHeight();
    const tabs = [
        { name: "About" },
        { name: "Base Stats" },
        { name: "Evolutions" },
        { name: "Moves" },
    ];

    return (
        <Animated.View style={styles.container}>
            <View style={styles.tabs}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.tabButtonWrapper}
                    >
                        <Animated.Text style={styles.tabText}>
                            {tab.name}
                        </Animated.Text>
                    </TouchableOpacity>
                ))}

                <Animated.View style={styles.tabSelectedIndicator} />
            </View>
            {/* TODO: Add Animated.Scrollview wrapping a View which wraps a Slide
             e.g. About, Base Stats, etc. */}
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
    slideWrapper: {
        width: width,
        padding: 24,
    },
});
