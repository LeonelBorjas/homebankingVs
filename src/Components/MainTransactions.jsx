import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const MainTransactions = () => {
    const token = useSelector(store => store.authReducer.token)
    const [accounts, setAccounts] = useState([])
    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [selectedAccount, setSelectedAccount] = useState('')
    const [destinationAccount, setDestinationAccount] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [destinationType, setDestinationType] = useState('')


    useEffect(() => {  //Peticion  //useEffect para que se ejecute solo una vez cuando se monte
        const fetchAccounts = async () => { // Función asíncrona para realizar la solicitud HTTP
            try {
                const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }) // Realizar la solicitud GET a la API para obtener los datos del cliente y sus cuentas bancarias
                console.log(response.data) // Mostrar la respuesta en la consola
                console.log(response.data.accounts) // Mostrar las cuentas  en la consola
                setClient(response.data) // Actualizar el estado del cliente con los datos recibidos
                setAccounts(response.data.accounts) // Capturar el JSON en la variable de estado accounts
            } catch (err) {
                console.error('Error fetching data: ', err) // en caso de error mostramelo en la consola
                setError(err.message)
            }
        };

        fetchAccounts() // Llamar a la función fetchAccounts cuando el componente se monte
    }, [token]) // Es un array de dependencias

    const handleAccountChange = (event) => {
        setSelectedAccount(event.target.value)
    }

    const handleDestinationAccountChange = (event) => {
        setDestinationAccount(event.target.value)
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const handleDestinationTypeChange = (event) => {
        setDestinationType(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const transactionData = {
                sourceAccountNumber: selectedAccount,
                targetAccountNumber: destinationAccount,
                amount: parseFloat(amount),
                descriptions: description
            }
            const response = await axios.post('http://localhost:8080/api/transactions', transactionData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Transaction successful!', {
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
                console.log('Transaction successful: ', response.data)
            } catch (error) {
                console.error('Error making transaction: ', error)
                toast.error('Transaction failed. Please try again.', {
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
                } finally {
                    setLoading(false)
                }
            }

    return (
        <div className='bg-[#0C0C0C] flex flex-col text-center text-white article-transaction '>
            <h2 className='text-center font-bold text-3xl mb-4 mt-5'>Make a Transaction</h2>
            <form className='flex flex-col gap-8 ' onSubmit={handleSubmit}>
                <div>
                <label className='flex justify-center items-center gap-5'>
                    <strong className='text-lg'>Destination Type :</strong>           
                    <small className='text-lg'>Own</small>
                    <input type="radio"  name='destinationType' value="own" checked={destinationType === 'own'} onChange={handleDestinationTypeChange} />
                    <small className='text-lg'>Others</small>
                    <input type="radio" name='destinationType' value="others" checked={destinationType === 'others'}  onChange={handleDestinationTypeChange} />
                </label>
                </div>
                <div className='flex flex-col gap-10'>
                    <label className=' flex flex-col gap-5 items-center justify-center '>
                    <strong className='text-lg'>Origin Account:</strong>
                    <select 
                        name="account" 
                        id="account-select" 
                        className='text-center h-8 w-1/4 focus-visible:ring-gray-700 text-sm  rounded-md bg-slate-900 ml-2 '
                        value={selectedAccount}
                        onChange={handleAccountChange}
                    >
                    <option disabled hidden value="">Select Account</option>
                    {client.map(account => (
                        <option key={account.number} value={account.number}>
                            {account.number}
                        </option>
                    ))}
                    </select>
                    </label>
                    <label className='flex flex-col gap-5 items-center justify-center'>
                        <strong className='text-lg'>Destination Account:</strong>
                        <input className='text-center w-1/4 focus-visible:ring-gray-700 text-sm h-8  rounded-md bg-slate-900 ml-2 ' type="text" placeholder='Enter your destination account' value={destinationAccount}  onChange={handleDestinationAccountChange} required />
                    </label>
                    <label className='flex flex-col gap-5 items-center justify-center'>
                        <strong className='text-lg'>Amount :</strong>
                        <input className='text-center w-1/4 focus-visible:ring-gray-700 text-sm h-8  rounded-md bg-slate-900 ml-2 ' required type="number" placeholder='Enter your amount $:' min="0" value={amount}  onChange={handleAmountChange} />
                    </label>
                    <label className='flex flex-col gap-5 items-center justify-center'>
                        <strong className='text-lg'>Description :</strong>
                        <input className='text-center w-1/4 focus-visible:ring-gray-700 text-sm h-8 rounded-md bg-slate-900 ml-2 ' type="text" placeholder='Description of transaction'  value={description}   onChange={handleDescriptionChange}  required />
                    </label>
                </div>
                <div className='mb-5'>
                <button  type='submit' className='rounded-md p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>CONFIRM TRANSACTION</button>
                </div>
            </form>
            <ToastContainer />
            </div>
    )
}

export default MainTransactions
