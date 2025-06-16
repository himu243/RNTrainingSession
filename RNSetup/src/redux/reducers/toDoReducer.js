import {TODO_ACTIONS} from '../actions/types';

const INITIAL_STATE = {
  isLoadingLists: false,
  todoList: [],
  errorLoadingList: null,
};

const {IS_LOADING_LIST, SET_TODO_LIST, ERROR_LIST} = TODO_ACTIONS;

const todoReducer = (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action;
  switch (type) {
    case IS_LOADING_LIST:
      return {...state, isLoadingLists: true, errorLoadingList: null};
    case SET_TODO_LIST:
      return {
        ...state,
        isLoadingLists: false,
        todoList: payload,
        errorLoadingList: null,
      };
    case ERROR_LIST:
      return {
        ...state,
        isLoadingLists: false,
        errorLoadingList: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
