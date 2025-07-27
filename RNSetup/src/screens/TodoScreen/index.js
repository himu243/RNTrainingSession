import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addTodoListItem,
  deleteToDoListItem,
  updateToDoListItem,
} from '../../redux/actions/todoActions';
import uuid from 'react-native-uuid';

import {COLLECTION_NAMES, setDocument} from '../../helper/firestoreHelper';

const TodoScreen = () => {
  const todoData = useSelector(state => state.todoData);
  const dispatch = useDispatch();

  const [textTodoItem, setTextTodoItem] = useState('');

  // 0
  // 1
  const onAddPress = () => {
    setDocument(COLLECTION_NAMES.COURSES, uuid.v4(), {
      title: textTodoItem,
      price: `$${Math.random() * 15000}`,
      prerequisites: ['java', 'html', 'css', 'javascript'],
    });
    // dispatch(addTodoListItem(textTodoItem));
  };

  const renderTodoItem = ({item}) => <ToDoItem item={item} />;

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
          placeholder="Enter Course to add"
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

const ToDoItem = ({item}) => {
  console.log('item in todo Item: ', item.title);

  const [txtTitle, setTextTitle] = useState(item?.title);

  const dispatch = useDispatch();

  const onDeleteitem = () => {
    dispatch(deleteToDoListItem(item));
  };

  const onEditItem = () => {
    dispatch(updateToDoListItem({...item, title: txtTitle}));
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 8,
        }}>
        <TextInput value={txtTitle} onChangeText={setTextTitle} />
        <Button title="Edit" onPress={onEditItem} />
        <Button title="Delete" onPress={onDeleteitem} />
      </View>
      <Text>{`Current Item is: ${item?.title}`}</Text>
    </>
  );
};
