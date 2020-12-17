import React, { useState, useEffect } from 'react';
import { StyleSheet, 
        View,
        Alert,
        ActivityIndicator,
        StatusBar,
      } from 'react-native';
import * as Location from 'expo-location';
import Run from './components/Run';



export default App = () => {
  const [ready, setReady] = useState(false);
  const [position, setPosition] = useState(null);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status === 'granted') {
          const { coords: {latitude, longitude, altitude}, timestamp } = await Location.getCurrentPositionAsync({accuracy: 6});
          setPosition({ coords: {latitude, longitude, altitude}, timestamp });
          setReady(true);
      } else {
        Alert.alert('Access denied','Permission to access location was denied');
      }
  
    })();
  },[]);
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      {
        ready ? 
        (
          <Run startup_position={position} />
        )
        :
        (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )
      }
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
