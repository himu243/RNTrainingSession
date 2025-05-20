// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_ROUTE_NAME} from '../constants';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

const {HOME, PROFILE} = NAVIGATION_ROUTE_NAME;

// const {Navigator, Screen} = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        // options={{
        //   headerShown: false,
        // }}
        // options={{title: 'Overview'}}
      />
      <Stack.Screen
        name={PROFILE}
        component={ProfileScreen}
        // initialParams={{itemId: 11, otherParams: 'Hello there'}}
      />
    </Stack.Navigator>
  );
}
//   screenOptions={{
//     headerStyle: {backgroundColor: 'tomato'},
//   }}
export const myFunc = () => {};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default AppNavigator;
// export default function AppNavigator() {
// return (
//     <NavigationContainer>
//       <RootStack />
//     </NavigationContainer>
//   );
// }

// const MyComponent = ({children}) => {
//   return (
//     <View>
//       <View>{children}</View>
//     </View>
//   );
// };

// const RootApp = () => {
//   return (
//     <View>
//       <View>
//       <Text>{'Himanshu'}</Text>
//       </View>
//     </View>
//     {/* <MyComponent>
//       <Text>{'Himanshu'}</Text>
//     </MyComponent> */}
//   );
// };

// export default RootApp;
