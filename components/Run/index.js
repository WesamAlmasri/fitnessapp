import React, {useState, useEffect, useRef} from 'react';
import { View,
        TextInput,
        Text,
        Alert,
        Animated,
        Dimensions,
        Keyboard,
    } from 'react-native';
import styles  from './styles';
import MapView, { Marker, Polygon } from 'react-native-maps';
import * as Location from 'expo-location';
import Monitor from '../Monitor';
import Pin from '../Pin';
import { distanceBetween, computePace } from './helper'
import CircleButton from '../CircleButton';


export default Run = (props) => {
    const [positions, setPositions] = useState([]);
    const [distance, setDistance] = useState(0);
    const [textInput, setTextInput] = useState('');
    const [button, setButton] = useState({text: 'Start', color: 'blue'});
    const [targetDistance, setTargetDistance] = useState(0);
    const [started, setStarted] = useState(false);
    const [ended, SetEnded] = useState(false);
    const [pace, setPace] = useState(0);
    const map = useRef(null);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const { coords: { latitude, longitude, altitude }, timestamp } = props.startup_position;
    const currentPosition = positions.length === 0 ? {coords: { latitude, longitude, altitude }, timestamp } : positions[positions.length - 1];
    
    useEffect(() => {
        if(started){
            let listener;
            (async () => {
                const options = {accuracy: 6, timeInterval: 1000, distanceInterval: 1};
                listener = await Location.watchPositionAsync(options, onPositionChange)
            })();
            return () => listener.remove(); 
        }
    },[started]);

    useEffect(() => {
        if(positions.length > 1)
        calculate(positions[positions.length - 1])
    }, [positions])


    const onPositionChange = (position) => {
        if(position.coords.accuracy < 20){
            setPositions(prev => [...prev, position]);
        }
      }
    
      const calculate = (position) => {
        map.current.animateCamera({center: {latitude: position.coords.latitude,longitude: position.coords.longitude,}});
        lastPosition = positions.length === 0 ? { coords: { latitude, longitude, altitude }, timestamp } : positions[positions.length - 2];
        const delta = distanceBetween(lastPosition, position);
        const new_distance = distance + delta;
        const pace = delta > 0 ? computePace(delta, lastPosition, position) : 0;
        setDistance(new_distance);
        setPace(pace);
      }

      const onPressStart = () => {
        if(!started && !ended){   
            const Num = Number(textInput);
            if(!isNaN(Num) && Num !== 0 && Num !== null){
                if(Num > 999 ) {
                    Alert.alert('Alert', 'It seems that you a lot of energy to run this distance, try with less distance please.');
                    return;
                }
                Keyboard.dismiss();
                buttonAnimDown();
                let timer = 3;
                let si = setInterval(() => {
                    setButton({text: timer, color: 'blue'});
                    if(timer === 0){
                        setStarted(true);
                        setButton({text: 'Stop', color: 'red'});
                        setTargetDistance(Num);
                        clearInterval(si);
                        return;
                    }
                    timer = timer -1;
                },1000);

            }else{
                Alert.alert('Alert', 'Invalid Value, Please try again');
            }
        } else if(started && !ended){
            setButton({text: 'Statics', color: 'blue'});
            setStarted(false);
            SetEnded(true);
            return;

        } else if(!started && ended){
            Alert.alert('Not implemented yet')
        }
      }

      const onLongPress = () => {
        
      }

      const buttonAnimDown = () => {
            Animated.timing(
                fadeAnim,{
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
            }).start()
      }
    
    return (
        <View style={styles.container}>
            <Monitor {...{distance, pace, targetDistance, started}} />
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
            <Animated.View style={[styles.startContainer, 
                                {bottom: fadeAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [Dimensions.get("window").height / 3, 20]
                                })}]}>
                {!started && !ended && 
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Enter the target distance for the training in Km</Text>
                        <TextInput 
                                style={styles.textInput}
                                placeholder="Enter target distance in Km"
                                textAlign="center"
                                keyboardType="numeric"
                                value={textInput}
                                onChangeText={setTextInput}
                            /> 
                    </View>
                }
                
                
                <CircleButton 
                    radius={100} 
                    color={button.color} 
                    text={button.text}
                    textColor="white"
                    onPress={onPressStart}
                    onLongPress={onLongPress}
                />
            </Animated.View>
            
        </View>
    );
}