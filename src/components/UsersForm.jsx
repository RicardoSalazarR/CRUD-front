import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({ postUser, selectedUser, putUser }) => {
    const { handleSubmit, register, reset } = useForm()
    const defaultValues = {
        birthday: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
    }
    useEffect(() => {
        if (selectedUser) {
            reset(selectedUser)
        }else{
            reset(defaultValues)
        }
    }, [selectedUser])

    const submit = (data) => {
        if (selectedUser) {
            putUser(data)
            reset(defaultValues)
        } else {
            postUser(data)
            reset(defaultValues)
        }
    }


    return (
        <form
            className='usersForm'
            onSubmit={handleSubmit(submit)}
        >
            <div>
                <label htmlFor="name">Name: </label>
                <input {...register('first_name')} type="text" id='name' />
            </div>
            <div>
                <label htmlFor="last-name">Last Name: </label>
                <input {...register('last_name')} type="text" id='last-name' />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input {...register('password')} type="text" id='password' />
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input {...register('email')} type="text" id='email' />
            </div>
            <div>
                <label htmlFor="birthday">Birthday: </label>
                <input {...register('birthday')} type="text" id='birthday' />
            </div>
            <button>Sumbmit</button>
        </form>
    );
};

export default UsersForm;

//nombre, apellido, email y fecha de nacimiento