import React from 'react';
import { View,
        Text,
      } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';



export default LabeledCirlcle = (props) => {
    const {label, value} = props;

    return (
        <View style={styles.item}>
            <Text style={styles.label}>{label}</Text>
            <LinearGradient 
                style={styles.circle}
                colors={['#3793de', '#0c5b9c', '#3793de']}
            >
                <Text style={styles.value}>{value}</Text>
            </LinearGradient>
        </View>
    );
}