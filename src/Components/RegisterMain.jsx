import React from 'react'
import { Link } from 'react-router-dom'

const RegisterMain = () => {
    return (
        <div className='flex h-[85vh]'>
            <article className='article-bgg w-1/2 flex h-full flex-col justify-center items-center'>
                <div className='article-content text-white flex flex-col gap-8 justify-center items-center h-full '>
                    <h2 className='text-3xl'>Already have a account?</h2>
                    <p className='text-center text-lg'>Login with your account</p>
                    <Link className='text-blue-400' to={"/Login"}>  Log in</Link>
                </div>
            </article>
            <article className='text-center w-1/2 h-full flex flex-col justify-center'>
                <h2 className='text-3xl mb-4 font-bold '>Enter your details</h2>
                <form className='flex flex-col gap-8'>
                    <div className='w-full flex gap-2 justify-center items-center'>
                        <label className='flex flex-grow'>
                            <input className='p-4 mx-2 border rounded-md shadow w-full' type="text" name='FirstName' placeholder='FIRST NAME' />
                        </label>
                        <label className='flex flex-grow'>
                            <input className='p-4 mx-2 border rounded-md shadow w-full' type="text" name='LastName' placeholder='LAST NAME' />
                        </label>
                    </div>
                    <label className='flex'>
                        <input className='mx-2 p-4 border rounded-md shadow w-full' type="email" name='user' required placeholder='EMAIL' />
                    </label>
                    <div className='flex items-center gap-2'>
                        <input className='mx-2 p-4 border rounded-md shadow w-full id_password' type="password" name='password' required placeholder='PASSWORD' />
                    </div>
                    <button type='submit' className='rounded-md  p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>SIGN UP</button>
                </form>
            </article>
        </div>
    )
}

export default RegisterMain
