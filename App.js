import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';

import AddRepairScreen from './screens/AddRepairScreen';
import ViewRepairsScreen from './screens/ViewRepairsScreen';
import EditRepairScreen from './screens/EditRepairScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddRepair">
          <Stack.Screen name="AddRepair" component={AddRepairScreen} options={{ title: 'Add Repair' }} />
          <Stack.Screen name="ViewRepairs" component={ViewRepairsScreen} options={{ title: 'View Repairs' }} />
          <Stack.Screen name="EditRepair" component={EditRepairScreen} options={{ title: 'Edit Repair' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
