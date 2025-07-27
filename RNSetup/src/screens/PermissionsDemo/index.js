import React from 'react';
import {View, Text, Button, StyleSheet, Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  check,
  request,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

const PermissionsDemo = () => {
  const handlePermissionResult = result => {
    if (result === RESULTS.GRANTED) {
      Alert.alert('Permission granted');
    } else {
      Alert.alert('Permission denied');
    }
  };

  const checkAndRequestPermission = async permission => {
    try {
      const result = await check(permission);
      console.log(`Checking ${permission}:`, result);

      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('Not available on this device');
          break;
        case RESULTS.DENIED:
          const requestResult = await request(permission);
          handlePermissionResult(requestResult);
          break;
        case RESULTS.LIMITED:
        case RESULTS.GRANTED:
          Alert.alert('Permission granted');
          break;
        case RESULTS.BLOCKED:
          Alert.alert(
            'Permission blocked',
            'Please enable permission from Settings',
            [
              {text: 'Cancel', style: 'cancel'},
              {text: 'Open Settings', onPress: openSettings},
            ],
          );
          break;
      }
    } catch (error) {
      console.error('Permission check failed:', error);
    }
  };

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
      case 'photolibrary':
        return Platform.select({
          ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
          android:
            Platform.Version >= 33
              ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
              : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        });
      //   case 'microphone':
      //     return Platform.select({
      //       ios: PERMISSIONS.IOS.MICROPHONE,
      //       android: PERMISSIONS.ANDROID.RECORD_AUDIO,
      //     });
      //   case 'storage':
      //     return Platform.select({
      //       ios: null,
      //       android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      //     });
      //   case 'bluetooth':
      //     return Platform.select({
      //       ios: PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL,
      //       android: PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
      //     });
      //   case 'notifications':
      //     return Platform.select({
      //       ios: PERMISSIONS.IOS.NOTIFICATIONS,
      //       android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      //     });
      default:
        return null;
    }
  };

  const handleRequest = type => {
    const permission = getPermission(type);
    if (permission) {
      checkAndRequestPermission(permission);
    } else {
      Alert.alert('Permission not supported on this platform');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Permissions</Text>
      <Button title="Camera" onPress={() => handleRequest('camera')} />
      <Button title="Location" onPress={() => handleRequest('location')} />
      <Button
        title="Photo Library"
        onPress={() => handleRequest('photolibrary')}
      />
      {/* <Button title="Microphone" onPress={() => handleRequest('microphone')} />
      <Button
        title="Storage (Android)"
        onPress={() => handleRequest('storage')}
      />
      <Button title="Bluetooth" onPress={() => handleRequest('bluetooth')} />
      <Button
        title="Notifications"
        onPress={() => handleRequest('notifications')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default PermissionsDemo;
