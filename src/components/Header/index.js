import React,{useEffect, useState} from 'react';

import Search from '../Search';
import Sort from '../Sort';
import './Header.scss';

export default function Header({setUsers,users}){
    return(
        <div className="Users-header Header">
                <Sort className='Header-SortIcon' setUsers = {setUsers} users = {users}/>
                <Search setUsers = {setUsers} users = {users}/>
                <div className="Header-name">Users</div> 
            
            </div>
    )
}