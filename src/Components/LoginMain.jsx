import React from 'react'
import { Link } from 'react-router-dom'

const LoginMain = () => {
    return (
        <div className='flex h-[85vh]'>
            <article className='text-center w-1/2 h-full flex flex-col justify-center'>
                <h2 className='font-bold text-3xl mb-4'>Login to your account</h2>
                <form className='flex flex-col gap-8 '>
                    <label className='flex  '>
                        <input type="email" name='user' required placeholder='EMAIL' className='shadow mx-2 p-4 border rounded-md  w-full' />
                    </label>
                    <div className='flex items-center gap-2 relative'>
                        <input type="password" name='password' required placeholder='PASSWORD' className='shadow mx-2 p-4 border rounded-md  w-full id_password' />
                    </div>
                    <div className='flex justify-around items-center gap-2 flex-wrap-reverse'>
                        <button className='flex justify-center items-center'>
                            <small className='text-lg'>Forgot your password?</small>
                        </button>
                        <label className='flex justify-center items-center gap-2'>
                            <input type="checkbox" name='id' />
                            <small className='text-lg'>Remember me</small>
                        </label>
                    </div>
                    <button type='submit' className='rounded-md  p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>LOG IN</button>

                </form>
            </article>
            <article className='article-bg w-1/2 flex h-full flex-col justify-center items-center'>
                <div className='article-content text-white flex flex-col gap-14 justify-center items-center'>
                    <h2 className='font-bold text-3xl'>New here?</h2>
                    <p className='text-center text-lg'>Sign Up for Our Bank</p>
                    <p className='text-center text-lg'>Discover the benefits of being part of Dhue Bank</p>
                    <p className='text-center text-lg p-4'>Haven't an account? 
                        <Link className='text-blue-400' to={"/Register"}>  Sign up here</Link>
                    </p>
                </div>
            </article>
        </div>
    )
}

export default LoginMain
