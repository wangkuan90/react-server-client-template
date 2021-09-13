import { createStore, Middleware, compose, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {
    userReducer as userData
} from './reducers';

export default createStore(combineReducers({
    userData
}));