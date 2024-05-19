
import ButtonNewAccount from './ButtonNewAccount'
import Banner from './Banner'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import AccountInfo from './AccountInfo';

const MainAccounts = () => {
    const [accounts, setAccounts] = useState([]); //Estado inicial Vacio
    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Variable de estado para almacenar los errores

    useEffect(() => {  //Peticion
        const fetchAccounts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/clients/1');
                console.log(response.data)
                console.log(response.data.accounts)
                setClient(response.data)
                setAccounts(response.data.accounts); // Capturar el JSON en la variable de estado accounts
            } catch (err) {
                console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola
                setError(err.message);
            }
        };

        fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte
    }, []);

    if (loading) {
        return (
            <div className='w-full text-center'>
                <h1>Loading</h1>
            </div>
        )
    }

    return (

        <div className='flex flex-col flex-grow  justify-around items-center bg-[#0C0C0C] h-full text-white'>
            <Banner banner="/public/assets/img/banner.png" />
            <div className='h-full w-full flex flex-col justify-center items-center'>
                <div className='flex flex-wrap justify-around items-center gap-8 my-4'>
                    <div>
                        <ButtonNewAccount text="CREATE NEW CARD" />
                    </div>
                    {
                        accounts.map((account, id) => {
                            return (
                                <a key={id} href="#" className='flex flex-col justify-center items-center'>
                                    <AccountInfo number={account.number} balance={account.balance} creationDate={account.creationDate} />
                                </a>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default MainAccounts




