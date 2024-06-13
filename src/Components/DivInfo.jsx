import React from 'react'

const DivInfo = (props) => {
    return (
        <div className={'flex flex-col justify-center items-center rounded-lg text-white px-2 gap-2 lg:gap-4 py-2 lg:hover:shadow-xl lg:hover:scale-105 ' + (props.class || '')}> 
            <strong className='text-lg'>{props.loantype}</strong>
            <div className={'flex flex-wrap gap-5 w-full px-1 text-center items-center ' + (props.class || '')}>
                <strong className='text-lg'>Amount :</strong>
                <p className={'text-xl ' + (props.class || '')}>{props.amount}</p>
            </div>
            <div className={'flex flex-wrap w-full gap-5 px-1 text-center items-center  ' + (props.class || '')}>
                <strong className='text-lg'>Payments :</strong>
                <p>{props.creationdate}</p>
            </div>
        </div>
    );
    
}

export default DivInfo
