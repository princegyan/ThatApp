import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        justifyContent:'space-between',
        padding:3,
        flexWrap: 'wrap',

    },
    midContainer:{
        flexDirection:'column',
        justifyContent:'space-around',

    },
    leftContainer:{
      flexDirection:'row',

    },
    avatar:{
        width: 61,
        height: 61,
        borderRadius:50,
        marginRight: 10,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage:{
        width:200,
        flexWrap:"wrap",
        fontSize:16,
        color: 'grey'
    },
    time:{
        //flexDirection:"row",
        //justifyContent:'space-between',
        fontSize:14,
        fontWeight:'normal',
        color: 'grey',
        alignSelf:'baseline',
        marginRight:5,
        marginTop:9,

    }
});
export default styles;
