import Banner from './Banner'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AccountInfo from './AccountInfo'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom'


const MainAccounts = () => {
    const token = useSelector(store => store.authReducer.token)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [accounts, setAccounts] = useState([]) // Estado para almacenar los datos de las cuentas bancarias (inicialmente vacío)
    const [loading, setLoading] = useState(false) // Estado para indicar si la carga está en progreso (inicialmente falso)
    const [error, setError] = useState(null) // Variable de estado para almacenar los errores

    useEffect(() => {
        fetchAccounts() // Cargar cuentas cuando el componente se monte
    }, [])

    const fetchAccounts = async () => {
        try {
            const response = await axios.get('https://dhuebank.onrender.com/api/clients/current/accounts', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setAccounts(response.data)
        } catch (err) {
            console.error('Error fetching data: ', err)
            setError(err.message)
        }
    }

    const handleCreateAccount = async () => {
        try {
            const response = await axios.post('https://dhuebank.onrender.com/api/clients/current/account', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success('New Account successful!', {
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
            fetchAccounts()
        } catch (err) {
            console.error('Error creating account: ', err)
            toast.error('You exceed the limit number of accounts created.', {
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

    const handleAccountClick = (accountId) => {
        navigate(`/AccountSelect/${accountId}`)
    }


    return (
        <div className='flex flex-col flex-grow  justify-around items-center bg-[#0C0C0C] h-full text-white'>
            <Banner banner="/public/assets/img/banner.png" />
            <div className='h-full w-full flex flex-col justify-center items-center'>
                <div className='flex flex-wrap justify-around items-center gap-8 my-4'>
                    <div>
                        <button type='button' onClick={handleCreateAccount} className='rounded-md p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>CREATE NEW ACCOUNT</button>
                    </div>
                    {accounts.map((account, id) => (
                        <div
                            key={id}
                            onClick={() => handleAccountClick(account.id)}
                            className='flex flex-col justify-center items-center cursor-pointer'>
                            <AccountInfo number={account.number} balance={account.balance} creationDate={account.creationDate} />
                        </div>
                    ))}
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default MainAccounts





