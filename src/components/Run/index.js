import React, {useState, useEffect, useRef} from 'react';
import { View,
        ActivityIndicator,
        Alert,
        Animated,
        Dimensions,
        Keyboard,
    } from 'react-native';
import styles  from './styles';
import * as Location from 'expo-location';
import MapView, { Marker, Polygon } from 'react-native-maps';
import Monitor from '../Monitor';
import Pin from '../Pin';
import { distanceBetween, computePace} from './helper';
import { storeData, getData, TRAININGLISTNAME } from '../../generalHelper';
import CircleButton from '../CircleButton';
import LabeledTextInput from '../LabeledTextInput';


export default Run = (props) => {
    const [ready, setReady] = useState(false);
    const [startupPosition, setStartupPosition] = useState({});
    const [updatedPosition, setUpdatedPosition] = useState({});
    const [duration, setDuration] = useState(0);
    const [targetDistance, setTargetDistance] = useState(0);
    const [textInput, setTextInput] = useState('');
    const [button, setButton] = useState({text: 'Start', color: 'blue'});
    const [started, setStarted] = useState(false);
    const [ended, SetEnded] = useState(false);
    const map = useRef(null);
    const [statistics, setStatistics] = useState({
        targetDistance: 0,
        positions: [],
        durations: [],
        paces: [],
        distances: [],
    });

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const currentPosition = statistics.positions.length === 0 ? updatedPosition : statistics.positions[statistics.positions.length - 1];
    
    useEffect(() => {
        let cleaned = false;
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status === 'granted') {
              const { coords: {latitude, longitude, altitude}, timestamp } = await Location.getCurrentPositionAsync({accuracy: 6});
              if(!cleaned){
                setStartupPosition({ coords: {latitude, longitude, altitude}, timestamp });
                setStatistics(prev => {
                        return {
                            ...prev, 
                            positions: [...prev.positions, { coords: {latitude, longitude, altitude}, timestamp }],
                            distances: [...prev.distances, 0],
                            paces: [...prev.paces, 0],
                            durations: [...prev.durations, 0],
                        };
                    });
                setReady(true); 
              } 
              
          } else {
            Alert.alert('Access denied','Permission to access location was denied');
          }
      
        })();
        return () => cleaned = true;
      },[]);

    useEffect(() => {
        if(started){
            let cleaned = false;
            setStatistics(prev => {
                return {
                    ...prev, 
                   targetDistance: targetDistance,
                };
            });
            let interval = setInterval(() => setDuration(prev => prev + 1), 1000);
            (async () => {
                const options = {accuracy: 6, timeInterval: 1000, distanceInterval: 1};
                let listener = await Location.watchPositionAsync(options, onPositionChange);
                if(cleaned)listener.remove();
            })();
            return () => {
                clearInterval(interval);
                cleaned = true;
            } 
        }
    },[started]);

    useEffect(() => {
        if(statistics.positions.length > 0)
        calculate(updatedPosition)
    }, [updatedPosition])


    const onPositionChange = (position) => {
        if(position.coords.accuracy < 20){
            setUpdatedPosition(position);
        }
      }
    
      const calculate = (position) => {
        map.current.animateCamera({center: {latitude: position.coords.latitude,longitude: position.coords.longitude}});
        const lastPosition = statistics.positions.length === 0 ? startupPosition : statistics.positions[statistics.positions.length - 1];
        const delta = distanceBetween(lastPosition, position);
        const new_distance = statistics.distances[statistics.distances.length - 1] + delta;
        const pace = delta > 0 ? computePace(delta, lastPosition, position) : 0;
        if(pace < 0.05)return;
        setStatistics(prev => {
            return {
                ...prev, 
                positions: [...prev.positions, position],
                distances: [...prev.distances, new_distance],
                paces: [...prev.paces, pace],
                durations: [...prev.durations, duration],
            };
        });
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
            (async() => {
                const old_list = await getData(TRAININGLISTNAME);
                if(!old_list){
                    await storeData(TRAININGLISTNAME, [statistics]);
                } else {
                    await storeData(TRAININGLISTNAME, [...old_list, statistics]);
                }
            })();
            setButton({text: 'Statics', color: 'blue'});
            setStarted(false);
            SetEnded(true);
            return;

        } else if(!started && ended){
            props.navigation.navigate('Statistics', { data: statistics });
        }
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
                        initialRegion={{ latitude: startupPosition.coords.latitude, longitude: startupPosition.coords.longitude ,latitudeDelta: 0.01, longitudeDelta: 0.01 }}
                        style={styles.map}
                    >
                        <Polygon coordinates={statistics.positions.map(position => position.coords)} strokeWidth={10} strokeColor="#f2b659" />
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
                            <LabeledTextInput 
                                inputLabel="Enter the target distance for the training in Km"
                                placeholder="Enter target distance in Km"
                                keyboardType="numeric"
                                value={textInput}
                                onChangeText={setTextInput}
                            />
                        }
                        <CircleButton 
                            radius={100} 
                            color={button.color} 
                            text={button.text}
                            textColor="white"
                            onPress={onPressStart}
                        />
                    </Animated.View>
                    
                </View>
            )}
        </>
        
    );
}