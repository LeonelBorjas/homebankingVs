import React from 'react'
import { Link } from 'react-router-dom'

const ButtonNewAccount = (props) => {
    return (
        <div className='flex justify-around items-center gap-4'>
            <Link to={props.ruta} >
            <div className='mt-2'>
                <button type='reset'  className='<button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95" >SING UP FOR LOAN</button>'>{props.text}</button>
            </div>
            </Link>
        </div>
    )
}

export default ButtonNewAccount
