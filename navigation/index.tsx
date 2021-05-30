/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import * as React from 'react';
 import { ColorSchemeName } from 'react-native';
 //import { Colors } from 'react-native/Libraries/NewAppScreen';
 
 import NotFoundScreen from '../screens/NotFoundScreen';
 import { RootStackParamList } from '../types';
 import MainTabNavigator from './MainTabNavigator';
 import LinkingConfiguration from './LinkingConfiguration';
 import Colors from '../constants/Colors';
 import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, FontAwesome5, } from '@expo/vector-icons';
 import { View } from '../components/Themed';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from "../screens/ContactsScreen";

 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 // A root stack navigator is often used for displaying modals on top of all other content
 // Read more here: https://reactnavigation.org/docs/modal
 const Stack = createStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator screenOptions={{ 
       headerStyle:{
           backgroundColor: Colors.light.tint,
           elevation:0,
           shadowOpacity:0,
       },
       headerTintColor: Colors.light.background,
       headerTitleAlign: 'left',
       headerTitleStyle:{
         fontWeight:'bold',
       }
     }}>
       <Stack.Screen name="Root" component={MainTabNavigator}
       options={{
         title:'ThatApp',
         headerRight:() =>(
           <View style={{
             flexDirection:'row',
             backgroundColor: Colors.light.tint,
             width:60,
             justifyContent:'space-between',
             marginRight:10,
           }}>
             <MaterialIcons name="search" size={25} color="white" />
             <MaterialCommunityIcons name='dots-vertical' size={25} color="white" />
           </View>
 
         )
       }} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route })  => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{
              flexDirection: 'row',
              backgroundColor: Colors.light.tint,
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
            </View>
          )
        })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          //title:'ThatApp',
          headerRight:() =>(
            <View style={{
              flexDirection:'row',
              backgroundColor: Colors.light.tint,
              width:60,
              justifyContent:'space-between',
              marginRight:10,
            }}>
              <MaterialIcons name="search" size={25} color="white" />
              <MaterialCommunityIcons name='dots-vertical' size={25} color="white" />
            </View>
  
          )
        }}
        
      />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
 