import React, { useState } from 'react';
import { View,
        Text,
        SafeAreaView,
        TouchableOpacity,
      } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputDialog } from './helper';



export default HomeComponent = (props) => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [joinCodeText, setJoinCodeText] = useState('');

    const handleJoinTraining = () => {
        if(!joinCodeText)return;
        props.navigation.navigate('Tracking', {code: joinCodeText});
        setDialogVisible(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#ff0808', '#960000', '#ff0808']} style={styles.header}>
                <Text style={styles.headerText}>Run For Better Health</Text>
            </LinearGradient>
            <View style={styles.body}>
                <TouchableOpacity onPress={() => props.navigation.navigate('New Training')} style={styles.row}>
                    <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>Start New Trainig Run</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Trainings List')} style={styles.row}>
                    <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>History of Trainings</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDialogVisible(true)} style={styles.row}>
                   <LinearGradient colors={['#0091ff', '#04538f', '#0091ff']} style={styles.row}>
                        <Text style={styles.rowText}>Track a Friend's Training</Text>
                    </LinearGradient> 
                </TouchableOpacity>
                <TextInputDialog 
                    visible={dialogVisible}
                    handleCancel={() => setDialogVisible(false)}
                    handleEnter={handleJoinTraining}
                    input={joinCodeText}
                    setInput={setJoinCodeText}
                />
            </View>
        </SafeAreaView>
    );
}