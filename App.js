import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BookScreen from "./screens/BookScreen";
import ChapterScreen from "./screens/ChapterScreen";
import VerseScreen from "./screens/VerseScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen
          name="Books"
          component={BookScreen}
          options={{ title: "Livros" }}
        />
        <Stack.Screen
          name="Chapters"
          component={ChapterScreen}
          options={({ route }) => ({ title: `${route.params.bookName}` })}
        />
        <Stack.Screen
          name="Verses"
          component={VerseScreen}
          options={({ route }) => ({ title: `${route.params.bookName} - Capítulo ${route.params.chapter}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
