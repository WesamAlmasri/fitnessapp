import React from 'react';
import { View,
        Text,
        SafeAreaView,
      } from 'react-native';
import DetialRow from '../DetialRow';
import LabeledCirlcle from '../LabeledCirlcle';
import LabeledRec from '../LabeledRec';
import styles from './styles';



export default StatisticsData = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.date}>
                <Text style={styles.textDate}>2020/18/12</Text>
                <Text style={styles.textTime}>3:00 - 4:30</Text>
            </View>
            <View style={styles.row}>
                <LabeledRec 
                    label="Target Distacne"
                    value="100 "
                /> 
                <LabeledRec 
                    label="Distance Covered"
                    value="90 Km"
                /> 
            </View>
            <View style={styles.row}>
                <LabeledRec 
                    label="Time Period"
                    value="53:32 min"
                /> 
                <LabeledRec 
                    label="Avg Pace"
                    value="05:20 min/Km"
                /> 
            </View>
            <View style={styles.detailsContainer}>
                <DetialRow 
                    delta="0 - 1"
                    period="3:30 - 4:00"
                    time="00:30"
                    avgPace="04:32"
                    totalTime="55:00"
                    totalAvgPace="5:00"
                />
                <DetialRow 
                    delta="0 - 1"
                    period="3:30 - 4:00"
                    time="00:30"
                    avgPace="04:32"
                    totalTime="55:00"
                    totalAvgPace="5:00"
                />
                <DetialRow 
                    delta="0 - 1"
                    period="3:30 - 4:00"
                    time="00:30"
                    avgPace="04:32"
                    totalTime="55:00"
                    totalAvgPace="5:00"
                />
            </View>
        </SafeAreaView>
    );
}