import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Search from '../Search';
import Sort from '../Sort';
import {getUsers} from '../../redux/actions/getUsers';
import {User} from '../User';
import './Users.scss';

function Users({listOfUsers,getUsers}){
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    },[]);
    
    useEffect(()=>{
        setUsers(listOfUsers);
    },[listOfUsers]);
    
    return(
        <div className="Users">
            <div className="Users-header">
            Users
            <Search setUsers = {setUsers} users = {users}/>
            </div>
            <table cellSpacing="0" className="Users-table">
                <thead className='Users-thead'>
                    <tr>
                        <th>
                            id
                            <Sort setUsers = {setUsers} users = {users}/>
                        </th>
                        <th>first name</th>
                        <th>is active</th>
                        <th>is superuser</th>
                        <th>last login</th>
                        <th>last name</th>
                        <th>username</th>
                    </tr>
                </thead>
                <tbody className='Users-tbody'>
                    {users.map(user => {
                        return <User key={user.id} user={user}/>
                        })
                    
                    }
                </tbody>         
            </table>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        listOfUsers:state.Users.listOfUsers
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);