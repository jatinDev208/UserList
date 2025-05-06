// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/Navigation';
import UserListScreen from './src/screen/UserListScreen';
import UserDetailScreen from './src/screen/UserDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="UserList">
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'User List' }} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ title: 'User Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
