const mongoose = require('mongoose')

const Adminschema = new mongoose.Schema({
Username:{type:[String,Number],required:true},
password:{type:[String,Number],required:true,minlength:7},
Email:{type:[String,Number],required:true,unique:true}


})
const Admin = mongoose.model('Admin',Adminschema)

module.exports = Admin