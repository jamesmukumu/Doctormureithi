import React from "react";
import { useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function Idnumber(){
const [clientdata,setClientdata] = useState([])
 const [message,setMessage] = useState('')
const [idnumber,setIdnumber] = useState('')

    async function Fetchinfo(e){
        e.preventDefault()
        
   try {
         const response = await axios.get('http://localhost:5000/idNumber',{
         params:{idNumber:idnumber}
         
         })
         
         if(response.data.message === 'Patient Found'){
             setClientdata(response.data.data)
         }
        
        if(response.data.error === 'Patient not found'){
        
         setMessage('Not found')


        }



   } catch (error) {
    setMessage('Internal Server Error')
   }
  }






return(
<div>
<form onSubmit={Fetchinfo} className="form-container">
    <h1>Find Patient By Idnumber</h1>
    <div>

        <label >Enter IDnumber:</label>
    <input type="number"
required
onChange={(e)=>setIdnumber(e.target.value)}
/>
    </div>

<div>
<button>Search</button>
</div>


<p>{message}</p>


{clientdata.map((item)=>(

<div>
    <h1>Patient Information:</h1>
    <p>Firstname:{item.Firstname}</p>
    <p>Secondname:{item.Secondname}</p>
    <p>Phonenumber:{item.phonenumber}</p>
    <p>Residence:{item.residence}</p>
    <p>Age:{item.age}</p>
    <p>alternativephonenumber:{item.alternativephoneNumber}</p>
    <p>PatientCreatedat:{item.createdAt}</p>
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
export default Idnumber
