import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TRAININGLISTNAME = "TRAININGLISTNAME";

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
  if(duration > 3600000) return moment.utc(moment.duration(duration, 's').asMilliseconds()).format('hh:mm:ss');
    return moment.utc(moment.duration(duration, 's').asMilliseconds()).format('mm:ss');
}

export const formatPace = (pace_in_second_per_meter) => {
    const pace_in_minute_per_km = pace_in_second_per_meter * (1000 / 60);
    return moment.utc(moment.duration(pace_in_minute_per_km, 'minutes').asMilliseconds()).format('mm:ss');
}


export const toDateString = (timestamp) => {
  return moment(timestamp).format("dddd,  DD MM YYYY");
}

export const toTimeDeltaString = (start, end) => {
  return `${moment(start).format("hh:mm")} - ${moment(end).format("hh:mm")}`;
}