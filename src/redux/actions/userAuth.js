import {loginUser} from '../actions/login';

export const userAuth = (user) =>{
    return async (dispatch) =>{
        const response = await fetch('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
            }),
        });
        const data = await response.json();

        if (!!data.token) {
            dispatch(loginUser(data.token));
        } else {
            return {error: 'Wrong username or password'};
        }
    };
};

