import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookScreen from './screens/BookScreen';
import ChapterScreen from './screens/ChapterScreen';
import VerseScreen from './screens/VerseScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books">
        <Stack.Screen name="Books" component={BookScreen} />
        <Stack.Screen name="Chapters" component={ChapterScreen} />
        <Stack.Screen name="Verses" component={VerseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
