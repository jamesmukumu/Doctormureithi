import React from "react";
import { useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";


function Phonenumber(){
const [clientdata,setClientdata] = useState([])
 const [message,setMessage] = useState('')
const [phonenumber,setPhonenumber] = useState('')
const [updatedbalance,setUpdatedbalance] = useState('')
const [visitdate,setVisitdate] = useState('')
const [visitdateMessageupdate,setVisitdatemessage] = useState('')
const [updatemessage,setUpdatedmessage] = useState('')
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



  // updating balance
  
  async function Updatepatientinfo(e){
    e.preventDefault()
    try {
        const response = await axios.patch('http://localhost:5000/balance',{
        Balance:updatedbalance
        },
        {
            params:{Balance:clientdata[0].Balance}
        })
    
    
        if(response.data.message ==='Updated'){
         setUpdatedmessage('Details Updated')
        }
        else{
            setUpdatedmessage('Failed To Update Details!!oops')
        }
    } catch (error) {
        setUpdatedmessage('Internal Server Error')
    }
    
    
      }
  
      



      // updating visit date
      async function Updatevisitdate(e){
        e.preventDefault()
        const response = await axios.patch('http://localhost:5000/visitdate',{
            NextVisitDate:visitdate
        },
        {
            params:{NextVisitDate:clientdata[0].NextVisitDate}
        }
        )
        try {
            if(response.data.message==='Updated'){
                setVisitdatemessage('Visit Date Updated')
            }
            else{
                setVisitdatemessage('Failed to update..Try again later!!!')
            }
        } catch (error) {
            setVisitdatemessage('Internal Server Error')
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
<p><Link to='/navigation' className="t">Back</Link></p>
</form>


<div>
   
   <form onSubmit={Updatepatientinfo} className="form-container">
   <h1>Update Clients Balance</h1>
     <div>
     <label>Enter New Balance</label>
  <input type="number" 
  onChange={(e)=>setUpdatedbalance(e.target.value)}
  />
  
  
     </div>
  <button>Update</button>
  <p className="message">{updatemessage}</p>
   </form>
  
  
  
    </div>


    <div>
   
   <form onSubmit={Updatevisitdate} className="form-container">
   <h1>Update Patient's Visit Date</h1>
  <label>Enter New Visitdate</label>
  <input type="text" 
  onChange={(e)=>setVisitdate(e.target.value)}
  />
  <button>Update</button>
  <p className="message">{visitdateMessageupdate}</p>
   </form>
  
  
  
    </div>








</div>





)

}
export default Phonenumber
