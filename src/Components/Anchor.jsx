import React from 'react'
import { Link } from 'react-router-dom'

const Anchor = (props) => {
    return (
        <Link to={props.to} className={" w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105 " + props.class || ''}>
            <img src={props.img} alt="" className='w-10' />
            <p> {props.text} </p>
        </Link>
    )
}

export default Anchor
