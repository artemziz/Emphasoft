import React from 'react';
import {connect} from 'react-redux';

import {logoutUser} from '../../redux/actions/logout';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import './Header.scss';

function Header({users, setUsers, logoutUser}) {
    const handleLogout = () =>{
        logoutUser();
    };
    return (
        <div className="Users-header Header">
            <Sort
                className='Header-SortIcon'
                setUsers = {setUsers}
                users = {users}/>
            <Search
                setUsers = {setUsers}
                users = {users}/>
            <div className="Header-name">Users</div>
            <div onClick={handleLogout} className="Header-logout">Logout</div>
        </div>
    );
}

const mapDispatchToProps = {
    logoutUser,
};

export default connect(null, mapDispatchToProps)(Header);
