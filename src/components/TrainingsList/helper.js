import React from 'react';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { toDateStringWithoutSepDay } from '../../generalHelper';






export const renderItem = ( item , navigation) => (
    <ListItem
        item={item} 
        navigation={navigation}
    />
)

export const ListItem = ({ item, navigation }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Statistics', { data: item })} style={styles.row}>
            <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                <Text style={styles.rowText}>{toDateStringWithoutSepDay(item.positions[0].timestamp)}</Text>
                {/* <Text style={styles.rowText}>{toTimeDeltaString(item.positions[0].timestamp, item.positions[item.positions.length - 1].timestamp)}</Text> */}
            </LinearGradient>
        </TouchableOpacity>
        
    );
}



const styles = StyleSheet.create({
    row: {
        height: 60,
        width: 110,
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    rowText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
  });
  