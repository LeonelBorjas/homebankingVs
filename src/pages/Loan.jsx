import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import LoansObtained from '../Components/LoansObtained'
import WelcomeLogOut from '../Components/WelcomeLogOut'
import MainLoan from '../Components/MainLoan'


const Loan = () => {
  return (
    <>
      <header>
      <WelcomeLogOut />
        <HeaderNav/>
      </header>
      <main >
      <MainLoan/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Loan
