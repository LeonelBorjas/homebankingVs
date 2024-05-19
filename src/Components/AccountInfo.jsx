import React from 'react'

const AccountInfo = (props) => {
    return (
        <div className='flex flex-col justify-center items-center rounded-lg bg-[#263640] rounded-46px  px-2 gap-2 lg:gap-4 py-2 lg:hover:shadow-xl lg:hover:scale-105'>
            <h3>Account Number: {props.number} </h3>
            <div className='flex flex-col w-full px-2'>
                <h3>Balance:</h3>
                <h3 className='selft-center text-xl'>USD ${props.balance}</h3>
            </div>
            <div className='flex flex-wrap gap-1 px-2'>
                <h3>Creation Date:</h3>
                <h3>{props.creationDate}</h3>
            </div>
            <p className='px-1 border-b cursor-pointer'>VIEW ACCOUNT ACTIVITY</p>
        </div>
    )
}

export default AccountInfo
