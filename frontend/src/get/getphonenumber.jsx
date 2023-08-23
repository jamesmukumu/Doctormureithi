import React from "react";
import { useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function Phonenumber(){
const [clientdata,setClientdata] = useState([])
 const [message,setMessage] = useState('')
const [phonenumber,setPhonenumber] = useState('')

    async function Fetchinfo(e){
        e.preventDefault()
        
   try {
         const response = await axios.get('http://localhost:5000/phonenumber',{
         params:{phonenumber:phonenumber}
         
         })
         
         if(response.data.message === 'Patient Found'){
             setClientdata(response.data.data)
         }
        
        if(response.data.error === 'Patient not Found'){
        
         setMessage('Patient Does Noe Exist')


        }



   } catch (error) {
    setMessage('Internal Server Error')
   }
  }






return(
<div>
<form onSubmit={Fetchinfo} className="form-container">
    <h1>Find an Existing Patient By Phonenumber</h1>
    <div>

        <label >Enter Phonenumber:</label>
    <input type="number"
required
onChange={(e)=>setPhonenumber(e.target.value)}
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
    <p>Symptoms:{item.treatments.symptom[0]}</p>
    <p>Labtest:{item.treatments.labtest}</p>
    <p>LabtestDesc:{item.treatments.labtestdesc[0]}</p>
    <p>Cause:{item.treatments.cause}</p>
    <p>Medication:{item.treatments.medicationOffered}</p>
    <p>Duration of sickness:{item.treatments.durationofSickness}</p>
</div>

))}
<p><Link to='/navigation' className="t">Back</Link></p>
</form>




</div>





)

}
export default Phonenumber
