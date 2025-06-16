export const simulatedApiCallForLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject('Invalid Email ID');
      resolve({userId: 1, name: 'Himanshu', phNo: '9199999999'});
    }, 1000);
  });
};
