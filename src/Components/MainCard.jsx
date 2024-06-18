import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'


const MainCard = () => {
    const token = useSelector(store => store.authReducer.token)
    const [cards, setCards] = useState([])
    const [flippedIndex, setFlippedIndex] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('https://dhuebank.onrender.com/api/clients/cards', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setCards(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching cards:', error)
            }
        }

        fetchCards()
    }, [token])


    const handleCardClick = (index) => {
        if (flippedIndex === index) {
            setFlippedIndex(null)
        } else {
            setFlippedIndex(index)
        }
    }

    const getColorClass = (color) => {
        switch (color) {
            case 'GOLD':
                return 'bg-yellow-500'
            case 'TITANIUM':
                return 'bg-gray-500'
            case 'SILVER':
                return 'bg-gray-300'
            default:
                return 'bg-white'
        }
    }

    return (
        <div className='article-card'>
            <div className='article-content-card flex flex-col max-w-full w-full grow justify-center items-center bg-[#0C0C0C] text-white'>
                <h3 className='font-bold text-2xl my-2 mt-5'>Your Cards:</h3>
                <div className='mt-2 flex flex-col md:flex-row gap-4 items-center justify-center mb-5'>
                    <Link to="/AplayNewCard">
                        <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">ADD NEW CARD</button>
                    </Link>
                </div>
                <div className='flex flex-wrap justify-center items-center w-11/12 gap-4 mb-5'>
                    {cards.map((card, index) => (
                        <div key={index} className='w-full my-2 flex flex-wrap justify-center items-center'>
                            <div className={`rounded-lg p-4 w-80 ${getColorClass(card.cardColor)} ${flippedIndex === index ? 'flipped' : ''}`} onClick={() => handleCardClick(index)}>
                                {card.cardType === 'CREDIT' ? (
                                    <span className="bg-gray-800 px-2 py-1 rounded text-white">Credit</span>
                                ) : (
                                    <span className="bg-gray-800 px-2 py-1 rounded text-white">Debit</span>
                                )}
                                <p className="text-2xl mt-1 tracking-widest italic">{card.number}</p>
                                <div className="flex justify-between mt-2">
                                    <div>
                                        <p className="text-sm italic font-bold">Valid From: {card.since}</p>
                                        <p className='text-sm italic font-bold'>Valid Until: {card.until}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className="text-xs mr-1">CCV</p>
                                        {flippedIndex === index && <p className='text-sm italic font-bold'>{card.securityCode}</p>}
                                    </div>
                                </div>
                                <div className='flex justify-between items-end mt-2'>
                                    <p className="text-lg font-bold">{card.cardName}</p>
                                    <img className='w-10 mt-2' src="/assets/img/chip.png" alt="card chip" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainCard
