import React from 'react';
import { View,
        Text,
      } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';



export default LabeledRec = (props) => {
    const {label, value} = props;

    return (
        <View style={styles.item}>
            <Text style={styles.label}>{label}</Text>
            <LinearGradient 
                style={styles.circle}
                colors={['#4b64d1', '#071c75', '#4b64d1']}
            >
                <Text style={styles.value}>{value}</Text>
            </LinearGradient>
        </View>
    );
}