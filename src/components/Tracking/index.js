import React, {useState, useEffect, useRef} from 'react';
import { View,
        Text,
        ActivityIndicator,
    } from 'react-native';
import styles  from './styles';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Monitor from '../Monitor';
import Pin from '../Pin';
import { setupSocket } from '../socketService';

export default Tracking = (props) => {
    const { code } = props.route.params;
    
    const map = useRef();
    const [statistics, setStatistics] = useState({
        targetDistance: 0,
        positions: [{coords: {latitude: -8.11710, longitude: -25.66414}}],
        durations: [],
        paces: [],
        distances: [],
    });
    
    useEffect(() => {
        map.current.animateCamera({center: {latitude: statistics.positions[statistics.positions.length - 1].coords.latitude,longitude: statistics.positions[statistics.positions.length - 1].coords.longitude}});
        
    }, [statistics.positions])

    useEffect(() => {
        let cleaned = false;
        if(!cleaned){
            const sct = setupSocket(() => null, setStatistics);
            sct.emit('joinRoom', JSON.stringify({roomId: code}));
        }
        
        return () => cleaned = true;
    }, [])


    return (
        <>
            {!true ? (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size="large" color="white" />
                    <Text style={{color: 'white'}}>Waiting to receive data, if it takes too much time, check the training code</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <Monitor 
                        distance={statistics.distances[statistics.distances.length - 1]}
                        pace={statistics.paces[statistics.paces.length - 1]} 
                        targetDistance={statistics.targetDistance}
                        duration={statistics.durations[statistics.durations.length - 1]}
                    />
                    <MapView 
                        ref={map}
                        provider="google" 
                        initialRegion={{ latitude: statistics.positions[0].coords.latitude, longitude: statistics.positions[0].coords.longitude ,latitudeDelta: 0.01, longitudeDelta: 0.01 }}
                        style={styles.map}
                    >
                        {statistics.positions.length > 2 &&
                            <>
                                <Polyline coordinates={statistics.positions.map(position => position.coords)} strokeWidth={10} strokeColor="#f2b659" />
                                <Marker coordinate={statistics.positions[statistics.positions.length - 1].coords} anchor={{ x: 0.5, y: 0.5 }}>
                                    <Pin />
                                </Marker>
                            </>
                        }
                        
                    </MapView>
                </View>
            )}
        </>
        
    );
}