import React from "react";
import { useState } from "react";
import axios from "axios";
import "../index.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../authorization";


function Login(){
    const { setIsAuthenticated } = useAuth();
    const navigate = useNavigate()
const [username,setUsername] =useState('')
const  [password,setPassword] = useState('')
const  [message,setMessage]  = useState('')
const [ showPassword,setShowPassword] = useState(false)
const  [passswordlength,setPasswordlength] = useState('')

async function Postlog(e){
    e.preventDefault()
if(password.length < 5){
    setPasswordlength('Password Must Be at least 5 charachters')
}
else{




    try {
        const response = await axios.post('http://localhost:5000/login',{
    Username:username,
    password:password
      })

if(response.data.message==='you have successfully logged in'){
    setMessage('Login successful')
   setIsAuthenticated(true)
   
    navigate('/navigation')
}
if(response.data.error==='UserName invalid'){
    setMessage('wrong username')
}
if(response.data.error==='invalid password....try again'){
    setMessage('wrong password')
}




    } catch (error) {
        setMessage('Server error try again later!')
    }

















}




}

return(
<div>
<form onSubmit={Postlog} className="form-container">
    <header><h2>Login</h2></header>
<div>
    <label>Enter Username:</label>
    <input type="text"
    required
    onChange={(e)=>setUsername(e.target.value)}
    
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





<button>Login</button>


<div>
<p className="message">{message}</p>
<p>{passswordlength}</p>
</div>
<p>Dont Have An account?<Link to="/registration">Register</Link></p>


</form>


</div>

) 

}
export default Login