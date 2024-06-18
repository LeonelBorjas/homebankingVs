import React from 'react'
import FooterSocialMedia from './FooterSocialMedia'

const HeaderLogIn = () => {
    return (
        <div className='bg-black gap-8 py-5 flex justify-between items-center px-4 md:px-10 lg:px-20 h-[15vh]'>
            <div className='flex items-center' >
            <picture className='flex gap-2  items-center'>
                <img className='rounded-full w-8 md:w-16' src="/assets/img/penguin.jpg" alt="bank logo" />
                <h1 className='text-white font-bold text-1xl md:text-4xl lg:text-5x1'>DHUE BANK</h1>
            </picture>
            </div>
            <div className='flex md:gap-10 justify-center items-center'>
                <FooterSocialMedia/>
            </div>
        </div>
    )
}

export default HeaderLogIn
