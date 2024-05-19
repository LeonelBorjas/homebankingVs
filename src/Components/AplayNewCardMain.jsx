import React from 'react'

const AplayNewCardMain = () => {
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
                        <form className='w-80 h-full p-2 flex flex-col justify-around gap-8 items-center bg-[#263640] rounded-2xl'> 
                            <div className='z-50'>
                                <label className='z-50 rounded-lg'>Choose Color: </label>
                                <select className='z-50 text-center  text-sm rounded-md bg-slate-900 ml-2 '>
                                    <option disabled>Select your color </option>
                                    <option className='z-50'>GOLD</option>
                                    <option className='z-50'>TITANIUM</option>
                                    <option className='z-50'>SILVER</option>
                                </select>
                            </div>
                            <div className='z-50'>
                                <label className='z-50 '>Choose Type: </label>
                                <select className='z-50 text-center  text-sm  rounded-md bg-slate-900 ml-2'>
                                <option disabled>Select your type Card </option>
                                    <option className='z-50'>DEBIT</option>
                                    <option className='z-50'>CREDIT</option>
                                </select>
                            </div>
                            <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" >CREATE CARD</button>
                        </form> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AplayNewCardMain
