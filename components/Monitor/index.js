import React, { useState, useEffect } from 'react';
import { View,
        Text,
        SafeAreaView,
    } from 'react-native';
import styles  from './styles';
import { formatDuration } from './helper';
import { Feather as Icon } from '@expo/vector-icons';


export default Monitor = (props) => {
    const { distance, pace } = props;

    const [duration, setDuration] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => setDuration(prev => prev + 1),1000);
        return () => clearInterval(interval);
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.distanceText}>{distance}</Text>
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