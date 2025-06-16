import {
  simulatedSetListItemData,
  simulateGetTodoListData,
} from '../../api/todoAPI';
import {TODO_ACTIONS} from './types';

export const getToDoList = () => async disptach => {
  // 1.
  disptach({
    type: TODO_ACTIONS.IS_LOADING_LIST,
  });

  // 2.
  try {
    const todoList = await simulateGetTodoListData();
    //3.
    disptach({
      type: TODO_ACTIONS.SET_TODO_LIST,
      payload: todoList,
    });
  } catch (error) {
    //3.
    disptach({
      type: TODO_ACTIONS.ERROR_LIST,
      payload: error,
    });
  }
};

export const addTodoListItem = title => async (dispatch, getState) => {
  try {
    const objTodo = {
      id: `${Math.random()}`,
      title,
    };
    // 1.
    dispatch({
      type: TODO_ACTIONS.IS_LOADING_LIST,
    });
    const response = await simulatedSetListItemData(objTodo);
    const prevData = getState().todoData?.todoList;
    console.log('prevData in state is: ', prevData);
    console.log('New Payload: ', [...prevData, {...response.item}]);

    dispatch({
      type: TODO_ACTIONS.SET_TODO_LIST,
      payload: [...prevData, {...response.item}],
    });
  } catch (error) {
    console.log('Error Setting item');
  }
};
