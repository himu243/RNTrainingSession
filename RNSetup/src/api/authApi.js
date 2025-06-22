import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@react-native-firebase/auth';

export const simulatedApiCallForLogin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject('Invalid Email ID');
      resolve({userId: 1, name: 'Himanshu', phNo: '9199999999'});
    }, 1000);
  });
};

export const firebaseEmailPasswordLogin = async (email, password) => {
  try {
    // let fbUserCred = await signInWithEmailAndPassword(
    //   getAuth(),
    //   email,
    //   password,
    // );
    // if (!fbUserCred.user) {
    // User does not exists, so create user
    const createdUser = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    if (createdUser.user) {
      return createdUser.user;
    } else {
      throw Error('Error loggin in');
    }
    // }
    // return fbUserCred.user;
  } catch (error) {
    throw Error(error);
  }
};

export const firebaseLogout = async () => {
  await signOut(getAuth());
};

export const getCurrentFBUser = () => {
  const user = getAuth().currentUser;
  return user;
};
