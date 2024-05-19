import React from 'react'

const Banner = (props) => {
    return (
        <div className='flex-col flex w-full h-[55vh] font-bold  text-center my-8'>
            <img className="w-[100%] h-full object-cover" src={props.banner} alt="banner homebanking" />
        </div>
    )
}

export default Banner