import React from 'react'
import AplayLoanMain from '../Components/AplayLoanMain'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import WelcomeLogOut from '../Components/WelcomeLogOut'


const AplayLoan = () => {
    return (
        <>
            <header>
                <WelcomeLogOut/>
                <HeaderNav />
            </header>
            <main>
                <AplayLoanMain />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default AplayLoan
