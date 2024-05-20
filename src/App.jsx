import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Accounts from './pages/Accounts'
import Card from './pages/Card'
import Loan from './pages/Loan'
import Transactions from './pages/Transactions'
import AplayLoan from './pages/AplayLoan'
import AplayNewCard from './pages/AplayNewCard'
import Layout from './layouts/layout'




function App() {

  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Accounts/>} /> 
      <Route path='/Card' element={<Card/>} />
      <Route path='/Loans' element={<Loan/>} />
      <Route path='/Transactions' element={<Transactions/>} />
      <Route path='/AplayLoan' element={<AplayLoan/>} />
      <Route path='/AplayNewCard' element={<AplayNewCard/>} />
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App  