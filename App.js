import React from 'react';
import { StyleSheet, 
        StatusBar,
      } from 'react-native';
import Run from './components/Run';
import StatisticsData from './components/StatisticsData';



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
