import {loginUser} from './loginUser';

export const userAuth = user =>{
    return async dispatch =>{
        let response = await fetch('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                username:user.username,
                password:user.password
            })
        });
        let data = await response.json();
        if(!!data.token){
            localStorage.setItem("token", data.token);
            dispatch(loginUser(user.username))
        }

    }
}

