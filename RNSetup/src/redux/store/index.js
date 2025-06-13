import {combineReducers, createStore} from 'redux';
import authReducer from '../reducers/authReducer';
import homeReducer from '../reducers/homeReducer';

const rootReducer = combineReducers({
  authData: authReducer,
  homeData: homeReducer,
});

/* ==> 
    {
    authReducer: authReducer,
    homeReducer: homeReducer
    }
*/
const store = createStore(rootReducer);

export default store;

// const b = 1;
// const obj = {a: 2, b}; // ==> {a: 2, b: 1};
