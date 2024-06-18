import axios from 'axios'
import React, { useState, useEffect } from 'react'
import AccountInfo from './AccountInfo'
import { useSelector } from 'react-redux'
import Banner from './Banner'
import { useParams } from 'react-router-dom'
import '../utils/tablet.css'

const MainAccountSelect = () => {
    const { id } = useParams()
    const token = useSelector(store => store.authReducer.token)

    const [account, setAccount] = useState([])
    const [loading, setLoading] = useState(false) // Estado para indicar si la carga está en progreso (inicialmente falso)
    const [error, setError] = useState(null) // Variable de estado para almacenar los errores

    useEffect(() => {
        const fetchAccount = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://dhuebank.onrender.com/api/clients/accounts/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAccount(response.data)
            } catch (err) {
                console.error('Error fetching data: ', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchAccount()
    }, [id, token])


    return (
        <div className='flex flex-col flex-grow  justify-around items-center bg-[#0C0C0C] h-full text-white'>
            <Banner banner="/assets/img/banner-selectAccount.png" />
            <div className='h-full w-full flex flex-col justify-center items-center'>
                <div className='flex flex-wrap justify-around items-center gap-8 my-4'>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error: {error}</p>}
                    {account ? (
                        <div className='flex flex-col justify-center items-center'>
                            <AccountInfo
                                number={account.number}
                                balance={account.balance}
                                creationDate={account.creationDate}
                            />
                        </div>
                    ) : (
                        !loading && !error && <p>No account found</p>
                    )}
                    <div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm rtl:text-right text-blue-100 dark:text-blue-100 text-center">
                                <thead className="text-xs text-white uppercase bg-black border-b border-red-400 dark:text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 ">
                                            Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" className="px-6 py-3 ">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {account.transactions && account.transactions.map(transaction => (
                                        <tr key={transaction.id} className="bg-black border-b border-red-400">
                                            <td className="px-6 py-4">{transaction.type}</td>
                                            <td className="px-6 py-4">{transaction.amount}</td>
                                            <td className="px-6 py-4">{transaction.date}</td>
                                            <td className="px-6 py-4">{transaction.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAccountSelect
