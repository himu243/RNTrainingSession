import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION_ROUTE_NAME} from '../../constants';
import {getPostsData} from '../../api/homeApi';

function HomeScreen({route}) {
  const navigation = useNavigation();
  console.log('route.params: ', route.params);

  const [screenData, setScreenData] = useState({
    isLoading: true,
    data: [],
    errorLoading: false,
  });

  const [state, setState] = useState(1);
  const [name, setName] = useState('himanshu');

  useEffect(() => {
    initialiseData();
  }, []);

  const initialiseData = async () => {
    setScreenData(prevData => ({
      ...prevData,
      isLoading: true,
      errorLoading: false,
    }));

    try {
      const homeData = await getPostsData();

      setScreenData(prevData => ({
        ...prevData,
        data: homeData,
        isLoading: false,
        errorLoading: false,
      }));
    } catch (error) {
      setScreenData(prevData => ({
        ...prevData,
        data: null,
        isLoading: false,
        errorLoading: true,
      }));
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {screenData?.isLoading && <Text>{'Data Loading ......'}</Text>}
      {screenData.data &&
        screenData?.data
          ?.slice(0, 10)
          .map(post => <Text key={post?.id}>{post?.title}</Text>)}
      {screenData?.errorLoading && <Text>{'Error Loading Data'}</Text>}
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate(NAVIGATION_ROUTE_NAME.DETAILS)}
      />
    </View>
  );
}
export default HomeScreen;
