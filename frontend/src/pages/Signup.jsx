import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
const Signup = () => {
    const navigate=useNavigate();
   const {login} =useContext(AuthContext)
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const handleSignup=async()=>{
        try {
            const res=await axios.post("http://localhost:8923/api/auth/signup",{
                name,email,password
            })
            login(res.data.token);
            navigate("/dashboard");
        } catch (error) {
            setError('signup failed')
            
        }
    }
  return (
    <>
<h1>Signup page</h1>
<input type="text" value={name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/>
<input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={handleSignup}>Sign Up</button>
<p>{error}</p>

    </>
  )
}

export default Signup