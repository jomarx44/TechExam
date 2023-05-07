/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Splash, Home, Cart} from './src/screens';
import {Provider} from 'react-redux';
import store from './src/App.store';
const ReduxProvider = props => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash">{() => <Splash />}</Stack.Screen>
        <Stack.Screen name="Home">{() => <Home />}</Stack.Screen>
        <Stack.Screen name="Cart">{() => <Cart />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => ReduxProvider);
