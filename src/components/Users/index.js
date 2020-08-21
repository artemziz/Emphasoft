import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Sort from '../Sort';
import Header from '../Header';
import {getUsers} from '../../redux/actions/getUsers';
import {User} from '../User';
import './Users.scss';

function Users({listOfUsers, getUsers}) {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    useEffect(()=>{
        setUsers(listOfUsers);
    }, [listOfUsers]);

    return (
        <div className="Users">
            <Header setUsers = {setUsers} users = {users}/>
            <table cellSpacing="0" className="Users-table">
                <thead className='Users-thead'>
                    <tr>
                        <th>
                            id
                            <Sort className='Users-SortIcon' setUsers = {setUsers} users = {users}/>
                        </th>
                        <th>username</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>is active</th>
                        <th>is superuser</th>
                        <th>last login</th>
                    </tr>
                </thead>
                <tbody className='Users-tbody'>
                    {users.map((user) => {
                        return <User key={user.id} user={user}/>;
                    })

                    }
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        listOfUsers: state.Users.listOfUsers,
    };
};

const mapDispatchToProps = {
    getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
