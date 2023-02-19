import { View, Animated } from "react-native";

export default function MultiValueSection({ style, title, values }) {
    return (
        <View style={style.sectionStyle}>
            <Animated.Text style={style.subtitleStyle}>{title}</Animated.Text>
            <Animated.Text style={style.textStyle}>
                {values.map((val, index) => (
                    <Animated.View key={index}>
                        <Animated.Text style={style.textStyle}>
                            {val.value ? `${val.value} ${val.stat}` : `${val}`}
                        </Animated.Text>
                    </Animated.View>
                ))}
            </Animated.Text>
        </View>
    );
}
