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
                size={22} 
                color="white" 
                />
          </TouchableOpacity>

      </View>

    </View>

  )
}

export default NewContactButton;