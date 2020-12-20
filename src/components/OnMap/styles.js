import { StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#29252b",
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  pinStart: {
    width: 15, 
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#8f6e1b",
  },
  pinEnd: {
    width: 15, 
    height: 15,
    backgroundColor: "#8f6e1b",
  },
});