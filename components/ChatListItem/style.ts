import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        width:'100%',
        justifyContent:'space-between',
        padding:10,

    },
    midContainer:{
        justifyContent:'space-around'
    },
    leftContainer:{
      flexDirection:'row',
    },
    avatar:{
        width: 65,
        height: 65,
        borderRadius:50,
        marginRight: 10,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage:{
        fontSize:16,
        color: 'grey'
    },
    time:{
        fontSize:16,
        color: 'grey'
    }
});
export default styles;
