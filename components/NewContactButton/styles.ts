import { StyleSheet } from 'react-native';
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#60ac22',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 90,
    left: 13,
    flexDirection:'row',
    fontWeight: 'bold',

  },
  content:{
      fontWeight: 'bold',

  },
})

export default styles;