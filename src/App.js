import React,{useEffect, useState} from 'react';

import Users from './components/Users';
import Login from './components/Login';
import './App.scss';

function App() {
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(()=>{
        if(!!localStorage.getItem('token')){
            setLoggedIn(true);
        };
    },[])
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

export default App;