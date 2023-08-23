const express = require('express')
const router = express.Router()
const Treatment = require('../schemas/illnessschema')

//posting illness to database

router.post('/treatment',async (req,res)=>{

try {
    const treatment= new Treatment({
    symptom:req.body.symptom,
    labtest:req.body.labtest,
    labtestdesc:req.body.labtestdesc,
    cause:req.body.cause,
    medicationOffered:req.body.medicationOffered,
    durationofSickness:req.body.durationofSickness,
    
    
    })
    const savedTreatment = await treatment.save()
    res.json({message:'treatment saved',savedTreatment:savedTreatment})
} catch (error) {
    res.json({error:"illness not saved to database"})
}


})











module.exports = router