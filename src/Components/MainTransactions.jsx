import React from 'react'

const MainTransactions = () => {
    return (
        <div className='bg-[#0C0C0C] flex flex-col text-center text-white article-transaction '>
            <h2 className='text-center font-bold text-3xl mb-4 mt-5'>Make a Transaction</h2>
            <form className='flex flex-col gap-8 '>
                <div>
                <label className='flex justify-center items-center gap-5'>
                    <strong className='text-lg'>Destination Type :</strong>           
                    <small className='text-lg'>Own</small>
                    <input type="checkbox" name='id' />
                    <small className='text-lg'>Others</small>
                    <input type="checkbox" name='id' />
                </label>
                </div>
                <div className='flex flex-col gap-10'>
                    <label className=' flex flex-col gap-5 items-center justify-center '>
                    <strong className='text-lg'>Origin Account:</strong>
                    <select name="account" id="account-select" className='text-center h-8 w-1/4 focus-visible:ring-gray-700 text-sm  rounded-md bg-slate-900 ml-2 '>
                    <option disabled selected hidden value="1">Select Account</option>
                    <option value="2">VIN001</option>
                    <option value="3">VIN002</option>
                    </select>
                    </label>
                    <label className='flex flex-col gap-5 items-center justify-center'>
                        <strong className='text-lg'>Amount :</strong>
                        <input className='text-center w-1/4 focus-visible:ring-gray-700 text-sm h-8  rounded-md bg-slate-900 ml-2 ' required type="number" placeholder='Enter your amount $:'min="0"  />
                    </label>
                    <label className='flex flex-col gap-5 items-center justify-center'>
                        <strong className='text-lg'>Description :</strong>
                        <input className='text-center w-1/4 focus-visible:ring-gray-700 text-sm h-8 rounded-md bg-slate-900 ml-2 ' type="text" placeholder='Description of transaction' required />
                    </label>
                </div>
                <div className='mb-5'>
                <button type='submit' className='rounded-md p-4 bg-gray-700 m-2 text-lg text-white cursor-pointer transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95'>CONFIRM TRANSACTION</button>
                </div>
            </form>
            </div>
    )
}

export default MainTransactions
