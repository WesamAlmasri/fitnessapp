import { StyleSheet, Dimensions } from 'react-native';


window_height =  Dimensions.get("window").height;

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#29252b"
    },
    distanceText: {
        fontSize: 72,
        color: "white",
    },
    rows: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        marginBottom: 30,
    },
    row: {
        flexDirection: "row",
    },
    label: {
        fontSize: 25,
        color: "white",
        marginLeft: 20,
    },
  });