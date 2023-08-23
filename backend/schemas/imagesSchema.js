const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
imageUrl:{type:[String,Number],required:false},
imageDescription:{type:String,required:false}

})
const Image = mongoose.model('Image',imageSchema)
module.exports = Image