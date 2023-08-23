const express = require('express')
const router = express.Router()
const Image = require('../schemas/imagesSchema')


//posting image to db

router.post('/postimage',async (req,res)=>{
try {
    const image = new Image({
    imageDescription:req.body.imageDescription,
    imageUrl:req.body.imageUrl
    })
    
 await image.save()
 res.json({message:'image saved to db'})
  


} catch (error) {
    res.json({error:'error in saving image to db'})
    
}
})

//getting all images 


router.get('/allimages',async(req,res)=>{
try {
    const allimages =  await Image.find()
    res.json({message:'All images Found',data:allimages})
    
} catch (error) {
    res.json({error:'Error in finding images'})
}


})

module.exports = router