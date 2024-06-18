import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate, useNavigate } from 'react-router-dom'

const AplayNewCardMain = () => {
    const token = useSelector(store => store.authReducer.token)
    const [cardType, setCardType] = useState('')
    const [cardColor, setCardColor] = useState('')
    const navigate = useNavigate()

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
        toast.error('You exceed the maximum card limit o card color for client', {
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
                'https://dhuebank.onrender.com/api/clients/cards',
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
        } finally {
            // Reset
            setCardType('');
            setCardColor('');
        }
    }

    return (
        <div className='article-aplyCard flex items-center justify-center min-h-screen bg-[#0C0C0C]'>
            <div className='article-content '>
                <section className=' text-white w-full max-w-screen-lg h-full p-2 flex flex-col justify-around gap-8 items-center'>
                    <div className='h-full flex flex-col md:flex-row md:justify-center lg:justify-center items-center gap-4'>
                        {/* Primera carta */}
                        <div className='flex justify-center items-center w-full md:w-1/2 gap-4 mb-5 mt-8 md:mb-0'>
                            <div className="bg-white text-black rounded-lg p-4 w-80 relative flex flex-col gap-1">
                                <span className="bg-gray-800 px-2 py-1 rounded text-white absolute top-2 left-2">Credit</span>
                                <p className="text-2xl mt-6 tracking-widest italic">**** **** **** ****</p>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-sm italic font-bold">Valid From: 06/23</p>
                                        <p className='text-sm italic font-bold'>Valid Until: 01/28</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className="text-xs mr-1">CCV</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end mt-2'>
                                    <p className="text-lg font-bold">Full Name</p>
                                    <img className='w-10 mt-2' src="public/assets/img/chip.png" alt="card chip" />
                                </div>
                            </div>
                        </div>

                        {/* Segunda carta */}
                        <div className='flex justify-center items-center w-full md:w-1/2 gap-4 mb-5 mt-8 md:mb-0'>

                            <div className="bg-white text-black rounded-lg p-4 w-80 relative">
                                {/* Banda magnética */}
                                <div className="bg-black h-12 w-full mb-2"></div>
                                <div className="bg-gray-200 h-8 w-full mb-2 flex justify-between items-center p-2">
                                    <p className="text-xs">CVV</p>
                                    <p className="text-sm italic font-bold">***</p>
                                </div>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-sm italic font-bold">Thank you for choosing us</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end mt-2'>
                                    <p className="text-lg font-bold">DHUE BANK</p>
                                    <img className='w-10 mt-2' src="public/assets/img/chip.png" alt="card chip" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    <form onSubmit={handleCreateCard} className='w-full md:w-80 h-full p-2 flex flex-col justify-around gap-8 items-center bg-[#263640] rounded-2xl'>
                        <div>
                            <label>Choose Color: </label>
                            <select value={cardColor} onChange={(e) => setCardColor(e.target.value)} className='text-center text-sm rounded-md bg-slate-900 ml-2'>
                                <option value="" disabled>Select your color</option>
                                <option value="GOLD">GOLD</option>
                                <option value="TITANIUM">TITANIUM</option>
                                <option value="SILVER">SILVER</option>
                            </select>
                        </div>
                        <div>
                            <label>Choose Type: </label>
                            <select value={cardType} onChange={(e) => setCardType(e.target.value)} className='text-center text-sm rounded-md bg-slate-900 ml-2'>
                                <option value="" disabled>Select type Card</option>
                                <option value="DEBIT">DEBIT</option>
                                <option value="CREDIT">CREDIT</option>
                            </select>
                        </div>
                        <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">CREATE CARD</button>
                    </form>
                    <ToastContainer />
                </section>
            </div>
        </div>

    )
}

export default AplayNewCardMain
