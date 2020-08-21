import {LOGIN, LOGOUT} from '../types/userTypes';

const initialState = {
    token: localStorage.getItem('token') || '',
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
    case LOGOUT:
        return {...state, token: ''};
    case LOGIN:
        return {...state, token: action.payload};
    default:
        return state;
    }
}
