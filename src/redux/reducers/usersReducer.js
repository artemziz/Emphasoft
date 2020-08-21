import {GET_USERS} from '../types/usersTypes';

const initialState = {
    listOfUsers: [],
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
    case GET_USERS:
        return {...state, listOfUsers: action.payload};
    default:
        return state;
    }
}
