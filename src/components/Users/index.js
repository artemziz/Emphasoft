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
            <div className="Users-header">Users</div>
            <table cellSpacing="0" className="Users-table">
                <thead className='Users-thead'>
                    <tr>
                        <th>id</th>
                        <th>first name</th>
                        <th>is active</th>
                        <th>is superuser</th>
                        <th>last login</th>
                        <th>last name</th>
                        <th>username</th>
                    </tr>
                </thead>
                <tbody className='Users-tbody'>
                    {Array.from(users.map(user => {
                        return <User key={user.id} user={user}/>
                        })
                    
                    )}
                </tbody>    
            
            </table>
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