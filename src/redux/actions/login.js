import {LOGIN} from '../types/userTypes';

export const loginUser = token =>{
    localStorage.setItem("token", token);
    return {
        type: LOGIN,
        payload: token
    }
}