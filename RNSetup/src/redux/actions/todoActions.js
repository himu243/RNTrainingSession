import {
  simulatedSetListItemData,
  simulateGetTodoListData,
  simulatedDeleteTodoListData,
  simulatedUpdateTodoListData,
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
    console.log('Error Setting item: ', title);
  }
};

// UPDATE
export const updateToDoListItem = item => async (dispatch, getState) => {
  // 1.
  dispatch({
    type: TODO_ACTIONS.IS_LOADING_LIST,
  });
  try {
    const resp = await simulatedUpdateTodoListData(item);

    const prevData = getState().todoData?.todoList;

    const indexOfItem = prevData?.findIndex(
      prevItem => prevItem.id === resp?.item.id,
    ); //  3
    // total 7 items
    const newData = [
      ...prevData?.slice(0, indexOfItem), // spread out 0 , 1 , 2
      {
        ...resp?.item, // 3rd
      },
      ...prevData?.slice(indexOfItem + 1), // spread out 4 , 5 , 6
    ];
    dispatch({
      type: TODO_ACTIONS.SET_TODO_LIST,
      payload: newData,
    });
  } catch (error) {
    dispatch({
      type: TODO_ACTIONS.ERROR_LIST,
      payload: error,
    });
  }
};

// DELETE
export const deleteToDoListItem = item => async (dispatch, getState) => {
  // 1.
  dispatch({
    type: TODO_ACTIONS.IS_LOADING_LIST,
  });

  try {
    const response = await simulatedDeleteTodoListData(item);
    console.log('response for delete: ', response);

    const prevData = getState().todoData?.todoList;
    const newData = prevData.filter(
      prevItem => prevItem.id !== response?.item.id,
    );
    console.log('new response for delete: ', newData);

    dispatch({
      type: TODO_ACTIONS.SET_TODO_LIST,
      payload: newData,
    });
  } catch (error) {
    dispatch({
      type: TODO_ACTIONS.ERROR_LIST,
      payload: error,
    });
  }
};
