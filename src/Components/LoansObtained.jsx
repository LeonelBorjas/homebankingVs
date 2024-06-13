import DivInfo from './DivInfo'
import ButtonNewAccount from './ButtonNewAccount'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const LoansObtained = () => {
    const token = useSelector(store => store.authReducer.token)
    const [loans, setLoans] = useState([]); //Estado inicial Vacio
    const [client, setClient] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Variable de estado para almacenar los errores

    useEffect(() => {  //Peticion
        const fetchLoans = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth/current', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                } );
                console.log(response.data)
                console.log(response.data.loans)
                setClient(response.data)
                setLoans(response.data.loans); // Capturar el JSON en la variable de estado accounts
            } catch (err) {
                console.error('Error fetching data: ', err); // Capturar y mostrar el error en la consola
                setError(err.message);
            }
        };

        fetchLoans(); // Llamar a la función fetchAccounts cuando el componente se monte
    }, []);

    return (
        <div className='h-full w-full flex flex-wrap justify-center items-center'>
            <div className='flex flex-wrap justify-around items-center gap-4 my-4'>
                <div className='flex flex-wrap justify-center items-center gap-9 my-4 lg:hover:shadow-xl lg:hover:sacle-105'>
                    {
                        loans.map((loan, id) => {
                            return (
                                <div key={id} className='flex flex-col justify-center items-center rounded-lg bg-[#263640] rounded-46px   px-2 gap-2 lg:gap-4 py-2 lg:hover:shadow-xl lg:hover:scale-105'>
                                    <DivInfo loantype={loan.name} amount={"$ " + loan.amount} creationdate={loan.payments} />
                                </div>
                            )
                        })
                    }
                    
            
                </div>
                <ButtonNewAccount text="NEW LOAN" ruta="/AplayLoan" />
            </div>
        </div>

    );
}

export default LoansObtained;
