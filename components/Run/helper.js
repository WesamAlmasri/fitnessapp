import * as turf from '@turf/turf';
import * as _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const distanceBetween = (origin, destination) => {
    var from = turf.point([origin.coords.longitude, origin.coords.latitude]);
    var to = turf.point([destination.coords.longitude, destination.coords.latitude]);
    var options = {units: 'meters'};

    return _.round(turf.distance(from, to, options));
}


export const computePace = (delta, prevPosition, position) => {
    const time = (position.timestamp - prevPosition.timestamp) / 1000;
    const pace = (time /delta);
    return pace;
}


export const storeData = async (storage_Key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(storage_Key, jsonValue)
      } catch (e) {
        // saving error
        console.log('error saving value');
      }
  }


export const getData = async (storage_Key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storage_Key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      console.log('error reading value');
    }
  }