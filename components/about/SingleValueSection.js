import { View, Animated } from "react-native";

export default function SingleValueSection({ style, title, text }) {
    return (
        <View style={style.sectionStyle}>
            <Animated.Text style={style.subtitleStyle}>{title}</Animated.Text>
            <Animated.Text style={style.textStyle}>{text}</Animated.Text>
        </View>
    );
}
