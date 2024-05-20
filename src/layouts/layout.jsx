import React from 'react'
import WelcomeLogOut from '../Components/WelcomeLogOut'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'

const layout = ({children}) => {
    return (
        <div>
            <WelcomeLogOut/>
            <HeaderNav/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout
