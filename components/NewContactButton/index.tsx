import React from 'react';
import {TouchableOpacity, View, Text} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const NewContactButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
   // navigation.navigate('Contacts');
  }

  return (
    <View style={styles.container}>
        <View style={{justifyContent:'space-between'}}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons 
                name="ios-person-add-sharp" 
                size={23} 
                color="white" 
                />
          </TouchableOpacity>
          <View style={{left:50,position:'absolute',width:100,}} ><Text style={{fontWeight: 'bold', fontSize:18,}}>New contact</Text></View>
          <View style={{left:250,position:'absolute',width:100,}}><Ionicons name="qr-code-sharp" size={29} color="#128C7E" /></View>
      </View>

    </View>

  )
}

export default NewContactButton;