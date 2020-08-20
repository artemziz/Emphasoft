import React,{useEffect, useState} from 'react';

export default function Sort({className,users,setUsers}){
    const[isAsc,setIsAsc] = useState(true);

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
        if(!isAsc) className+=` ${className}_Desc`;
        return className;
    }

    return(
        <div onClick={sortTable} className={sortIconClassName(isAsc)}></div>
    )
}