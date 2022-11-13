import React from 'react';
import { useState } from 'react';
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
        } else {
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


    const [showPassword, setShowPassword] = useState(false)
    return (
        <form
            className='usersForm'
            onSubmit={handleSubmit(submit)}
        >
            <div className='form-inputs'>
                <div className='label-input'>
                    <label htmlFor="name">Name: </label>
                    <input {...register('first_name')} type="text" id='name' />
                </div>
                <div className='label-input'>
                    <label htmlFor="last-name">Last Name: </label>
                    <input {...register('last_name')} type="text" id='last-name' />
                </div>
                <div className='label-input'>
                    <label htmlFor="password">Password: </label>
                    <div className='password'>
                        <input {...register('password')} type={showPassword ? 'text' : 'password'} id='password' />
                        <label htmlFor="password-checkbox">
                            {showPassword ? <box-icon name='low-vision'></box-icon> : <box-icon name='show' ></box-icon>}
                        </label>
                        <input
                            type="checkbox"
                            id='password-checkbox'
                            onChange={() => setShowPassword(!showPassword)}
                        />
                    </div>
                </div>
                <div className='label-input'>
                    <label htmlFor="email">Email: </label>
                    <input {...register('email')} type="email" id='email' />
                </div>
                <div className='label-input birthday-input'>
                    <label htmlFor="birthday">Birthday: </label>
                    <input {...register('birthday')} type="date" id='birthday' />
                </div>
            </div>

            <button className='btn-submit'>Submit</button>
        </form>
    );
};

export default UsersForm;

//nombre, apellido, email y fecha de nacimiento