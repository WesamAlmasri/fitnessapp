import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


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


export const formatDuration = (duration) => {
    return moment.utc(moment.duration(duration, 's').asMilliseconds()).format('mm:ss');
}

export const formatPace = (pace_in_second_per_meter) => {
    const pace_in_minute_per_km = pace_in_second_per_meter * (1000 / 60);
    return moment.utc(moment.duration(pace_in_minute_per_km, 'minutes').asMilliseconds()).format('mm:ss');
}