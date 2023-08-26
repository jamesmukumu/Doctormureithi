import React from "react";
import { useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";



function Firstname(){
const [clientdata,setClientdata] = useState([])
 const [message,setMessage] = useState('')
const [firstname,setFirstname] = useState('')


    async function Fetchinfo(e){
        e.preventDefault()
        
   try {
         const response = await axios.get('http://localhost:5000/firstname',{
         params:{Firstname:firstname}
         
         })
         
         if(response.data.message === 'Patient found'){
             setClientdata(response.data.data)
         }
        
        if(response.data.error === 'Patient not found'){
        
         setMessage('Patient Does Not Exist')


        }



   } catch (error) {
    setMessage('Internal Server Error')
   }
  }







return(
<div>
<form onSubmit={Fetchinfo} className="form-container">
    <h1>Find Patient By Firstname</h1>
    <label >Enter Firstname:</label>
<input type="text"
required
onChange={(e)=>setFirstname(e.target.value)}
/>




<button>Search</button>

<p>{message}</p>


{clientdata.map((item)=>(

<div>
    <p>Firstname:{item.Firstname}</p>
    <p>Secondname:{item.Secondname}</p>
    <p>Age:{item.age}</p>
    <p>Phonenumber:{item.phonenumber}</p>
    <p>IDnumber:{item.idNumber}</p>
    <p>Residence:{item.residence}</p>
    <p>AlternativePhone:{item.alternativephoneNumber}</p>
    <p>Payment:{item.Payment}</p>
    <p>Balance:{item.Balance}</p>
    <p>Next visit Date:{item.NextVisitDate}</p>
    <p>Symptoms:{item.treatments.symptom[0]}</p>
    <p>Labtest:{item.treatments.labtest}</p>
    <p>Labtestdes:{item.treatments.labtestdesc[0]}</p>
    <p>Cause:{item.treatments.cause}</p>
    <p>Medication:{item.treatments.medicationOffered}</p>
    <p>DurationofSickness:{item.treatments.durationofSickness}</p>
   
</div>

))}
 <Link to='/navigation' className="t">Back</Link>
</form>



</div>





)

}
export default Firstname
