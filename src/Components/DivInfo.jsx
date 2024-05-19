import React from 'react'

const DivInfo = (props) => {
    return (

                    <div className={'flex flex-col justify-center items-center rounded-lg text-white font-bold px-2 gap-2 lg:gap-4 py-2 lg:hover:shadow-xl lg:hover:scale-105' + props.class || ''}> 
                        <h3>{props.loantype}</h3>
                        <div className={'flex flex-col w-full px-2' + props.class || ''}>
                            <h3>Amount:</h3>
                            <h3 className={'selft-center text-xl' + props.class || ''}>{props.amount}</h3>
                        </div>
                        <div className={'flex flex-wrap gap-1 px-2' + props.class || ''}>
                            <h3 className=''> Payments:</h3>
                            <h3>{props.creationdate}</h3>
                        </div>
                    </div>

    )
}

export default DivInfo
