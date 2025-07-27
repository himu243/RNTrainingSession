import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const TestScreen = () => {
  let val = 2;
  const [todoListData, setToDoListData] = useState({
    isLoading: false,
    data: [],
    error: null,
  }); // Current

  // const prevTodoState = useCustomHook(todoListData);

  const myVal = useRef(0);
  // const myCustomisedData = useMemo(() => {
  //   const custData = myFxnToCustData(todoListData);
  // }, [todoListData]);

  // const onClick = () => {
  //   myVal.current = 2;
  // };

  const getTodoListData = async () => {
    try {
      setToDoListData(prevState => ({...prevState, isLoading: true}));

      const response = await fetch('https://dummyjson.com/todos');
      console.log('response: ', response);

      const data = await response.json();
      console.log('response data: ', data);

      if (data?.todos) {
        setToDoListData(prevState => ({
          ...prevState,
          isLoading: false,
          data: data?.todos,
        }));
      }
    } catch (error) {
      console.log('Error getting data: ', error);
      setToDoListData(prevState => ({
        ...prevState,
        isLoading: false,
        data: [],
        error: 'Error occured',
      }));
    }
  };

  useEffect(() => {
    getTodoListData();
  }, []);

  const renderListItem = useCallback(({item}) => {
    return <ItemComponent data={item} />;
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={todoListData?.data || []}
        renderItem={renderListItem}
      />
    </View>
  );
};

export default TestScreen;

const ItemComponent = ({data}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text>{data?.todo}</Text>
      <Text>{`${data?.completed}`}</Text>
    </View>
  );
};

// function abc(params) {
//   return () => {
//     console.log(params);
//   };
// }

// function Vehicle() {
//   console.log(`Vehicle has ${this.wheels} wheels`);
// }

// const car = new Vehicle();

// const obj = {
//   myVal: 1,
//   fnx: function () {
//     console.log('val here is: ', this.myVal);
//   },
// };

// obj.fnx(); // 1

// const yz = obj.fnx;
// yz(); // undefined

// const MyOrgComponent = () => {
//   return <Text>{'this is react native'}</Text>;
// };

// const MyHigherOrderFxn = ({children}) => {
//   return <>{children}</>;
// };

// <MyHigherOrderFxn>
//   <Text>{'this is react native'}</Text>
// </MyHigherOrderFxn>;

// const useCustomHook = currState => {
//   const [prevState, setPrevState] = useState(null);
//   const currentStateInHook = useRef(null);

//   // useEffect(() => {
//   //     currentStateInHook.current = currState;
//   // }, []);

//   useEffect(() => {
//     setPrevState(currentStateInHook.current);
//     // prevState.current = currentStateInHook.current;
//     currentStateInHook.current = currState;
//   }, [currState]);

//   return prevState;
// };
