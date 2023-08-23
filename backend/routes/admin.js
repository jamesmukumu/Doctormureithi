const express = require('express')

const router = express.Router()

const admin = require('../schemas/AdminSchema')
const bcrypt = require('bcrypt')

const saltrounds = 10
//posting Admin to database

router.post('/register', async (req,res)=>{
try {
    const hashedpassword = await  bcrypt.hash(req.body.password,saltrounds)
    const Admin = new admin({
    Username:req.body.Username,
    Email:req.body.Email,
    password:hashedpassword
    
    
    })
      const adminValue =   await  Admin.save()
     res.json({message:'posted'})




} catch (error) {
    



    if( error.code ===11000){ 
  res.json({error:'email exists already'})
    } 
    else{
        res.json({error:'error in saving to database'})
    }
}

})

//login


router.post('/login',async(req,res)=>{
  const trialUsername = req.body.Username
 const trialPassword = req.body.password
    
    try {
        const usernameFound = await admin.findOne({Username:trialUsername})
        if(!usernameFound){
            res.json({error:'UserName invalid'})
        }
        
        
       const foundPassword = await bcrypt.compare(trialPassword,usernameFound.password[0])

if(!foundPassword){
    res.json({error:'invalid password....try again'})
}else{
    res.json({message:'you have successfully logged in'})
}

    } catch (error) {
        error
    }})

































module.exports = router