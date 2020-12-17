import React from 'react';
import {View,
        Text,
        TouchableOpacity,
      } from 'react-native';
import styles from './styles';



export default CircleButton = (props) => {
    const { radius, color, text, textColor, onPress, onLongPress } = props;
    

    return (
        <TouchableOpacity onPress={onPress} onLongPress={onLongPress} activeOpacity={0.5}>
            <View 
                style={[
                    styles.container, 
                    {width: radius, 
                    height: radius, 
                    borderRadius: radius,
                    backgroundColor: color,
                }]} 
            >
                <Text 
                    style={[
                        styles.text, 
                        {color: textColor,
                        fontSize: radius/4,
                    }]}
                >
                    {text}
                </Text>
            </View> 
        </TouchableOpacity>
        
    );
}