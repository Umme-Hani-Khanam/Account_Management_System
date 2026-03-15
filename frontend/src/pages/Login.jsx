import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const navigate=useNavigate();
    const {login}=useContext(AuthContext);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const handleLogin=async () => {
        try {
            const res=await axios.post("http://localhost:8923/api/auth/login",{email,password});
            login(res.data.token);
            navigate('/dashboard');
        } catch (error) {

            setError('LOGIN FAILED')
            
        }
    }
  return (
   <>
   <input type='email' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={handleLogin}>Login</button>
<p>{error}</p>
   </>
  )
}

export default Login