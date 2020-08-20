import React,{useEffect, useState} from 'react';

export default function Search({users,setUsers}){
    const [search,setSearch] = useState('');
    const handleSearch = (event) =>{
        setSearch(event.target.value);
    }
    useEffect(() =>{
        setUsers(users.slice().map(user =>{
            if(user.username.indexOf(search) === 0){
                
                user.isVisible = true;
            }else{
                user.isVisible = false;
            }
            return user; 
        }))
    },[search])
    return(
        <input value={search} placeholder='Search...' onChange={handleSearch} className='Header-search' type="text"/>
    )
}