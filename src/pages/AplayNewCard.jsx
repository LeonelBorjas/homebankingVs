import React from 'react'
import WelcomeLogOut from '../Components/WelcomeLogOut'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import AplayNewCardMain from '../Components/AplayNewCardMain'

const AplayNewCard = () => {
    return (
        <>
            <header>
                <WelcomeLogOut />
                <HeaderNav />
            </header>
            <main>
                <AplayNewCardMain/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default AplayNewCard
