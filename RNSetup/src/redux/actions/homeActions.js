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
