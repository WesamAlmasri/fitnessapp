import React, {useState, useEffect, useRef} from 'react';
import { View,
    } from 'react-native';
import styles  from './styles';
import MapView, { Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import Monitor from '../Monitor';
import Pin from '../Pin';
import { distanceBetween, computePace } from './helper'


export default Run = (props) => {
    const [positions, setPositions] = useState([]);
    const [distance, setDistance] = useState(0);
    const [pace, setPace] = useState(0);
    const map = useRef(null);

    const { coords: { latitude, longitude, altitude }, timestamp } = props.startup_position;
    const currentPosition = positions.length === 0 ? {coords: { latitude, longitude, altitude }, timestamp } : positions[positions.length - 1];
    
    useEffect(() => {
        let listener;
        (async () => {
            const options = {accuracy: 4, timeInterval: 1000, distanceInterval: 1};
            listener = await Location.watchPositionAsync(options, onPositionChange)
        })();
        
        return () => listener.remove(); 
    },[]);


    const onPositionChange = (position) => {
        map.current.animateCamera({center: {latitude: position.coords.latitude,longitude: position.coords.longitude,}});
        lastPosition = positions.length === 0 ? { coords: { latitude, longitude, altitude }, timestamp } : positions[positions.length - 1];
        const delta = distanceBetween(lastPosition, position);
        const new_distance = distance + delta;
        const pace = delta > 0 ? computePace(delta, lastPosition, position) : 0;
        setPositions(prev => [...prev, position]);
        setDistance(new_distance);
        setPace(pace);
      }
    
    return (
        <View style={styles.container}>
            <Monitor {...{distance, pace}} />
            <MapView 
                ref={map}
                provider="google" 
                initialRegion={{ latitude, longitude ,latitudeDelta: 0.01, longitudeDelta: 0.01 }}
                style={styles.map}
            >
                <Polygon coordinates={positions.map(position => position.coords)} strokeWidth={10} strokeColor="#f2b659" />
                <Marker coordinate={currentPosition.coords} anchor={{ x: 0.5, y: 0.5 }}>
                    <Pin />
                </Marker>
            </MapView>
        </View>
    );
}