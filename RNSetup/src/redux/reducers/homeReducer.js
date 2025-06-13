import {HOME_ACTIONS} from '../actions/types';

const INITIAL_STATE = {
  posts: [],
  isLoadingPosts: false,
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const {type, payload = null} = action;

  const {SET_POST_DATA, IS_LOADING_POSTS} = HOME_ACTIONS;

  switch (type) {
    case IS_LOADING_POSTS:
      return {...state, isLoadingPosts: true};
    case SET_POST_DATA:
      return {...state, isLoadingPosts: false, posts: payload};
    default:
      return state;
  }
};

export default homeReducer;
