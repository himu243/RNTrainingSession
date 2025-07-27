import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NAVIGATION_ROUTE_NAME} from '../../constants';
import {getPostsData} from '../../api/homeApi';
import {useDispatch, useSelector} from 'react-redux';
import {
  setAllPostsData,
  setIsLoadingPosts,
  setPostsData,
} from '../../redux/actions/homeActions';
import DismissKeyboard from '../../components/DismissKeyboard';
import {
  addCollectionSnapshot,
  COLLECTION_NAMES,
} from '../../helper/firestoreHelper';

function HomeScreen({route}) {
  const navigation = useNavigation();
  const documentUnsubscribe = useRef(null);

  console.log('route.params: ', route.params);

  const homeState = useSelector(state => state.homeData);
  const dispatch = useDispatch();

  // const [screenData, setScreenData] = useState({
  //   isLoading: true,
  //   data: [],
  //   errorLoading: false,
  // });

  const [state, setState] = useState(1);
  const [name, setName] = useState('himanshu');

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // initialiseData();
    // initialiseHomeData();
    const unsubscribe = addCollectionSnapshot(
      COLLECTION_NAMES.COURSES,
      data => {
        setCourses(data);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const initialiseHomeData = async () => {
    dispatch(setAllPostsData());
    // // 1. Set isLoadingPosts in homeReducer to TRUE
    // const loadingAction = setIsLoadingPosts();
    // dispatch(loadingAction);
    // try {
    //   const posts = await getPostsData();
    //   // 2.
    //   const setPostsAction = setPostsData(posts);
    //   dispatch(setPostsAction);
    // } catch (error) {
    //   console.log('error: ', error);
    // }
  };

  const initialiseCoursesData = () => {
    documentUnsubscribe.current = addCollectionSnapshot();
  };

  // const initialiseData = async () => {
  //   setScreenData(prevData => ({
  //     ...prevData,
  //     isLoading: true,
  //     errorLoading: false,
  //   }));

  //   try {
  //     const homeData = await getPostsData();

  //     setScreenData(prevData => ({
  //       ...prevData,
  //       data: homeData,
  //       isLoading: false,
  //       errorLoading: false,
  //     }));
  //   } catch (error) {
  //     setScreenData(prevData => ({
  //       ...prevData,
  //       data: null,
  //       isLoading: false,
  //       errorLoading: true,
  //     }));
  //   }
  // };
  const fxnToReturnCustomisedText = value => {
    const a = 10;
    return (
      <Text
        style={{
          borderWidth: 1,
          borderColor: 'black',
          width: '60%',
          height: 60,
          textAlign: 'center',
        }}>
        {`${a} ${value}`}
      </Text>
    );
  };

  console.log('home state: ', homeState);

  return (
    <DismissKeyboard>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        {/* {screenData?.isLoading && <Text>{'Data Loading ......'}</Text>}
      {screenData.data &&
        screenData?.data
          ?.slice(0, 10)
          .map((post, index) => <Text key={post?.id}>{post?.title}</Text>)}
      {screenData?.errorLoading && <Text>{'Error Loading Data'}</Text>}
      {fxnToReturnCustomisedText('My Text Component')}
      {fxnToReturnCustomisedText('My Text Component2')}
      <Button
        title={'Go to Details'}
        onPress={() => navigation.navigate(NAVIGATION_ROUTE_NAME.DETAILS)}
      /> */}
        {}
        {homeState?.isLoadingPosts && <Text>{'Data Loading ......'}</Text>}
        {homeState?.errorPosts && (
          <Text style={{color: 'red'}}>{`${homeState?.errorPosts}`}</Text>
        )}
        {courses &&
          courses
            ?.slice(0, 10)
            .map((course, index) => (
              <Text key={course?.title}>{course?.title}</Text>
            ))}
        {/* {screenData?.errorLoading && <Text>{'Error Loading Data'}</Text>} */}
        <Button
          title={'Go to Details'}
          onPress={() => navigation.navigate(NAVIGATION_ROUTE_NAME.DETAILS)}
        />
      </View>
    </DismissKeyboard>
  );
}
export default HomeScreen;
