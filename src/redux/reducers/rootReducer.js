import {combineReducers} from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

export const rootReducer = combineReducers({
    User:userReducer,
    Users:usersReducer
});