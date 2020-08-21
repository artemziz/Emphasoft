import {GET_USERS} from '../types/usersTypes';

export const getUsers = () =>{
    return async (dispatch) =>{
        const response = await fetch('http://emphasoft-test-assignment.herokuapp.com/api/v1/users/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`,
            },
        });
        const data = await response.json();

        dispatch({
            type: GET_USERS,
            payload: data,
        });
    };
};
