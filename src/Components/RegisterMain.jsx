import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const RegisterMain = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const mensajeSuccess = () => {
        toast.success('Login Success, Welcome', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registerDTO = { firstName, lastName, email, password }

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', registerDTO)

            if (response.status === 201) {
                mensajeSuccess()
                navigate('/login')
            } else {
                toast.error('An account with this email address already exists. ', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        })
            }
        } catch (error) {
            console.error('Error during registration:', error);
            if (error.response && error.response.data) {
                toast.error(error.response.data, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            } else {
                toast.error('Error trying to register. Please try again later.', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            }
        }
    }

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
                <h2 className='text-3xl mb-4 font-bold'>Enter your details</h2>
                <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                    <div className='w-full flex gap-2 justify-center items-center'>
                        <label className='flex flex-grow'>
                            <input className='p-4 mx-2 border rounded-md shadow w-full' type="text" name='FirstName' placeholder='FIRST NAME' onChange={(e) => setFirstName(e.target.value)} />
                        </label>
                        <label className='flex flex-grow'>
                            <input className='p-4 mx-2 border rounded-md shadow w-full' type="text" name='LastName' placeholder='LAST NAME' onChange={(e) => setLastName(e.target.value)} />
                        </label>
                    </div>
                    <label className='flex'>
                        <input className='mx-2 p-4 border rounded-md shadow w-full' type="email" name='user' required placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <div className='flex items-center gap-2'>
                        <input className='mx-2 p-4 border rounded-md shadow w-full id_password' type="password" name='password' required placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className='rounded-md  p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>SIGN UP</button>
                </form>
                <ToastContainer />
            </article>
        </div>
    )
}

export default RegisterMain
