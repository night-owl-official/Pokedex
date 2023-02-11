import { View, Animated } from "react-native";

export default function Description({ style, text }) {
    return (
        <View style={style}>
            <Animated.Text>{text}</Animated.Text>
        </View>
    );
}
