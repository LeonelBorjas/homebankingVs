import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AplayNewCardMain = () => {
    const token = useSelector(store => store.authReducer.token)
    const [cardType, setCardType] = useState('')
    const [cardColor, setCardColor] = useState('')

    const mensajeSuccess = () => {
        toast.success('Card created successfully!', {
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

    const mensajeError = () => {
        toast.error('You exceed the maximum card limit', {
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

    const handleCreateCard = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                'http://localhost:8080/api/clients/cards',
                { cardType, cardColor },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('Card created:', response.data);
            mensajeSuccess()
        } catch (error) {
            console.error('Error creating card:', error)
            toast.error(mensajeError)
        }
    }
    
    return (
        <div className='w-full h-full flex items-center justify-center bg-[#0C0C0C]'>
            <section className='text-white w-full h-full p-2 flex flex-col justify-around gap-8 items-center'>
                <div className='h-full'>
                    <div className='flex flex-col md:flex-row-reverse h-full text-center justify-center items-center gap-4'>
                        <div className='flex justify-center items-center'>
                            <picture className='flex mt-5 flex-col gap-3 center'>
                                <img className='rounded-xl' src="/public/assets/img/cardAply.png" alt="card_aply" />
                                <img className='rounded-xl' src="/public/assets/img/cardBack.png" alt="card_aply_back" />
                            </picture>
                        </div>
                        <form onSubmit={handleCreateCard} className='w-80 h-full p-2 flex flex-col justify-around gap-8 items-center bg-[#263640] rounded-2xl'> 
                            <div className='z-50'>
                                <label className='z-50 rounded-lg'>Choose Color: </label>
                                <select value={cardColor} onChange={(e) => setCardColor(e.target.value)} className='z-50 text-center  text-sm rounded-md bg-slate-900 ml-2 '>
                                    <option value="" disabled >Select your color </option>
                                    <option value="GOLD" className='z-50'>GOLD</option>
                                    <option value="TITANIUM" className='z-50'>TITANIUM</option>
                                    <option value="SILVER" className='z-50'>SILVER</option>
                                </select>
                            </div>
                            <div className='z-50'>
                                <label className='z-50 '>Choose Type: </label>
                                <select  value={cardType} onChange={(e) => setCardType(e.target.value)} className='z-50 text-center  text-sm  rounded-md bg-slate-900 ml-2'>
                                <option  value="" disabled >Select type Card </option>
                                    <option value="DEBIT" className='z-50'>DEBIT</option>
                                    <option value="CREDIT" className='z-50'>CREDIT</option>
                                </select>
                            </div>
                            <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" >CREATE CARD</button>
                        </form> 
                        <ToastContainer/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AplayNewCardMain
