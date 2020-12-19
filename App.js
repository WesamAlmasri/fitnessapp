import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, 
        StatusBar,
      } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './src/components/HomeComponent';
import Run from './src/components/Run';
import StatisticsData from './src/components/StatisticsData';


const Stack = createStackNavigator();


export default App = () => {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: "#29252b",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
          <Stack.Screen name="Home" component={HomeComponent}/>
          <Stack.Screen name="Training" component={Run} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29252b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
