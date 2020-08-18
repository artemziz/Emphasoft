import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Users from './components/Users';
import Login from './components/Login';
import './App.scss';

function App({username}) {
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(()=>{
        if(!!localStorage.getItem('token')){
            setLoggedIn(true);
        };
    },[username])
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
    return{
        username:state.User.currentUser,
    }
}

export default connect(mapStateToProps,null)(App);