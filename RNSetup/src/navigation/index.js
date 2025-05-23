// In App.js in a new project

import * as React from 'react';
import {Image} from 'react-native';
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
import {AppContext, AppStateProvider} from '../context';
import SplashScreen from '../screens/Splash';

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

const RootTabNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === NAVIGATION_ROUTE_NAME.TAB.HOME_TAB) {
            console.log('focused: ', focused);
            console.log('color: ', color);
            console.log('size: ', size);

            icon = focused
              ? require('../icons/map_on.png')
              : require('../icons/map_off.png');
          } else if (route.name === NAVIGATION_ROUTE_NAME.TAB.PROFILE_TAB) {
            icon = focused
              ? require('../icons/profile_on.png')
              : require('../icons/profile_off.png');
          }
          return (
            <Image
              source={icon}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
      })}>
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
  const {appState} = React.useContext(AppContext);

  if (appState.isLoggedIn) {
    return <RootTabNavigator />;
  } else if (appState.isSplashLoading) {
    return <SplashScreen />;
  } else {
    return <AuthStack />;
  }
}
export const myFunc = () => {};
// export const myFunc1 = () => {};
// export const myFunc2 = () => {};
// export const myFunc3 = () => {};
// export const myFunc4 = () => {};
// export const myFunc5 = () => {};
// export const myFunc6 = () => {};

const AppNavigator = () => {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppStateProvider>
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
