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
  });