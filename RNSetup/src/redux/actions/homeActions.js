import {getPostsData} from '../../api/homeApi';
import {HOME_ACTIONS} from './types';

export const setPostsData = posts => {
  return {
    type: HOME_ACTIONS.SET_POST_DATA,
    payload: posts,
  };
};

export const setIsLoadingPosts = () => {
  return {
    type: HOME_ACTIONS.IS_LOADING_POSTS,
  };
};

export const setAllPostsData = () => async (dispatch, getState) => {
  console.log(' state of the entire store: ', getState());
  // 1. Loading
  dispatch({
    type: HOME_ACTIONS.IS_LOADING_POSTS,
  });
  // 2. API call
  try {
    const posts = await getPostsData();
    // 3. Set Posts Data
    dispatch({
      type: HOME_ACTIONS.SET_POST_DATA,
      payload: posts,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
