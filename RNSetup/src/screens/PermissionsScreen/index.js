import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  Alert,
  Image,
  NativeModules,
  DeviceEventEmitter,
} from 'react-native';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {GreetingsModule} = NativeModules;

const PermissionScreen = () => {
  let watchIdRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener(
      'MyNativeEvent',
      data => {
        console.log('Data we get from Native: ', JSON.stringify(data));
      },
    );
    return () => {
      subscription.remove();
      if (watchIdRef.current) {
        Geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, []);

  const getPermission = type => {
    switch (type) {
      case 'camera':
        return Platform.select({
          ios: PERMISSIONS.IOS.CAMERA,
          android: PERMISSIONS.ANDROID.CAMERA,
        });
      case 'location':
        return Platform.select({
          ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        });
      default:
        return null;
    }
  };

  const handleCheckAndRequestPermission = async permission => {
    try {
      const result = await check(permission);
      console.log('Result of permission is: ', result);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Permission Unavailable');
          break;
        case RESULTS.GRANTED:
        case RESULTS.LIMITED:
          Alert.alert('Permission already granted');
          break;
        case RESULTS.BLOCKED:
          Alert.alert('Permission blocked by OS');
          break;
        case RESULTS.DENIED:
          const res = await request(permission);
          handleUserPermissionResult(res);
          break;
      }
    } catch (error) {
      console.log('Permission not supported: ', error);
    }
  };

  const handleUserPermissionResult = res => {
    if (res === RESULTS.GRANTED) {
      Alert.alert('Permission is Granted');
    } else if (res === RESULTS.DENIED) {
      Alert.alert('Permission is Denied');
    }
  };

  const handlePermission = async type => {
    const permission = getPermission(type);
    if (permission) {
      await handleCheckAndRequestPermission(permission);
      if (type === 'location') {
        addLocationListener();
      } else if (type === 'camera') {
        handleCamera();
      }
    } else {
      Alert.alert('Permission not application');
    }
  };

  const addLocationListener = () => {
    if (!watchIdRef.current) {
      const successCb = response => {
        console.log('Location Data: ', response);
      };
      const failureCb = error => {
        console.log('Error getting Location Data: ', error);
      };
      watchIdRef.current = Geolocation.watchPosition(successCb, failureCb, {
        enableHighAccuracy: false,
      });
      console.log('watchIdRef.current: ', watchIdRef.current);
    }
  };

  const handleCamera = async () => {
    const result = await launchCamera({
      saveToPhotos: true,
    });
    if (result?.assets) {
      setImage(result?.assets[0]?.uri);
    }
    console.log('result: ', result);
  };

  const onPressGreetings = async () => {
    console.log('NativeModules: ', NativeModules.GreetingsModule);

    GreetingsModule?.showMessage('Hello Himanshu');
  };

  const onGetBatteryPercentage = async () => {
    console.log('NativeModules: ', NativeModules.GreetingsModule);

    const getBatteryLevel =
      await NativeModules.GreetingsModule?.getBatteryLevel();

    console.log('getBatteryLevel: ', getBatteryLevel);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{marginVertical: 8}}>
        <Button title="Camera" onPress={() => handlePermission('camera')} />
      </View>
      <Button title="Location" onPress={() => handlePermission('location')} />

      <Image
        style={{height: 100, width: 200, resizeMode: 'contain'}}
        source={{uri: image}}
      />

      <Button title="Greetings" onPress={onPressGreetings} />
      <Button title="Get Battery level" onPress={onGetBatteryPercentage} />
    </View>
  );
};

export default PermissionScreen;
