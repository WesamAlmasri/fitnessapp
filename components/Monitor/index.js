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
    const { targetDistance, duration } = props;
    const distance = props.distance || 0;
    const pace = props.pace || 0;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.progressContainer}>
                 <Svg style={styles.progress}>
                    <Path stroke="#EBEDF8" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" />
                    <Path stroke="#00ca9d" strokeWidth={20} d="M10,110 a50,50 0 1 1 200,0" strokeDasharray={315} strokeDashoffset={315 - (315 * distance /( targetDistance * 1000))} />
                </Svg>
                <View style={styles.progressLabel}>
                  <Text style={styles.distanceText}>{distance < 1000 ? String(_.floor(distance, 2)) : String(_.floor(distance / 1000, 2)) }</Text>  
                  <Text style={styles.unitText}>{distance < 1000 ? 'm' : 'Km'  }</Text>
                  <View style={styles.targetContainer}>
                    <Text style={styles.zeroDistanceText}>      0</Text>
                    <Text style={styles.percentageText}>    {(distance / 10) / targetDistance || 0}%</Text>
                    <Text style={styles.targetDistanceText}>{String(targetDistance) + 'Km'  }</Text>
                  </View>
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