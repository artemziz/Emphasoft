import {LOGOUT} from '../types/userTypes';

export const logoutUser = () =>{
    localStorage.removeItem('token');
    return {
        type: LOGOUT
    }
}