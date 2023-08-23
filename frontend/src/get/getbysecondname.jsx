import React from "react";
import { useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"


function Secondname(){
const [clientdata,setClientdata] = useState([])
 const [message,setMessage] = useState('')
const [secondname,setSecondname] = useState('')

    async function Fetchinfo(e){
        e.preventDefault()
        
   try {
         const response = await axios.get('http://localhost:5000/secondname',{
         params:{Secondname:secondname}
         
         })
         
         if(response.data.message === 'Patient Found'){
             setClientdata(response.data.data)
         }
        
        if(response.data.error === 'Patient not Found'){
        
         setMessage('Patient Does Not Exist')


        }



   } catch (error) {
    setMessage('Internal Server Error')
   }
  }






return(
<div>
<form onSubmit={Fetchinfo} className="form-container">
    <h1>Find Patient By Secondname</h1>
    <label>Enter Patient's Secondname:</label>
<input type="text"
required
onChange={(e)=>setSecondname(e.target.value)}
/>




<button>Search</button>

<p>{message}</p>


{clientdata.map((item)=>(

<div>
    <h1>Patient Information:</h1>
    <p>Firstname:{item.Firstname}</p>
    <p>Secondname:{item.Secondname}</p>
    <p>Age:{item.age}</p>
    <p>phonenumber:{item.phonenumber}</p>
    <p>alternativephonenumber:{item.alternativephoneNumber}</p>
    <p>idnumber:{item.idNumber}</p>
    <p>Symptoms presented:{item.treatments.symptom[0]}</p>
    <p>Labtest Description:{item.treatments.labtestdesc[0]}</p>
    <p>Labtest Done:{item.treatments.labtest}</p>
    <p>Cause Of Illness:{item.treatments.cause}</p>
    <p>Duration of sickness:{item.treatments.durationofSickness}</p>
    <p>Medication:{item.treatments.medicationOffered}</p>


</div>

))}
<Link to='/navigation' className="t">Back</Link>
</form>




</div>





)

}
export default Secondname
