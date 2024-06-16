import React from 'react'
import WelcomeLogOut from '../Components/WelcomeLogOut'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <WelcomeLogOut />
            <HeaderNav />
            <div className="content">
                <Outlet /> {/* Renderiza las rutas anidadas aquí */}
            </div>
            <Footer />
        </div>
    )
}   

export default Layout
