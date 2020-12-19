import React from 'react';
import { View,
        Text,
      } from 'react-native';
import styles from './styles';

export default DetialRow = (props) => {
    const {delta, period, time, avgPace, totalAvgPace, totalTime} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{delta} Km   ( {period} )</Text>
            <View style={styles.row}>
                <Text style={styles.arrowLabel}>Time (min)</Text>
                <View style={styles.arrow} >
                    <Text style={styles.arrowLabel}>{time}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.arrowLabel}>Avg Pace (min/Km)</Text>
                <View style={styles.arrow} >
                    <Text style={styles.arrowLabel}>{avgPace}</Text>
                </View>
            </View>
        </View>
    );
}