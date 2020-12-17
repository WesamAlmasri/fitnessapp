import React, { useState, useEffect } from 'react';
import { View,
        Text,
        SafeAreaView,
    } from 'react-native';
import styles  from './styles';
import { formatPace, formatDuration } from './helper';
import { Feather as Icon } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import * as _ from 'lodash';


export default Monitor = (props) => {
    const { distance, pace, targetDistance, started } = props;

    const [duration, setDuration] = useState(0);

    useEffect(() => {
        let interval;
        if(started)
            interval = setInterval(() => setDuration(prev => prev + 1),1000);
        
        return () => clearInterval(interval);
    }, [started])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.progressContainer}>
                 <Svg style={styles.progress}>
                    <Path stroke="#EBEDF8" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" />
                    <Path stroke="#00ca9d" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" strokeDasharray="360" strokeDashoffset="180" />
                </Svg>
                <View style={styles.progressLabel}>
                  <Text style={styles.distanceText}>{distance < 1000 ? String(_.floor(distance, 2)) : String(_.floor(distance / 1000, 2)) }</Text>  
                  <Text style={styles.unitText}>{distance < 1000 ? 'm' : 'Km'  }</Text>
                </View>
            </View>
            <View style={styles.rows}>
                <View style={styles.row}>
                    <Icon name="watch" color="white" size={28} />
                    <Text style={styles.label}>{formatPace(pace)}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="clock" color="white" size={28} />
                    <Text style={styles.label}>{formatDuration(duration)}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}