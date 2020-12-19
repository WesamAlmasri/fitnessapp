import { StyleSheet, Dimensions } from 'react-native';


window_height =  Dimensions.get("window").height;
window_width =  Dimensions.get("window").width;

export default styles = StyleSheet.create({
    container: {
        backgroundColor: "#29252b",
        alignItems: "center",
    },
    progressContainer: {
        marginTop: 10,
    },
    progress: {
        width: 220,
        height: 170,
    },
    progressLabel: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    distanceText: {
        fontSize: 55,
        color: "white",
    },
    unitText: {
        fontSize: 30,
        color: "white",
    },
    targetContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 270,
    },
    zeroDistanceText: {
        fontSize: 20,
        color: "white",
    },
    percentageText: {
        fontSize: 20,
        color: "white",
    },
    targetDistanceText: {
        fontSize: 20,
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