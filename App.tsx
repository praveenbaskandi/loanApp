import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoanListScreen from './src/screens/LoanListPage/LoanListScreen';
import LoanDetailScreen from './src/screens/LoanDetailsPage/LoanDetailScreen';
import { RootStackParamList } from './src/navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loans" component={LoanListScreen} />
        <Stack.Screen name="LoanDetail" component={LoanDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
