// import React, {createContext, useReducer} from 'react';

// export const AppContext = createContext();

// const INITIAL_APP_STATE = {
//   isLoggedIn: false,
// };

// const AppStateChangerFunction = (prevState, action) => {
//   const {type, payload} = action;
//   console.log('action in AppStateChangerFunction: ', action, payload);

//   switch (type) {
//     case 'SET_IS_LOGIN':
//       return {...prevState, isLoggedIn: payload};
//     default:
//       return prevState;
//   }
// };

// export const AppStateProvider = ({children}) => {
//   const [appState, appStateDispatch] = useReducer(
//     AppStateChangerFunction,
//     INITIAL_APP_STATE,
//   );

//   return (
//     <AppContext.Provider value={{appState, appStateDispatch}}>
//       {children}
//     </AppContext.Provider>
//   );
// };

import React, {createContext, useReducer} from 'react';

export const AppContext = createContext();

const INITIAL_APP_STATE = {
  isLoggedIn: false,
  isSplashLoading: true,
};

// No Asynchronous operations are allowed in Reducer functions.

const AppStateReducer = (prevState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_IS_LOGIN':
      return {...prevState, isLoggedIn: payload};
    case 'SET_IS_SPLASH_LOADING':
      return {...prevState, isSplashLoading: payload};
    default:
      return prevState;
  }
};

export const AppStateProvider = ({children}) => {
  const [appState, appStateDispatch] = useReducer(
    AppStateReducer,
    INITIAL_APP_STATE,
  );

  return (
    <AppContext.Provider value={{appState, appStateDispatch}}>
      {children}
    </AppContext.Provider>
  );
};

// <AppStateProvider>
// <Text>{'Himanshu}</Text>
// </AppStateProvider>
