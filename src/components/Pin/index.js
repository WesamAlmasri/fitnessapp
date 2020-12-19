import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import styles  from './styles';

export default Pin = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    fadeAnim,{
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
                Animated.timing(
                    fadeAnim,{
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true,
                    }),
            ])
        ).start()
      }, [fadeAnim])

    return (
        <View style={styles.outerPin}>
            <View style={styles.pin}>
                <Animated.View 
                    style={[styles.innerPin, 
                            { transform: [{
                                scale: fadeAnim.interpolate({
                                    inputRange: [0,1],
                                    outputRange: [1, 1.5]
                                }),
                            }]
                        }
                    ]} 
                
                />
            </View>
        </View>
    );
}