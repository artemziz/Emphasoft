import React,{useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {getUsers} from '../../redux/actions/getUsers';
import {User} from '../User';
import './Users.scss';

function Users({listOfUsers,getUsers}){
    const[users,setUsers] = useState([]);
    const[isAsc,setIsAsc] = useState(true);
    useEffect(()=>{
        getUsers();
    },[]);
    
    useEffect(()=>{
        setUsers(listOfUsers);
    },[listOfUsers]);
    const sortById = (arr,isAsc) =>{
        let result = arr.slice();
        result.sort((a,b) => (a.id>b.id)?1:-1);
        if(!isAsc) result.reverse();
        return result;
    }
    const sortTable = () =>{
        setIsAsc(!isAsc);
        setUsers(sortById(users,isAsc));
    }
    const sortIconClassName = (isAsc) =>{
        let className = 'Users-SortIcon';
        if(!isAsc) className+=' Users-SortIcon_Desc';
        return className;
    }
    return(
        <div className="Users">
            <div className="Users-header">
            Users
            
            </div>
            <table cellSpacing="0" className="Users-table">
                <thead className='Users-thead'>
                    <tr>
                        <th>
                            id
                            <div onClick={sortTable} className={sortIconClassName(isAsc)}></div>
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