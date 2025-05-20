/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator, {myFunc as myFunc1} from './src/navigation';
import {name as appName} from './app.json';

myFunc1();

AppRegistry.registerComponent(appName, () => AppNavigator);

/*

*/
