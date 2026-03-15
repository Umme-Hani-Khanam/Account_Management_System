import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
    const {token,logout}=useContext(AuthContext);
    const [balance,setBalance]=useState(0)
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchBalance=async()=>{
            const res=await axios.get("http://localhost:8923/api/account/balance",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setBalance(res.data.balance);
        }
        fetchBalance()
    },[])
  return (
   <>
    <h1>Dashboard</h1>
    <h3>Balance:₹{balance}</h3>
   <button onClick={()=>navigate('/send')}>Send Money</button>
   <button onClick={()=>navigate('/statement')}>View Statement</button>
   <button onClick={logout}>Logout</button>
   </>
  )
}

export default Dashboard