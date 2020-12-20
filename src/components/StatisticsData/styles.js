import { StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  ActivityIndicator: {
    flex: 1,
    backgroundColor: '#29252b',
    alignItems: 'center',
    justifyContent: 'center',
},
  container: {
    flex: 1,
    backgroundColor: "#29252b",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  date: {
    marginTop:20,
    alignItems: "center",
    width: "80%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textDate: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
  },
  textTime: {
    color: "white",
    fontSize: 20,
  },
  mapButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 5,
    width: 100,
    marginTop:5,
  },
  textMap: {
    color: "white",
    fontSize: 20,
  },
  detailsContainer: {
    flex: 1,
    width: "100%",
    margin: 15,
  },
});
  