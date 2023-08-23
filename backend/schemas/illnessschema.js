const mongoose = require('mongoose')
const patient = require('./patientSchema')

const treatmentSchema = new mongoose.Schema({

symptom:{type:[String,Number],required:true},
 labtest:{type:String,required:false},
labtestdesc:{type:[String,Number],required:false},
cause:{type:String,required:true},
medicationOffered:{type:[String,Number],required:true},
durationofSickness:{type:[String,Number],required:true},




})

const Treatment= mongoose.model('Treatment',treatmentSchema)
module.exports = Treatment