const mongoose = require('mongoose')
 const Treatmentschema = require('./illnessschema')

const patientSchema = new mongoose.Schema({
Firstname:{type:String,required:true},
Secondname:{type:String,required:true},
age:{type:Number,required:true},
phonenumber:{type:Number,required:true},
residence:{type:String,required:true},
alternativephoneNumber:{type:Number,required:true},
idNumber:{type:Number,required:false},
createdAt:{type:Date,default:Date.now},
treatments: { type: mongoose.Schema.Types.ObjectId, ref: 'Treatment' },



})

const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient