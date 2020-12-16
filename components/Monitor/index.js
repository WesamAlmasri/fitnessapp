import React, { useState, useEffect } from 'react';
import { View,
        Text,
        SafeAreaView,
    } from 'react-native';
import styles  from './styles';
import { formatDuration } from './helper';
import { Feather as Icon } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';


export default Monitor = (props) => {
    const { distance, pace } = props;

    const [duration, setDuration] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => setDuration(prev => prev + 1),1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                 <Svg style={styles.progress}>
                    <Path stroke="#EBEDF8" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" />
                    <Path stroke="#00ca9d" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" strokeDasharray={"300"} strokeDashoffset="300" />
                </Svg>
                <View style={styles.progressLabel}>
                  <Text style={styles.distanceText}>{distance}</Text>  
                </View>
            </View>
            <View style={styles.rows}>
                <View style={styles.row}>
                    <Icon name="watch" color="white" size={28} />
                    <Text style={styles.label}>{formatDuration(pace)}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="clock" color="white" size={28} />
                    <Text style={styles.label}>{formatDuration(duration)}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}