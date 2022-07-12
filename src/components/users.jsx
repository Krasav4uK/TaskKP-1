import React, { useState } from 'react';
import API from '../api';

const Users = () => {
    // console.log(API.users.fetchAll());
    
    const [users, setUsers] = useState(API.users.fetchAll());
   
    
    const handleDelete = (userId) => {
        // console.log(userId);
        setUsers((prevState)=>prevState.filter((user)=>user._id !== userId));

    };

    const renderPhrase = (number) => {
        // console.log(number);
        return (number===0)
        ? <div className='badge bg-danger'><h3>Никто с тобой не тусанет</h3></div>
        : (number===2 || number===3 || number===4) 
        ? <div className='badge bg-primary'><h3>{number} человека тусанут с тобой сегодня</h3></div>
        : <div className="badge bg-primary"><h3>{number} человек тусанет с тобой сегодня</h3></div>
        
    };
if (users.length ===0)
return(
    <>
    {renderPhrase(users.length)}
    </>
);    
if (users.length !==0)
    return (
        <>
        {renderPhrase(users.length)}
        
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th></th>
            </tr>
        </thead>
        <tbody>       
           {/* {() => renderPhrase(users)} */}
           {users.map((user) => {
           return(
           <tr
                key={user._id}
            >                
                <td>{user.name}</td>
                <td>
                  
                {user.qualities.map((qual) => {
                     let colorQualities = `badge bg-${qual.color} m-1`;
                     return( 
                          
                     <span key={qual._id} className={colorQualities}> 
                        {qual.name}
                     </span>
                     )
                    })
                }
                    
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <td><button type="button" className="btn btn-danger" onClick={()=>handleDelete(user._id)}>delete</button></td>
            </tr>  
            )})
           } 
        </tbody> 
        </table> 
        </>
    );    
    
};

export default Users;