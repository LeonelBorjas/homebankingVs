
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Accounts from './pages/Accounts'
import Card from './pages/Card'
import Loan from './pages/Loan'
import Transactions from './pages/Transactions'
import AplayLoan from './pages/AplayLoan'
import AplayNewCard from './pages/AplayNewCard'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AccountSelect from './pages/AccountSelect'
import RoutesAuth from './HOCs/RoutesAuth'
import RoutesNoAuth from './HOCs/RoutesNoAuth'
import Layout from './layouts/Layout';

const routesAuth = [{
  path: '/Accounts',
  element: <Accounts />,
  key: 'accounts',
},
{
  path: '/Card',
  element: <Card />,
  key: 'card',
},
{
  path: '/Loans',
  element: <Loan />,
  key: 'loan',
},
{
  path: '/Transactions',
  element: <Transactions />,
  key: 'transactions',
},
{
  path: '/AplayLoan',
  element: <AplayLoan />,
  key: 'aplayloan',
},
{
  path: '/AplayNewCard',
  element: <AplayNewCard />,
  key: 'aplaynewcard',
},
{
  path: '/AccountSelect/:id',
  element: <AccountSelect />,
  key: 'accountselect',
}
]
const routesNoAuth = [{
  path: '/',
  element: <Login />,
  key: 'login',
},
{
  path: '/Register',
  element: <Register />,
  key: 'register',

}
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route   element={<Layout />}>
          {
            routesAuth.map(RoutesAuth)
          }
          </Route>
          {
            
            routesNoAuth.map(RoutesNoAuth)
          }
      </Routes> 
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App


