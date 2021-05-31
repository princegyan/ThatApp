import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const NewGroupButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
   // navigation.navigate('Contacts');
  }

  return (
    <View style={styles.container}>
        <View style={{justifyContent:'space-between'}}>
            <TouchableOpacity onPress={onPress}>
                <MaterialIcons 
                name="group" 
                size={26} 
                color="white" 
                />
          </TouchableOpacity>
      </View>
      <View style={{left:65,position:'absolute',}} ><Text style={{fontWeight: 'bold', fontSize:18,}}>New Group</Text></View>
    </View>

  )
}

export default NewGroupButton;