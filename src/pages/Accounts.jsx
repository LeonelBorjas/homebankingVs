import { useState } from 'react'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'

import WelcomeLogOut from '../Components/WelcomeLogOut'
import MainAccounts from '../Components/MainAccount'




function Accounts() {

    return (
        <>
            <div className="w-screen">
                <header>
                    <WelcomeLogOut />
                    <HeaderNav />
                </header>
                <main>
                <MainAccounts/>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Accounts     