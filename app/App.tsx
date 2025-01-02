// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/welcome';
import Check from './screens/check';
import UserInfo from './screens/user-info';
import ProInfo from './screens/pro-info';
import BuyNow from './screens/buy-now';
import ProDetail from './screens/pro-detail';
import { RootStackParamList } from './types/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="Check" component={Check} options={{ headerShown: false }} />
          <Stack.Screen name="UserInfo" component={UserInfo} options={{ headerShown: false }} />
          <Stack.Screen name="ProInfo" component={ProInfo} options={{ headerShown: false }} />
          <Stack.Screen name="BuyNow" component={BuyNow} options={{ headerShown: false }} />
          <Stack.Screen name="ProDetail" component={ProDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;