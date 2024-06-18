import React from 'react'
import LoansObtained from './LoansObtained'
import ButtonNewAccount from './ButtonNewAccount'
import Banner from './Banner'


const MainLoan = () => {
    return (
        <div className='flex flex-col flex-grow  justify-around items-center bg-[#0C0C0C] h-full text-white'>
            <h3 className='font-bold text-2xl my-2 mt-10'>Your Loans:</h3>
                <Banner banner="/assets/img/bannerLoan.png" />
            <div>
                <LoansObtained />
            </div>
        </div>
    )
}

export default MainLoan
