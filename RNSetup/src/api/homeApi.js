import ApiInstance from './index';

export const getPostsData = async () => {
  const data = await ApiInstance.get('/posts');
  return data?.data;
};
