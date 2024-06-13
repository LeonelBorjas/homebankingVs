import React from 'react'
import HeaderLogIn from '../Components/HeaderLogIn'
import LoginMain from '../Components/LoginMain'




function Login () {

    return (
        <div className='w-full h-screen overflow-y-hidden'>
            <header>
                <HeaderLogIn/>
            </header>
            <main className=''>
                <LoginMain/>
            </main>
        </div>
    )
}


export default Login
