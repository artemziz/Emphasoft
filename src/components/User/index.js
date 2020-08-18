import React from 'react';

import './User.scss';

export function User({user}){
    return(
        <section className='User'>
        
            <div>{user.id}</div>
            <div>{user.first_name}</div>
            <div>{user.is_active}</div>
            <div>{user.is_superuser}</div>
            <div>{user.last_login}</div>
            <div>{user.last_name}</div>
            <div>{user.username}</div>
        </section>
    )
}