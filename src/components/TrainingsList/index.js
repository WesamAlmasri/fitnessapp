import React, { useState, useEffect } from 'react';
import { View,
        Text,
        SafeAreaView,
        ActivityIndicator,
        FlatList,
      } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { getData, TRAININGLISTNAME } from '../../generalHelper';
import { ListItem } from './helper';


export default TrainingsList = (props) => {
    const [ready, setReady] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        let cleaned = false;
        (async() => {
            let list = await getData(TRAININGLISTNAME);
            if(!cleaned){
                if(list){
                    setData(list);
                    setReady(true);
                }else{
                    setReady(true);
                    console.warn('No Data Found')
                }
            }
        return () => cleaned = false;
        })();
    }, [])

    

    return (
        <>
           {!ready ? (
                <View style={styles.ActivityIndicator}>
                    <ActivityIndicator size="large" color="white" />
                </View>
            ) : (
                <SafeAreaView style={styles.container}>
                    <LinearGradient colors={['#ff0808', '#960000', '#ff0808']} style={styles.header}>
                        <Text style={styles.headerText}>Training History</Text>
                    </LinearGradient>
                    <View style={styles.body}>
                        <FlatList 
                            data={data}
                            renderItem={({item}) => <ListItem item={item} navigation={props.navigation} />}
                            keyExtractor={item => item.positions[0].timestamp.toString()}
                        />
                    </View>
                </SafeAreaView>
            )} 
        </>
    );
}