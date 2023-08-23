const express = require('express')
const patient = require('../schemas/patientSchema.js')
const router = express.Router()
const Treatment = require('../schemas/illnessschema.js')


//posting patients to db



router.post('/patient',async (req,res)=>{

try {
    const Patient = new patient({
 Firstname:req.body.Firstname,
 Secondname:req.body.Secondname,
 age:req.body.age,
 phonenumber:req.body.phonenumber,
 residence:req.body.residence,
 alternativephoneNumber:req.body.alternativephoneNumber,
 idNumber:req.body.idNumber,
 treatments:req.body.treatments,
 

    })

    const savedPatient = await Patient.save()
    res.json({message:'patient saved'})
} catch (error) {
    res.json({error:'error in saving patient'})
}



})

router.get('/allpatients',async (req,res)=>{
 
 try {
    const allpatients = await patient.find()
    .populate('treatments')
    res.json({message:'found',data:allpatients})
     
    
 } catch (error) {
  res.json({error:'Error'})  
 }


})








//get all patients
router.get('/firstname', async (req, res) => {
    try {
        const patientFirstname = req.query.Firstname

        const foundPatient = await patient.find({ Firstname: patientFirstname })
            .populate('treatments')

        if (foundPatient.length === 0) {
            res.json({ error: 'Patient not found' })
        } else {
            res.json({ message: 'Patient found', data: foundPatient })
        }
    } catch (error) {
        res.json({ error: 'Error' })
    }
});

//get patient based on secondname

router.get('/secondname',async(req,res)=>{

const inputsecondname = req.query.Secondname
try {
    const foundpatient = await patient.find({Secondname:inputsecondname})
    .populate('treatments')
    
     if(foundpatient.length === 0){
      res.json({error:'Patient not Found'})

     }
     else{
        res.json({message:'Patient Found',data:foundpatient})
     }






} catch (error) {
    res.json({error:'couldnt find'})
}




})

// get patient based on idNumber
router.get('/idNumber',async(req,res)=>{
const inputidnumber = req.query.idNumber
try {
    const valididnumber = await patient.find({idNumber:inputidnumber})
    .populate('treatments')

   
  if(valididnumber.length === 0){
  res.json({error:'Patient not found'})

  }
  else{
res.json({message:'Patient Found',data:valididnumber})

  }



} catch (error) {
    res.json({error:"error encountered"})
}


})

//get by phonenumber
router.get('/phonenumber',async (req,res)=>{
const inputphonenumber = req.query.phonenumber

try {
const foundnumber = await patient.find({phonenumber:inputphonenumber})
.populate('treatments')

if(foundnumber.length === 0){
 res.json({error:'Patient not Found'})
}
else{
res.json({message:'Patient Found',data:foundnumber}) 


}






} catch (error) {
    res.json({error:'rrr'})
}


})




module.exports = router