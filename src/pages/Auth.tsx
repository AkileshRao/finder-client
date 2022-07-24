import React from 'react'
import { IoSearchCircle } from 'react-icons/io5'

const Auth = () => {
    return (
        <div className='auth-container w-screen h-screen flex items-center justify-center'>
            <header className='flex flex-row items-center p-4 absolute top-0 left-0'>
                <IoSearchCircle className='text-5xl text-blue-700' />
                <h1 className='text-4xl font-bold text-blue-700'>Finder.</h1>
            </header>

            <main>
                <form action="" className='w-96 rounded-lg flex flex-col items-center gap-4'>
                    <h1 className='text-4xl font-bold mb-3'>Sign In</h1>
                    <input type="text" placeholder="Enter email" className='p-2 w-full border-2 rounded border-slate-200' />
                    <input type="password" placeholder="Enter password" className='p-2 w-full border-2 rounded border-slate-200' />
                    <p className='my-4'>New here? <span><strong>Create an account.</strong></span></p>
                    <button className='font-bold bg-blue-700 text-white p-2 rounded w-full'>Sign In</button>
                </form>
            </main>
        </div>
    )
}

export default Auth