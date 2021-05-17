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
 import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
 import { View } from '../components/Themed';
 
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
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
 