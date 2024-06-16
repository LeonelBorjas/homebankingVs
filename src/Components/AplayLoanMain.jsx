import React, { useState, useEffect } from 'react'
import LoansObtained from './LoansObtained'
import AplayLoanForm from './AplayLoanForm'
import Banner from './Banner'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'


const AplayLoanMain = () => {
    const token = useSelector(store => store.authReducer.token)
    const [accounts, setAccounts] = useState([])
    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [loans, setLoans] = useState([])
    const [selectedLoan, setSelectedLoan] = useState('')
    const [amount, setAmount] = useState('')
    const [payments, setPayments] = useState('')
    const [destinationAccount, setDestinationAccount] = useState('')
    const [loanId, setLoanId] = useState(null)
    const [installments, setInstallments] = useState([])
    const navigate = useNavigate()


    useEffect(() => {  //Peticion  //useEffect para que se ejecute solo una vez cuando se monte
        const fetchAccounts = async () => { // Función asíncrona para realizar la solicitud HTTP
            try {
                const response = await axios.get('http://localhost:8080/api/clients/current/accounts', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }) // Realizar la solicitud GET a la API para obtener los datos del cliente y sus cuentas bancarias
                console.log(response.data) // Mostrar la respuesta en la consola
                setClient(response.data) // Actualizar el estado del cliente con los datos recibidos
                setAccounts(response.data.accounts) // Capturar el JSON en la variable de estado accounts
            } catch (err) {
                console.error('Error fetching data: ', err) // en caso de error mostramelo en la consola
                setError(err.message)
            }
        }
        fetchAccounts() // Llamar a la función fetchAccounts cuando el componente se monte
    }, [token]) // Es un array de dependencias

    useEffect(() => {  //Peticion  //useEffect para que se ejecute solo una vez cuando se monte
        const fetchLoans = async () => { // Función asíncrona para realizar la solicitud HTTP
            try {
                const response = await axios.get('http://localhost:8080/api/loans', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }) // Realizar la solicitud GET a la API para obtener los datos del cliente y sus cuentas bancarias
                console.log(response.data) // Mostrar la respuesta en la consola
                setLoans(response.data)
            } catch (err) {
                console.error('Error fetching data: ', err) // en caso de error mostramelo en la consola
                setError(err.message)
            }
        }
        fetchLoans() // Llamar a la función fetchLoans  cuando el componente se monte
    }, [token]) // Es un array de dependencias

    const handleLoanChange = (e) => {
        const selectedLoanName = e.target.value
        console.log(selectedLoanName)
        setSelectedLoan(selectedLoanName)
        const loan = loans.find(loan => loan.loanName === selectedLoanName)
        console.log(loan)
        if (loan) {
            setLoanId(loan.id)
            console.log(loan.id)
            setInstallments(loan.payments)
            console.log(loan.payments)
        } else {
            console.log('Loan not found')
        }
    }
    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    const handlePaymentsChange = (event) => {
        setPayments(event.target.value)
    }

    const handleDestinationAccountChange = (event) => {
        setDestinationAccount(event.target.value)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()

        try {
            const loanData = {
                id: loanId,
                destinationAccount: destinationAccount,
                amount: parseFloat(amount),
                payments: parseInt(payments)
            }

            console.log(loanData)

            const response = await axios.post('http://localhost:8080/api/loans', loanData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success('Loan created successfully!', {
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
            console.log('Loan created successfully: ', response.data)

        } catch (error) {
            console.error('Error making transaction: ', error)
            toast.error('Error creating loan. Please try again later.', {
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
            navigate('/Loans')
        }
    }

    return (
        <div className=' article-aplyLoan font-sans bg-[#0C0C0C] bg-cover bg-no-repeat  '>
            <div className='article-content text-white w-full h-full flex items-center justify-center gap-10  '>
                <section className=' w-80 h-full p-2 flex flex-col justify-around gap-10 items-center bg-[#263640] rounded-2xl mb-5 mt-10'>
                    <div className='h-full'>
                        <div className='flex flex-col md:flex-row-reverse h-full text-center justify-center items-center gap-4'>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-5 text-center items-center justify-center '>
                                <div>
                                    <label className=' '>
                                        <strong className='text-xl'> Choose Loan : </strong>
                                        <select onChange={handleLoanChange} required className='text-center text-sm rounded-md bg-slate-900 ml-2'>
                                            <option disabled selected hidden value="">Select Loan</option>
                                            {loans.map(loan => (
                                                <option key={loan.id} value={loan.loanName}>
                                                    {loan.loanName}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label className=' '>
                                        <strong className='text-xl'>Choose Account :</strong>
                                        <select onChange={handleDestinationAccountChange} required className='text-center  focus-visible:ring-gray-700 text-sm  rounded-md bg-slate-900 ml-2'>
                                            <option disabled selected hidden value="">Select Account</option>
                                            {client.map(account => (
                                                <option key={account.number} value={account.number}>
                                                    {account.number}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    <label className='flex items-center'>
                                        <strong className='text-xl'>Choose Payments :</strong>
                                        <div className="ml-2">
                                            <select onChange={handlePaymentsChange} required className='text-center text-sm rounded-md bg-slate-900'>
                                                <option disabled selected hidden value="">Select Payments</option>
                                                {installments.map(payment => (
                                                    <option key={payment} value={payment}>
                                                        {payment}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </label>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className=''>
                                        <strong className='text-xl'> Enter Amount :</strong>
                                        <input onChange={handleAmountChange}  className=" mt-3 bg-slate-900 w-full text-white rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Enter Amount $" type='number' min="0" max="500000" required />
                                    </label>
                                    <label>
                                        <small>Max Amount: USD $500,000.00</small>
                                    </label>
                                    <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                                        <small className='text-xl'>Accept terms of use</small>
                                        <div className="relative inline-block">
                                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                                        </div>
                                    </label>
                                    <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                                        <small className='text-xl'>Submit to newsletter</small>
                                        <div className="relative inline-block">
                                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                                        </div>
                                    </label>
                                </div>
                                <button type='submit' className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" >SING UP FOR LOAN</button>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </section>
            </div>

        </div>

    )
}

export default AplayLoanMain
