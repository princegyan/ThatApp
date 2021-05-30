import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
  } from "react-native";
import {ChatRoom} from '../../types'
import styles from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';
import Divider from 'react-native-divider';



export type ChatListItemProps ={
    chatRoom: ChatRoom;
}

const ChatListItem = (props:ChatListItemProps) => {
    const {chatRoom} = props;

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate('ChatRoom', {
          id: chatRoom.id,
          name: user.name,
        })
      }
    
    return(
        
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar}/>

                <View style={styles.midContainer}>
                    <Text ellipsizeMode={"tail"} style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} ellipsizeMode={"tail"} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
                <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("M/D/YY")}</Text>
      
            </View>

            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.3,
                    alignItems:'center',
                    //width:270,
                    marginLeft:60, 

                 }}
            />

        </View>

    </TouchableWithoutFeedback>
    )
};
export default ChatListItem;