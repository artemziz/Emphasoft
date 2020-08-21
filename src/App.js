import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Users from './components/Users';
import Login from './components/Login';
import './App.scss';

function App({token, loginUser}) {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(()=>{
        token ? setLoggedIn(true) : setLoggedIn(false);
    }, [token]);
    return (
        <div className="App">
            {loggedIn ? (
                (
                    <Users/>
                )
            ):(
                <Login/>
            )}
        </div>
    );
}
const mapStateToProps = (state) =>{
    return {
        token: state.User.token,
    };
};

export default connect(mapStateToProps, null)(App);
