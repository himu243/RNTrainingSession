import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addTodoListItem} from '../../redux/actions/todoActions';

const TodoScreen = () => {
  const todoData = useSelector(state => state.todoData);
  const dispatch = useDispatch();

  const [textTodoItem, setTextTodoItem] = useState('');

  const onAddPress = () => {
    dispatch(addTodoListItem(textTodoItem));
  };

  const renderTodoItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
        }}>
        <TextInput value={item.title} />
      </View>
    );
  };

  console.log('todoData: ', todoData);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fcfcfc',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {todoData?.isLoadingLists && <Text>{'Loading Todo List Data ....'}</Text>}
      {todoData?.errorLoadingList && (
        <Text style={{color: 'red'}}>{todoData?.errorLoadingList}</Text>
      )}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={textTodoItem}
          onChangeText={setTextTodoItem}
          placeholder="Enter to do item to add"
          style={{padding: 8, margin: 8, borderWidth: 1}}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onAddPress}>
          <Text>{'Add'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoData?.todoList}
        renderItem={renderTodoItem}
      />
    </View>
  );
};

export default TodoScreen;
