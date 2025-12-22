import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "./src/nav/types";

import SplashScreen from "./src/screens/SplashScreen";
import StorySelectScreen from "./src/screens/StorySelectScreen";
import StoryDetailsScreen from "./src/screens/StoryDetailsScreen";
import ReaderScreen from "./src/screens/ReaderScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="StorySelect" component={StorySelectScreen} />
          <Stack.Screen name="StoryDetails" component={StoryDetailsScreen} />
          <Stack.Screen name="Reader" component={ReaderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
