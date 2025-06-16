import {HOME_ACTIONS} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  isLoadingPosts: false,
  errorPosts: null,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action;

  const {SET_POST_DATA, IS_LOADING_POSTS, ERROR_POSTS} = HOME_ACTIONS;

  switch (type) {
    case IS_LOADING_POSTS:
      return {...state, isLoadingPosts: true, posts: [], errorPosts: null};
    case SET_POST_DATA:
      // API call for fetching the posts
      // Async operation
      // Async operations cannot be performed in Reducer // Pure fxn
      return {
        ...state,
        isLoadingPosts: false,
        posts: payload,
        errorPosts: null,
      };
    case ERROR_POSTS:
      return {...state, isLoadingPosts: false, errorPosts: payload};
    default:
      return state;
  }
};

export default homeReducer;
