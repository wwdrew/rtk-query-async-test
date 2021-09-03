import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStore} from './src/store';
import CustomHookScreen from './src/screens/CustomHook/CustomHook.screen';
import RTKQueryScreen from './src/screens/RTKQuery/RTKQuery.screen';

type StackParams = {
  RTKQuery: undefined;
  CustomHook: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const store = createStore();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RTKQuery" component={RTKQueryScreen} />
        <Stack.Screen name="CustomHook" component={CustomHookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
