
import ButtonNewAccount from './ButtonNewAccount'
import Banner from './Banner'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import AccountInfo from './AccountInfo';

const MainAccounts = () => {
    const [accounts, setAccounts] = useState([]) // Estado para almacenar los datos de las cuentas bancarias (inicialmente vacío)
    const [client, setClient] = useState([]) // Estado para almacenar los datos del cliente (inicialmente vacío)
    const [loading, setLoading] = useState(false) // Estado para indicar si la carga está en progreso (inicialmente falso)
    const [error, setError] = useState(null) // Variable de estado para almacenar los errores

    useEffect(() => {  //Peticion  //useEffect para que se ejecute solo una vez cuando se monte
        const fetchAccounts = async () => { // Función asíncrona para realizar la solicitud HTTP
            try {
                const response = await axios.get('http://localhost:8080/api/clients/1') // Realizar la solicitud GET a la API para obtener los datos del cliente y sus cuentas bancarias
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
    }, []) // Es un array de dependencias  

    useEffect(() => (console.log("wao")), [loading] )

    if (loading) { // Condición para mostrar un mensaje de carga mientras se está realizando la solicitud HTTP
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
                        <ButtonNewAccount text="CREATE NEW ACCOUNT" />
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




