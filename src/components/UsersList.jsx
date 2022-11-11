import React from 'react';

const UsersList = ({usersList,selectUser,deleteUser}) => {
    return (
        <ul>
            {
                usersList.map(user=>(
                    <li key={user.id}>
                        <div><b>Name: </b>{user.first_name}</div>
                        <div><b>Last Name: </b>{user.last_name}</div>
                        <div><b>email: </b>{user.email}</div>
                        <div><b>birthday: </b>{user.birthday}</div>
                        <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        <button onClick={()=>{selectUser(user)}}>Select</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;

//nombre, apellido, email y fecha de nacimiento