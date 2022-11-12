import React from 'react';
import 'boxicons'

const UsersList = ({ usersList, selectUser, deleteUser }) => {
    return (
        <ul className='usersList'>
            {
                usersList.map(user => (
                    <li
                        key={user.id}
                        className='user-card'
                    >
                        <div className='list-content'>
                            
                            <div><b>{user.first_name}{' '}{user.last_name}</b></div>
                            <div>{user.email}</div>
                            <div className='birthday'><box-icon name='gift'></box-icon>{user.birthday}</div>
                        </div>
                        <div className='list-buttons'>
                            <button onClick={() => { deleteUser(user.id) }}><box-icon name='trash' color='red' ></box-icon></button>
                            <button onClick={() => { selectUser(user) }}><box-icon name='pencil' type='solid' ></box-icon></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;

//nombre, apellido, email y fecha de nacimiento