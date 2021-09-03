import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStore} from './src/store';
import CustomHookScreen from './src/screens/CustomHook/CustomHook.screen';
import RTKQueryScreen from './src/screens/RTKQuery/RTKQuery.screen';
import {QueryClient, QueryClientProvider} from 'react-query';

type StackParams = {
  RTKQuery: undefined;
  CustomHook: undefined;
};

const Stack = createNativeStackNavigator<StackParams>();

const queryClient = new QueryClient();
const store = createStore();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RTKQuery" component={RTKQueryScreen} />
          <Stack.Screen name="CustomHook" component={CustomHookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  </Provider>
);

export default App;
