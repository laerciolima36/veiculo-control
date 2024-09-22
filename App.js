import React from 'react';
import ScreenMatricula from './Screens/ScreenMatricula';
import ScreenVeiculo from './Screens/ScreenVeiculo';
import ScreenDestino from './Screens/ScreenDestino';
import ScreenAbastecimento from './Screens/ScreenAbastecimento';
import ScreenFinal from './Screens/ScreenFinal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './components/DataContext';
import RegistrosList from './Screens/RegistrosList';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <Stack.Navigator initialRouteName="ScreenMatricula">
          <Stack.Screen name="ScreenMatricula" component={ScreenMatricula} />
          <Stack.Screen name="ScreenVeiculo" component={ScreenVeiculo} />
          <Stack.Screen name="ScreenDestino" component={ScreenDestino} />
          <Stack.Screen name="ScreenAbastecimento" component={ScreenAbastecimento} />
          <Stack.Screen name="ScreenFinal" component={ScreenFinal} options={{ gestureEnabled: false, headerLeft: null }} />
          <Stack.Screen name="RegistrosList" component={RegistrosList} />
        </Stack.Navigator>
      </DataProvider>
    </NavigationContainer>
  );
}

export default App;