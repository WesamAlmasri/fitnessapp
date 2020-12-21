import { StyleSheet, Dimensions } from 'react-native';

height = Dimensions.get("window").height;
width = Dimensions.get("window").width;

export default styles = StyleSheet.create({
    ActivityIndicator: {
        flex: 1,
        backgroundColor: '#29252b',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    shareBtn: {
        position: "absolute",
        height: 50,
        width: 100,
        borderRadius: 30,
        top: 5,
        right: 5,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    },
    shareText: {
        color: "white",
        fontSize: 25,
    }
  });