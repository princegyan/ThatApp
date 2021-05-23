import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
        //width:'100%',
        //justifyContent:'space-between',
        //padding:5,
        //flexWrap: 'wrap',
        //marginTop:5,
        //paddingLeft:5,
        //width:"100%",
        


    },
    midContainer:{
        //justifyContent:'space-around',
        flexDirection:'column',
        marginTop:17,
    },
    leftContainer:{
      flexDirection:'row',
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius:50,
        marginRight: 10,
        marginTop:10,
    },
    username:{
        width:230,
        fontWeight: 'bold',
        fontSize: 18,
    },
    lastMessage:{
        width:235,
        flexWrap:"wrap",
        fontSize:16,
        color: 'grey',
        //marginTop:5,
        
    },
    time:{
        flexDirection:'row',
        fontSize:12,
        color: 'grey',
        alignSelf: 'baseline',
        //marginRight:2,
        marginTop:25,    }
});
export default styles;