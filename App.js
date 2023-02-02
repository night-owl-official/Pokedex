import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: "POKEDEX",
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            fontSize: 28,
                            fontWeight: "bold",
                            color: "#F1869A",
                        },
                        headerStyle: {
                            backgroundColor: "#fff",
                        },
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen name="Details" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
