import React from 'react';
import { View,
        Text,
        SafeAreaView,
        TouchableOpacity,
      } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';



export default HomeComponent = (props) => {
    
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#ff0808', '#960000', '#ff0808']} style={styles.header}>
                <Text style={styles.headerText}>Run For Better Health</Text>
            </LinearGradient>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Training')} style={styles.row}>
                    <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>Start New Trainig Run</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Training')} style={styles.row}>
                    <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>History of Trainings</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Training')} style={styles.row}>
                   <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>Track a Friend's Training</Text>
                    </LinearGradient> 
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}