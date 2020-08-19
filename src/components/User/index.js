import React from 'react';

import './User.scss';

export function User({user}){
    return(
        <tr className='User'>
        
            <td data-label='id'>{user.id}</td>
            <td data-label='first name'>{user.first_name}</td>
            <td data-label='is active'>{user.is_active}</td>
            <td data-label='is superuser'>{user.is_superuser}</td>
            <td data-label='last login'>{user.last_login}</td>
            <td data-label='last name'>{user.last_name}</td>
            <td data-label='username'>{user.username}</td>
        </tr>
    )
}