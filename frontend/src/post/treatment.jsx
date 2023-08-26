import React from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";



function Treatment(){
const [symptom,setSymptom] = useState('')
const [labtest,setLabtest] = useState('')
const [labtestdesc,setLabtestdesc] = useState('')
const [cause,setCause] = useState('')
const [medicationoffered,setMedicationoffered] = useState('')
const [durationofsickeness,setDurationofsickness] = useState('')
const [message,setMessage] = useState('')
const  [treatmentid,setTreatmentid] = useState('')


async function Posttreatment(e){
e.preventDefault()


try {
   const response = await axios.post('http://localhost:5000/treatment',{
   symptom:symptom,
   labtest:labtest,
labtestdesc:labtestdesc,
  cause:cause,
  medicationOffered:medicationoffered,
  durationofSickness:durationofsickeness

   }) 
   
if(response.data.message==='treatment saved'){
    setMessage('treatment submitted')
    setTreatmentid(response.data.savedTreatment._id)
}
else{
    setMessage('Treatment not saved try again later')
}

} catch (error) {
    setMessage('error')
}

}

return(
<div>
<form className="form-container" onSubmit={Posttreatment}>
<div>
<label>Enter Symptom</label>
<textarea required onChange={(e)=>setSymptom(e.target.value)}></textarea>


</div>


<div>
<label>Enter labtest('if any')</label>
<textarea type="text" 
onChange={(e)=>setLabtest(e.target.value)}

/>

</div>


<div>
<label>Enter labtestdesc:</label>
<textarea type="text" 
onChange={(e)=>setLabtestdesc(e.target.value)}

/>

</div>


<div>
<label>Enter Cause:</label>
<textarea type="text" 
onChange={(e)=>setCause(e.target.value)}

/>

</div>


<div>
<label>Enter medicationOffered:</label>
<textarea type="text" 
onChange={(e)=>setMedicationoffered(e.target.value)}

/>

</div>


<div>
<label>Enter durationofsickeness:</label>
<textarea type="text" 
onChange={(e)=>setDurationofsickness(e.target.value)}

/>

</div>
<button>Submit details</button>
<p>{message}</p>
<p> Treatmentsid:{treatmentid}</p>
<Link to='/patient' className="t">Go to Patient</Link>

</form>








</div>






)






}
export default Treatment