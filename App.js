import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './src/pages/HomeScreen/index'
import TreinoScreen from './src/pages/TreinoScreen/index'
import CalcsScreen from './src/pages/CalcScreen/index'
import UserScreen from './src/pages/UserScreen/index'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ExerciciosScreen">
        <Tab.Screen 
          name="Página Raiz" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Criar Treino" 
          component={TreinoScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Cáculos" 
          component={CalcsScreen} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Usuário" 
          component={UserScreen} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}