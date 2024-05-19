import axios from 'axios'
import React, { useState, useEffect } from 'react';

const WelcomeLogOut = () => {

    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Variable de estado para almacenar los errores

    useEffect(() => {  //Peticion
        const fetchAccounts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/clients/1');
                console.log(response)
                 setClient(response.data)   
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
        );
    }


return (
    <div className='h-full w-full p-2 flex justify-evenly md:justify-center items-center gap-2 bg-black'>
        <div className='h-full w-full flex items-center justify-around gap-2'>
            <picture className='h-full grow object-cover flex items-center justify-end'>
                <img className='w-16 object-cover rounded-full cursor-pointer' src="/public/assets/img/10015419.webp" alt="profile_foto" />
            </picture>
            <h1 className='grow text-white font-bold'>Welcome, {client.firstName + " " +  client.lastName}</h1>
        </div>
        <article className='w-20 h-full rounded-full object-cover flex items-center justify-center md:self-right cursor-pointer bg-red-500 border border-red-600'>
            <h3 className='w-full text-center text-white text-sm font-bold'>Log out</h3>
        </article>
    </div>
)
}

export default WelcomeLogOut
