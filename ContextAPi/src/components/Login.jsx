import React, {useState ,useContext}from "react";
import usercontext from "../context/usercontext";



function Login() {
    const [username ,setusername]=useState('')
    const [password,setpassword]=useState('')
    const { setuser}=useContext(usercontext)
    const handleform=(e)=>{
        e.preventDefault()
        setuser({username,password})
    }
  return (
    <>
    <h2>Login </h2>
    <input type="text" placeholder="Username" value={username} onChange={(e)=>setusername(e.target.value)}/>
    <input type="password" placeholder="password" value={password}  onChange={(e)=>setpassword(e.target.value)}/>
    <button onClick={handleform}>Submit </button>
    </>
  )
}

export default Login