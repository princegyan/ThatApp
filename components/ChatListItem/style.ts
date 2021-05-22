import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        //width:'100%',
        //justifyContent:'space-between',
        padding:3,
        flexWrap: 'wrap',


    },
    midContainer:{
        justifyContent:'space-around',
        flexDirection:'column',
    },
    leftContainer:{
      flexDirection:'row',
    },
    avatar:{
        width: 62,
        height: 62,
        borderRadius:50,
        marginRight: 10,
    },
    username:{
        width:200,
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage:{
        width:235,
        flexWrap:"wrap",
        fontSize:16,
        color: 'grey'
    },
    time:{
        flexDirection:'row',
        fontSize:12,
        color: 'grey',
        alignSelf: 'baseline',
        marginRight:5,
        marginTop:10,    }
});
export default styles;