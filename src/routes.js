import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import ManagerProduct from './screens/ManagerProduct';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
      <NavigationContainer>
          <AppStack.Navigator headerMode='screen' initialRouteName='Medidor de Utilidade' screenOptions={{cardStyle: {backgroundColor: '#FFF'}}}>
              <AppStack.Screen name='Medidor de Utilidade' component={Home}/>
              <AppStack.Screen name=' ' component={ManagerProduct}/>
          </AppStack.Navigator>
      </NavigationContainer>
  );
}

export default Routes;