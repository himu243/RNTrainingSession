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

const setNewPosts = () => {
  const mwFxn = (dispatch, getState) => {};
  return mwFxn;
};

const myOtherFxn = () => {
  console.log('myOtherFxn');
};

const myFxn = () => myOtherFxn;

console.log(myFxn());

export const setAllPostsData = () => async (dispatch, getState) => {
  console.log(' state of the entire store: ', getState());
  // const homeState = getState().homeData;
  // 1. Loading
  dispatch({
    type: HOME_ACTIONS.IS_LOADING_POSTS,
  });

  // if (homeState?.posts === 0) {
  // 2. API call
  try {
    const posts = await getPostsData();
    // 3. Set Posts Data
    dispatch({
      type: HOME_ACTIONS.SET_POST_DATA,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: HOME_ACTIONS.ERROR_POSTS,
      payload: error,
    });
  }
  // }
};
