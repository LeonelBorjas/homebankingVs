import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Anchor = (props) => {
    const location = useLocation()
    const isActive = location.pathname === props.to

    return (
        <Link to={props.to} className={"w-full flex flex-col justify-center items-center text-darkblue font-bold scale-105  " + (props.className || '')}>
            <img src={isActive ? props.activeIcon : props.img} alt="" className='w-10' />
            <p> {props.text} </p>
        </Link>
    )
}

export default Anchor
