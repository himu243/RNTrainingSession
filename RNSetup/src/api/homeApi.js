import ApiInstance from './index';

export const getPostsData = async () => {
  try {
    const data = await ApiInstance.get('/posts');
    console.log('Outside data: ', data);
    return data?.result;
  } catch (error) {}
};

// , {
//     transformRequest: [
//       (data, headers) => {
//         // data.myKey = 1;
//         console.log('Data in transform request: ', data);
//         console.log('Headers in transform request: ', headers);
//         return data;
//       },
//     ],
//     transformResponse: [
//       data => {
//         console.log('Data in transform response: ', data);
//         // const newData = {status: 200, result: data};
//         return data;
//       },
//     ],
//   }
