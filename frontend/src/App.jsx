import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Statement from './pages/Statement'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/dashboard" element={<ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>}/>
      <Route path='/send' element={<ProtectedRoute>
<SendMoney/>        
      </ProtectedRoute>}/>
      <Route path='/statement' element={<ProtectedRoute>
        <Statement/>
      </ProtectedRoute>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App