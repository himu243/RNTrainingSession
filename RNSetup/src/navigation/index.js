// In App.js in a new project

import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION_ROUTE_NAME} from '../constants';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import DetailsScreen from '../screens/Details';
import SettingsScreen from '../screens/Settings';

const {LOGIN, FORGET_PASSWORD, HOME, DETAILS, PROFILE, SETTINGS, TAB} =
  NAVIGATION_ROUTE_NAME;

// const {Navigator, Screen} = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={FORGET_PASSWORD} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={DETAILS} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PROFILE} component={ProfileScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={TAB.HOME_TAB}
        component={HomeStack}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Georgia',
            fontWeight: '600',
          },
        }}
      />
      <Tab.Screen
        name={TAB.PROFILE_TAB}
        component={ProfileStack}
        options={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Georgia',
            fontWeight: '600',
          },
        }}
      />
    </Tab.Navigator>
  );
};

function RootStack() {
  const [isLogin, setIsLogin] = React.useState(false);

  if (isLogin) {
    return <RootTabNavigator />;
  } else {
    return <AuthStack />;
  }
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name={HOME}
  //         component={HomeScreen}
  //         // options={{
  //         //   headerShown: false,
  //         // }}
  //         // options={{title: 'Overview'}}
  //       />
  //       <Stack.Screen
  //         name={PROFILE}
  //         component={ProfileScreen}
  //         // initialParams={{itemId: 11, otherParams: 'Hello there'}}
  //       />
  //     </Stack.Navigator>
  //   );
}
//   screenOptions={{
//     headerStyle: {backgroundColor: 'tomato'},
//   }}
export const myFunc = () => {};
// export const myFunc1 = () => {};
// export const myFunc2 = () => {};
// export const myFunc3 = () => {};
// export const myFunc4 = () => {};
// export const myFunc5 = () => {};
// export const myFunc6 = () => {};

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
