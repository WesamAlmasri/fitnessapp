import { StyleSheet, Dimensions } from 'react-native';


window_height =  Dimensions.get("window").height;
window_width =  Dimensions.get("window").width;

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#29252b",
        alignItems: "center",
    },
    progress: {
        width: 220,
        height: 110,
        marginVertical: 20,
        backgroundColor: "red",
    },
    progressLabel: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    distanceText: {
        fontSize: 72,
        color: "white",
    },
    rows: {
        flexDirection: "row",
        height: 64,
    },
    row: {
        flexDirection: "row",
        marginHorizontal: 20,
    },
    label: {
        fontSize: 25,
        color: "white",
        marginLeft: 20,
    },
  });