import React from "react";
import  axios from "axios"
import { useState,useEffect } from "react";
import { HiMail } from 'react-icons/hi'
import { BsFillPersonBadgeFill } from 'react-icons/bs'
import "../index.css"
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Registration(){
let content
const navigate = useNavigate()
const [username,setUsername]  = useState('')
const  [email,setEmail]       = useState('')
const   [password,setPassword] = useState('')
const  [passswordlength,setPasswordlength] = useState('')
const  [message,setMessage]  = useState('')



const [showPassword,setShowPassword] = useState(false)


async function Postreg(e){
e.preventDefault()


if(password.length < 5){
setPasswordlength('password must be at least 5 charachters')

}else{

try {
    const response = await axios.post('http://localhost:5000/register',{

 Username:username,
 Email: email,
 password:password

    })
if(response.data.message==='posted'){

    setMessage('registered successfully')
    navigate('/navigation')
}
else{
    setMessage('Failed Try again later')
}


} catch (error) {
    
setMessage('Registration Failed Try again later')





}














}





}
return(




    <div>
        <form onSubmit={Postreg} className="form-container">
            <h1>Registration</h1>
            <div>
                <i><BsFillPersonBadgeFill/></i>
            <label>Enter Username:</label>
        <input type="text"
        required
        onChange={(e)=>setUsername(e.target.value)}
        
        />
        
        
            </div>
        
        
        <div>
        <i><HiMail/></i>
        <label>Enter Email:
            
            </label>
            
            <input type="email" 
            required
            autoComplete="on"
            onChange={(e)=>setEmail(e.target.value)}
            />
            
        </div>
        
        
        
        <div>
        <label>Enter Password:</label>
        
        <input
                type={showPassword ? 'text' : 'password'}
               required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
        </div>
        
        
        
        
        
        
        
        <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </label>
        
        
        
        <button>Register</button>
        
        <p className="message">{message}</p>
        
        
        <p>{passswordlength}</p>
        <Link to='/' className="t">Already Have An Account?</Link>
        <p>&copy;Ebenezer Clinic 2023</p>
        </form>
        
        
        
        
        
        
        
        
        
        
        
        </div>







)











}
export default Registration