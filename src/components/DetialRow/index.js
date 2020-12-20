import React from 'react';
import { View,
        Text,
      } from 'react-native';
import styles from './styles';
import { Chart, Line, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import { formatPace } from '../../generalHelper';

export default DetialRow = (props) => {
    const {delta, period, time, paces_distances, avgPace} = props;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{delta} Km   ( {period} )</Text>
            <View style={styles.row}>
                <Text style={styles.arrowLabel}>Time</Text>
                <View style={styles.arrow} >
                    <Text style={styles.arrowLabel}>{time} (min)</Text>
                </View>
            </View>
            <View style={styles.row}>
                <Chart
                    style={{ height: 150, width: '100%' }}
                    disableGestures={true}
                    viewport={{initialOrigin: {y:0}, size: {height: 2*avgPace}}}
                    data={paces_distances}
                    padding={{ left: 30, bottom: 15, right: 10, top: 5 }}
                >
                    <VerticalAxis tickValues={[avgPace - avgPace*0.5, avgPace, avgPace + avgPace*0.5]} theme={{labels: { label: {color: '#fff'}, formatter: (v) => formatPace(v) }, ticks: { visible: false } }} />
                    <HorizontalAxis tickCount={10} theme={{ labels: {label: {color: "#fff"}, formatter: (v) => v.toFixed(1)}, ticks: { visible: false } }} />
                    <Line theme={{ stroke: { color: '#c9144e', width: 2 } }} />
                    <Line data={[{x:0, y:avgPace}, {x:100, y:avgPace}]} theme={{ stroke: { color: '#fff200', width: 1 } }} />
                    <Text style={styles.chartLabel}>Pace (min/km)</Text>
                </Chart>
            </View>
        </View>
    );
}