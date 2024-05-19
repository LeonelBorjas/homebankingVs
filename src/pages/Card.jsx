import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import Footer from '../Components/Footer'
import MainCard from '../Components/MainCard'
import WelcomeLogOut from '../Components/WelcomeLogOut'



const Card = () => {
  return (
    <>
      <header>
        <WelcomeLogOut/>
        <HeaderNav/>
      </header>
      <main>
        <MainCard/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Card
