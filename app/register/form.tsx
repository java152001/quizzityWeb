'use client'

import { FormEvent } from "react";
import axios from 'axios';

export default function Form() {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('api/auth/register', {
            method:'POST',
            body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName')
                })
            });
    }

    return (
        <form className='grid grid-cols-1 gap-6 mt-8 max-w-md mx-auto' onSubmit={handleSubmit}>
            <label className="block">
                <span className='text-gray-700'>Email</span>
                <input name='email' className='mt-1 block w-full' type='email' />
            </label>
            <label className="block">
                <span className='text-gray-700'>Password</span>
                <input name='password' className='mt-1 block w-full' type='password' />
            </label>
            <label className="block">
                <span className='text-gray-700'>First Name</span>
                <input name='firstName' className='mt-1 block w-full' type='text' />
            </label>
            <label className="block">
                <span className='text-gray-700'>Last Name</span>
                <input name='lastName' className='mt-1 block w-full' type='text' />
            </label>
            <button type='submit'>
                Register
            </button>
        </form>
    )
}