import React from 'react'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'
import Login from './components/Login'
import { ToastContainer} from 'react-toastify';

const App = () => {

  const {showLogin}= useContext(AppContext)
  return (
     <div className='min-h-screen bg-gradient-to-b from-teal-50 to-orange-50 px-4 sm:px-10 md:px-14 lg:px-28 '>
     <ToastContainer position='bottom-right'/>
     <Navbar/>
    {showLogin && <Login/>} 
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/buy' element={<BuyCredit/>}/>
    </Routes>
    <Footer/>
     </div>
  )
}

export default App