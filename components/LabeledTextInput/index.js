import React from 'react';
import { View,
        Text,
        TextInput,
    } from 'react-native';
import styles  from './styles';


export default LabelledTextInput = (props) => {
    const {inputLabel, placeholder, keyboardType, value, onChangeText} = props;
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{inputLabel}</Text>
            <TextInput 
                    style={styles.textInput}
                    placeholder={placeholder}
                    textAlign="center"
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={onChangeText}
                /> 
        </View>
    );
}