import React from 'react'
import LoansObtained from './LoansObtained'
import AplayLoanForm from './AplayLoanForm'
import Banner from './Banner'

const AplayLoanMain = () => {
    return (
        <div className=' font-sans bg-[#0C0C0C] bg-cover bg-no-repeat  '>
            <div className='text-white w-full h-full flex items-center justify-center gap-7  '>
                <section className=' w-80 h-full p-2 flex flex-col justify-around gap-8 items-center bg-[#263640] rounded-2xl'>
                    <div className='h-full'>
                        <div className='flex flex-col md:flex-row-reverse h-full text-center justify-center items-center gap-4'>
                            <form className='flex flex-col gap-1 ' action="">
                                <div>
                                    <label className=' '>
                                        Choose Loan:
                                        <select required className='text-center  text-sm rounded-md bg-slate-900 ml-2 '>
                                            <option disabled selected hidden value="0">Select Loan</option>
                                            <option value="1">Mortgage</option>
                                            <option value="2">Personal</option>
                                            <option value="3">Automotive</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label className=' '>
                                        Choose Account:
                                        <select required className='text-center  focus-visible:ring-gray-700 text-sm  rounded-md bg-slate-900 ml-2'>
                                            <option disabled selected hidden value="0">Select Account</option>
                                            <option >VIN001</option>
                                            <option >VIN002</option>
                                        </select>
                                    </label>
                                </div>
                                <div className='flex flex-col'>
                                    <label className=''>
                                        Enter Amount:
                                        <input className=" mt-3 bg-slate-900 w-full text-white rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Enter Amount" type='number' min="0" max="500000" required />
                                    </label>
                                    <label>
                                        <small>Max Amount: USD $500,000.00</small>
                                    </label>
                                    <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                                        Accept terms of use
                                        <div className="relative inline-block">
                                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                                        </div>
                                    </label>
                                    <label className="flex cursor-pointer items-center justify-between p-1 text-white">
                                        Submit to newsletter
                                        <div className="relative inline-block">
                                            <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" />
                                            <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                                        </div>
                                    </label>
                                </div>
                                <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" >SING UP FOR LOAN</button>
                            </form>
                        </div>
                    </div>
                </section>
                <div className=' mb-5 '>
                    <img className='w-[500px] h-auto' src="/public/assets/img/aplyLoan2.png" alt="pic_loan" />
                </div>
            </div>

        </div>

    )
}

export default AplayLoanMain
