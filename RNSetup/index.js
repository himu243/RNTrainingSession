/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator, {myFunc} from './src/navigation';
import {name as appName} from './app.json';

myFunc();

AppRegistry.registerComponent(appName, () => AppNavigator);

/*

*/
