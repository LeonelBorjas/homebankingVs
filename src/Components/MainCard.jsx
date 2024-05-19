import React from 'react'
import { Link } from 'react-router-dom'


const MainCard = () => {
    return (
        <div className='flex flex-col max-w-full w-full grow justify-center items-center bg-[#0C0C0C] text-white'>
            <h3 className='font-bold text-2xl my-2'>Your Cards:</h3>
            <div className='mt-2 flex flex-col md:flex-row gap-4 items-center justify-center'>
                <Link to={"/AplayNewCard"} >
                <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">ADD NEW CARD</button>
                </Link>
            </div>
            <div className='flex flex-wrap justify-center items-center w-11/12 gap-2'>
                <div className='w-full my-2 flex flex-col justify-center items-center'>
                    <h3 className='border-b my-2 w-1/3 font-bold text-center'>CREDIT CARDS</h3>
                    <div className='flex flex-wrap justify-center items-center gap-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <picture>
                                <img src="/public/assets/img/cardBlack-1.png" alt="card_black" />
                            </picture>
                        </div>
                        <div>
                            <picture>
                                <img src="/public/assets/img/cardGold-1.png" alt="card_gold" />
                            </picture>
                        </div>
                    </div>
                </div>
                <div className='w-full my-2 flex flex-col justify-center items-center'>
                    <h3 className='border-b my-2 w-1/3 font-bold text-center'>DEBIT CARDS</h3>
                    <div className='flex flex-wrap justify-center items-center gap-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <picture>
                                <img src="/public/assets/img/cardTitanium-1.png" alt="card_titanium" />
                            </picture>
                        </div>
                        <div >
                            <picture>
                                <img className='w-[269px] rounded-xl' src="/public/assets/img/CardBlanc.png" alt="card_White" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard
