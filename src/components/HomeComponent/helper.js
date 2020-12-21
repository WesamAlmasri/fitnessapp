import React, { useState } from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";




export const TextInputDialog = (props) => {
    const { visible, handleCancel, handleEnter, input, setInput } = props;

    return (
        <View>
          <Dialog.Container visible={visible}>
            <Dialog.Title>Track Friend's Training</Dialog.Title>
            <Dialog.Description>
              Please type the training code to join.
            </Dialog.Description>
            <Dialog.Input onChangeText ={setInput} value={input} />
            <Dialog.Button label="Enter" onPress={handleEnter} />
            <Dialog.Button label="Cancel" onPress={handleCancel} />
          </Dialog.Container>
        </View>
      );
}