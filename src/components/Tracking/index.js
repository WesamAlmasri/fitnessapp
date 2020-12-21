import React, {useState, useEffect, useRef} from 'react';
import { View,
        ActivityIndicator,
    } from 'react-native';
import styles  from './styles';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Monitor from '../Monitor';
import Pin from '../Pin';

export default Tracking = (props) => {
    const { code } = props.route.params;
    console.log(code)
    const [ready, setReady] = useState(false);
    const [updatedPosition, setUpdatedPosition] = useState({});
    const [duration, setDuration] = useState(0);
    const [targetDistance, setTargetDistance] = useState(0);
    const map = useRef(null);
    const [statistics, setStatistics] = useState({
        targetDistance: 0,
        positions: [],
        durations: [],
        paces: [],
        distances: [],
    });

    const currentPosition = statistics.positions.length === 0 ? updatedPosition : statistics.positions[statistics.positions.length - 1];
    

    useEffect(() => {
        
    }, [])



    return (
        <>
            {!ready ? (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
                <View style={styles.container}>
                    <Monitor 
                        distance={statistics.distances[statistics.distances.length - 1]}
                        pace={statistics.paces[statistics.paces.length - 1]} 
                        targetDistance={targetDistance}
                        duration={duration}
                    />
                    <MapView 
                        ref={map}
                        provider="google" 
                        initialRegion={{ latitude: statistics.positions[0].coords.latitude, longitude: statistics.positions[0].coords.longitude ,latitudeDelta: 0.01, longitudeDelta: 0.01 }}
                        style={styles.map}
                    >
                        <Polyline coordinates={statistics.positions.map(position => position.coords)} strokeWidth={10} strokeColor="#f2b659" />
                        <Marker coordinate={currentPosition.coords} anchor={{ x: 0.5, y: 0.5 }}>
                            <Pin />
                        </Marker>
                    </MapView>
                </View>
            )}
        </>
        
    );
}