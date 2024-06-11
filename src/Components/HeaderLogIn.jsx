import React from 'react'
import FooterSocialMedia from './FooterSocialMedia'

const HeaderLogIn = () => {
    return (
        <div className='bg-black py-5 flex justify-between items-center h-[15vh] px-40'>
            <div >
            <picture className='flex gap-6 justify-center items-center my-2'>
                <img className='rounded-full w-16' src="public/assets/img/penguin.jpg" alt="bank logo" />
                <h1 className='text-white font-bold text-6xl lg:text-8x1'>DHUE BANK</h1>
            </picture>
            </div>
            <div className='flex gap-10 justify-center items-center'>
                <FooterSocialMedia/>
            </div>
        </div>
    )
}

export default HeaderLogIn
