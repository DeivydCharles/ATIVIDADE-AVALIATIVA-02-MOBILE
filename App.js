import React from 'react';
import { NavigationContainer, DarkTheme as NavDarkThame } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const { DarkTheme } = adaptNavigationTheme ({reactNavigationDark: NavDarkThame});

export default function App() {
  return (
   <PaperProvider theme={MD3DarkTheme}>
       <StatusBar style='light'/>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Filmes do Homem-Aranha' }} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
