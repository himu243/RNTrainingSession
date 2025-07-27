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

export const firebaseSignupWithEmailPassword = async (email, password) => {
  let createdUser;
  let isUserLogin = false;
  try {
    // User does not exists, so create user
    createdUser = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    createdUser = createdUser?.user;
    // }
    // return fbUserCred.user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      isUserLogin = true;
      // Login User
      createdUser = await firebaseLoginWithEmailAndPassword(email, password);
      createdUser = createdUser?._user;
    } else {
      throw Error(error);
    }
  }
  console.log('Created user in login is: ', createdUser);
  return {isLogin: isUserLogin, user: createdUser};
};

export const firebaseLoginWithEmailAndPassword = async (email, password) => {
  try {
    const createdUser = await signInWithEmailAndPassword(
      getAuth(),
      email,
      password,
    );
    if (createdUser.user) {
      return createdUser.user;
    } else {
      throw Error('Error loggin in');
    }
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
