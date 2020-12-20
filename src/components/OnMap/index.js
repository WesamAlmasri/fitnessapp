import React, { useRef } from 'react';
import { View,
    } from 'react-native';
import styles  from './styles';
import MapView, { Marker, Polyline } from 'react-native-maps';


export default OnMap = (props) => {
    const {data , analyzedDataPerKm} = props.route.params
    const map = useRef();

    return (
        <View style={styles.container}>
            <MapView 
                ref={map}
                provider="google" 
                region={{latitude: data.positions[0].coords.latitude - data.positions[data.positions.length - 1].coords.latitude, 
                        longitude: data.positions[0].coords.longitude - data.positions[data.positions.length - 1].coords.longitude,
                        latitudeDelta: 0.01, longitudeDelta: 0.01 
                    }}
                onMapReady={() => map.current.fitToSuppliedMarkers(['Start', 'End'], {edgePadding: {top: 50, bottom: 50, left: 50, right: 50}})}
                style={styles.map}
            >
                <Polyline 
                    coordinates={data.positions.map(position => position.coords)} 
                    strokeWidth={10} 
                    strokeColor="#f2b659" 
                    strokeColors={data.paces.map(pace =>`hsl(${30*(pace/0.33)}, 80%, 45%)`)}
                />
                <Marker title="Start" identifier={'Start'} coordinate={data.positions[0].coords} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.pinStart} />
                </Marker>
                <Marker title="End" identifier={'End'} coordinate={data.positions[data.positions.length - 1].coords} anchor={{ x: 0.5, y: 0.5 }}>
                    <View style={styles.pinEnd} />
                </Marker>
            </MapView>
        </View>
    );
}