import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/acciones/authActions'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const WelcomeLogOut = () => {

    const successLogout = ( ) => {
    toast.success('You have logged out, see you soon.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
    const navigate = useNavigate();
    const token = useSelector(store => store.authReducer.token)
    const dispatch = useDispatch()
    const [client, setClient] = useState([]) // Estado para almacenar los datos del cliente
    const [loading, setLoading] = useState(false); // Estado para indicar si la carga está en progreso  
    const [error, setError] = useState(null); // Variable de estado para almacenar los errores

    useEffect(() => {  //Peticion // Efecto secundario que se ejecuta cuando el componente se monta
        const fetchAccounts = async () => { // Función asíncrona para realizar la solicitud HTTP
            try {
                const response = await axios.get('http://localhost:8080/api/auth/current', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })  // Realizar la solicitud GET a la API para obtener los datos del cliente
                console.log(response.data)
                setClient(response.data)  // Actualizar el estado del cliente con los datos recibidos   
            } catch (err) {
                console.error('Error fetching data: ', err) // en caso de error mostramelo en la consola
                setError(err.message) // Actualizar el estado de error con el mensaje de error
            }
        };

        fetchAccounts(); // Llamar a la función fetchAccounts cuando el componente se monte
    }, []); // Useefect  es un array de dependencias, lo que significa que este efecto solo se ejecutará una vez, cuando el componente se monte

    if (loading) {
        return (
            <div className='w-full text-center'>
                <h1>Loading</h1>
            </div>
        );
    }
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
        successLogout()
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
            <p onClick={handleLogout} className='w-full text-center text-white text-sm font-bold'>Log out</p>
        </article>
    </div>
)
}

export default WelcomeLogOut
