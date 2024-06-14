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
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AccountSelect from './pages/AccountSelect'


function App() {

  return (
<BrowserRouter>
      <Routes>
        {/* Rutas para Login y Register */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Rutas que usan el layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Accounts />} />
          <Route path="Card" element={<Card />} />
          <Route path="Loans" element={<Loan />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="AplayLoan" element={<AplayLoan />} />
          <Route path="AplayNewCard" element={<AplayNewCard />} />
          <Route path='/AccountSelect/:id' element={<AccountSelect/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App


