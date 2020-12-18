import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 1,
      borderColor: "white",
      padding: 10,
    },
    label: {
        color: "white",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#564db8",
    },
    row: {
        flexDirection: "row",
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "white",
        marginBottom: 10,
    },
    arrowLabel: {
        color: "white",
    },
    arrow: {
        height: 25,
        width: 200,
        position: "absolute",
        left: 150,
        top: 5,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        alignSelf: "center",
        paddingLeft: 10,
        backgroundColor: "red",
    },
});
  