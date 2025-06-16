import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = (key, value) => {
  let asyncVal = `${value}`;
  if (typeof value === 'object') {
    asyncVal = JSON.stringify(value);
  }
  return AsyncStorage.setItem(key, asyncVal);
};

export const getItem = async key => {
  const value = await AsyncStorage.getItem(key);
  return value;
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error in removing item: ', error);
  }
};

export const STORAGE_KEYS = {
  IS_LOGGED_IN: 'isLoggedIn',
  USER_DATA: 'USER_DATA',
  TODO_LIST: 'TODO_LIST',
};
