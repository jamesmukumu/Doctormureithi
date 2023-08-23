const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const connectionvalue = process.env.DatabaseConnection



   const mongooseConnection = mongoose.connect(connectionvalue,{
useUnifiedTopology:true,
useNewUrlParser:true

   })

 
.then(()=>{


    console.log('connected successfully')
})
.catch(()=>{

console.log('unsuccessfully connected')

})


module.exports = mongooseConnection


