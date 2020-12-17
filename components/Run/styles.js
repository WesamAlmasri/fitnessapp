import { StyleSheet, Dimensions } from 'react-native';

height = Dimensions.get("window").height;
width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    startContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        bottom: height / 3,
    },
    inputContainer: {
        alignItems: "center",
        marginBottom: 30,
        backgroundColor: "#252d69",
        padding: 20,
    },
    inputLabel: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
    },
    textInput: {
        width: 300,
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 20,
        backgroundColor: "#ffffff",
    },
  });