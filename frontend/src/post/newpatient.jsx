import React from "react";
import { useState } from "react";
import  axios from "axios"
import { Link } from "react-router-dom";


function Newpatient(){
const [firstname,setFirstname] = useState('')
const  [secondname,setSecondname]  = useState('')
const  [age,setAge]  = useState('')
const  [phonenumber,setPhonenumber] = useState('')
const [residence,setResidence]  = useState('')
const [alternativephonenumber,setAlternativephonenumber] = useState('')
const [idnumber,setIdnumber] = useState('')
const [treatments,setTreatments] = useState('')
const [payment,setPayment] = useState('')
const [balance,setBalance] = useState('')
const [nextdate,setNextvisitdate] = useState('')
const  [message,setMessage]  = useState('')
const  [treatmentlenghth,setTreatmentlength] = useState('')


async function Postpatient(e){
e.preventDefault()
if(treatments.length < 24){
    setTreatmentlength('treatment ID must be 24 charachters')
}
else{

    try {
        const response = await axios.post('http://localhost:5000/patient',{
        Firstname:firstname,
        Secondname:secondname,
        age:age,
        phonenumber:phonenumber,
        residence:residence,
        alternativephoneNumber:alternativephonenumber,
        idNumber:idnumber,
        treatments:treatments,
        Payment:payment,
        Balance:balance,
        NextVisitDate:nextdate
        
        })
        if(response.data.message === 'patient saved'){
        setMessage('Client successfully saved')
        
        }
        else{
            setMessage('Client Not Saved..kindly try again later')
        }
        
        
        
            
        } catch (error) {
            setMessage('Internal Server Error')
        }







}






    
}
return(
<div>
<form className="form-container" onSubmit={Postpatient}>
    <h1>Patient Personal Info</h1>
<div>
    <label>Enter Firstname:</label>
    <input type="text"
    
    required
    onChange={(e)=>setFirstname(e.target.value)}
    
    />
</div>



<div>
    <label>Enter Secondname:</label>
    <input type="text"
    
    required
    onChange={(e)=>setSecondname(e.target.value)}
    
    />
</div>





<div>
    <label>Enter age:</label>
    <input type="number"
    
    required
    onChange={(e)=>setAge(e.target.value)}
    
    />
</div>



<div>
    <label>Enter phonenumber:</label>
    <input type="number"
    
    required
    onChange={(e)=>setPhonenumber(e.target.value)}
    
    />
</div>


<div>
    <label>Enter Residence:</label>
    <input type="text"
    
    required
    onChange={(e)=>setResidence(e.target.value)}
    
    />
</div>




<div>
    <label>Enter alternativephoneNumber:</label>
    <input type="number"
    
    required
    onChange={(e)=>setAlternativephonenumber(e.target.value)}
    
    />
</div>


<div>
    <label>Enter idNumber:</label>
    <input type="number"
    
    required
    onChange={(e)=>setIdnumber(e.target.value)}
    
    />
</div>


<div>
    <label>Enter treatment ID:</label>
    <input type="text"
    
    required
    onChange={(e)=>setTreatments(e.target.value)}
    
    />
</div>
<div>
    <label>Enter Payment:</label>
    <input type="number"
    
    required
    onChange={(e)=>setPayment(e.target.value)}
    
    />
</div>


<div>
    <label>Enter Balance:</label>
    <input type="number"
    
    required
    onChange={(e)=>setBalance(e.target.value)}
    
    />
</div>



<div>
    <label>Enter next visit date:</label>
    <input type="text"
 
    onChange={(e)=>setNextvisitdate(e.target.value)}
    
    />
</div>


<button>Submit</button>
<p className="message">{message}</p>
<p className="message">{treatmentlenghth}</p>
<Link to='/navigation' className="t">Home</Link>

</form>
<div>

</div>
















    
</div>

















)










}
export default Newpatient