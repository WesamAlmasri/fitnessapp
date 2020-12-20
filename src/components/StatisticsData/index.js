import React, { useState, useEffect } from 'react';
import { View,
        Text,
        SafeAreaView,
        FlatList,
        ActivityIndicator,
        Alert,
      } from 'react-native';
import { formatDuration, formatPace, toDateString, toTimeDeltaString } from '../../generalHelper';
import DetialRow from '../DetialRow';
import LabeledRec from '../LabeledRec';
import { avgPace, dataPerKm } from './helper';
import styles from './styles';

      

export default StatisticsData = (props) => {
    const { data } = props.route.params;
    const [ready, setReady] = useState(false);
    const [analyzedDataPerKm, setAnalyzedDataPerKm] = useState({});

    
    useEffect(() => {
        const data_Per_Km = dataPerKm(data);
        if(data_Per_Km){
            setAnalyzedDataPerKm(data_Per_Km);
            setReady(true);
        }else{
            Alert.alert('Error', "Failed to fetch training's data");
            setReady(true);
        }
    },[]);


    const flatListHeader = () => {
        return(
            <>
                <View style={styles.row}>
                    <LabeledRec 
                        label="Target Distacne"
                        value={data.targetDistance}
                    /> 
                    <LabeledRec 
                        label="Distance Covered"
                        value={data.distances[data.distances.length - 1] > 1000 ? `${data.distances[data.distances.length - 1]/ 1000} Km`: `${data.distances[data.distances.length - 1]} meter`}
                    /> 
                </View>
                <View style={styles.row}>
                    <LabeledRec 
                        label="Total Time"
                        value={`${formatDuration((data.positions[data.positions.length - 1].timestamp - data.positions[0].timestamp)/1000)} ${(data.positions[data.positions.length - 1].timestamp - data.positions[0].timestamp)/60000 < 60 ? 'minute' : 'hours'}`}
                    /> 
                    <LabeledRec 
                        label="Avg Pace"
                        value={`${formatPace(avgPace(data.distances[data.distances.length - 1], data.positions[data.positions.length - 1].timestamp - data.positions[0].timestamp))}  min/Km`}
                    /> 
                </View>
            </>
        );
    }
    
    return (
        <>
            {!ready ? (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
                <SafeAreaView style={styles.container}>
                    <View style={styles.date}>
                        <Text style={styles.textDate}>{toDateString(data.positions[0].timestamp)}</Text>
                        <Text style={styles.textTime}>{toTimeDeltaString(data.positions[0].timestamp, data.positions[data.positions.length - 1].timestamp)}</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <FlatList 
                            data={analyzedDataPerKm}
                            renderItem={({item}) => 
                                <DetialRow 
                                    delta={item.delta}
                                    period={item.period}
                                    time={item.time}
                                    avgPace={item.avgPace}
                                    paces_distances={item.paces_distances}
                                />
                            }
                            ListHeaderComponent={flatListHeader}
                            keyExtractor={(item) => item.id.toString()}
                        />       
                    </View>
                </SafeAreaView>
            )}
        </>
        
    );
}