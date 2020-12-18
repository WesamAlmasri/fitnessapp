import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#29252b",
      alignItems: "center",
    },
    row: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-around",
      marginTop: 25,
  },
  date: {
    marginTop:20,
    alignItems: "center",
  },
  textDate: {
    color: "white",
    fontSize: 25,
  },
  textTime: {
    color: "white",
    fontSize: 20,
  },
  detailsContainer: {
    width: "100%",
    margin: 15,
  },
});
  