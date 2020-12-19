import React from 'react';
import { StyleSheet} from 'react-native';
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';






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
                <Text style={styles.rowText}>{toDateString(item.positions[0].timestamp)}</Text>
                <Text style={styles.rowText}>{toTimeDeltaString(item.positions[0].timestamp, item.positions[item.positions.length - 1].timestamp)}</Text>
            </LinearGradient>
        </TouchableOpacity>
        
    );
}

const toDateString = (timestamp) => {
    let d = new Date(   )
    return moment(timestamp).format("dddd,  DD MM YYYY");
}

const toTimeDeltaString = (start, end) => {
    return `${moment(start).format("hh:mm")} - ${moment(end).format("hh:mm")}`;
}



const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        height: 60,
        width: "100%",
        marginVertical: 10,
        borderRadius: 10,
        justifyContent: "space-around",
        alignItems: "center",
    },
    rowText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
  });
  