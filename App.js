import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen1 from './views/Screen1';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './views/Screen2';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='S1'>
          <Stack.Screen name='S1' component={Screen1}
          options={{
            headerStyle:{
              backgroundColor:"white"
            },
            headerTintColor:"B8860B",
            headerTitleStyle:{
              fontWeight:'bold',
              fontSize:25
            },
            headerTitleAlign:'center',
            title:"Home"

          }}
          />

         <Stack.Screen name='S2' component={Screen2}
           options={{
            headerStyle:{
              backgroundColor:"white"
            },
            headerTintColor:"B8860B",
            headerTitleStyle:{
              fontWeight:'bold',
              fontSize:25
            },
            headerTitleAlign:'center',
            title:"Back",
         
           
          }}
         
         />
          
        </Stack.Navigator>
      </NavigationContainer>
  
    
      </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
   // backgroundColor: '#fff',
    alignItems: 'center',
   // marginTop:20,
    width:"100%",
   height:"100%",
   // backgroundColor:"blue"
    //justifyContent: 'center',
  },
});
