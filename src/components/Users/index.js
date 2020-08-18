import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {getUsers} from '../../redux/actions/getUsers';
import {User} from '../User';
import './Users.scss';

function Users({username,users,getUsers}){
    useEffect(()=>{
        getUsers();
    },[])
    return(
        <div className="Users">
        {Array.from(users.map(user => {
            return <User user={user}/>
            })
        
        )}
        </div>
        
    )
}

const mapStateToProps = (state) =>{
    return{
        username:state.User.currentUser,
        users:state.Users.users
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);