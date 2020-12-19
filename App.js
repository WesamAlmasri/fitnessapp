import React from 'react';
import { StyleSheet, 
        StatusBar,
      } from 'react-native';
import Run from './src/components/Run';
import StatisticsData from './src/components/StatisticsData';



export default App = () => {

  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Run /> */}
      <StatisticsData />
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
