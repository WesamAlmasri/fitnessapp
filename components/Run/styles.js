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
  });