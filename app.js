const express = require('express')
const dotenv = require('dotenv')

dotenv.config()


const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
const port = process.env.PORT



try {
    app.use(require('./backend/routes/patient'))
} catch (error) {
    error
}



try {
    app.use(require('./backend/routes/images'))
} catch (error) {
    
}





try {
 app.use(require('./backend/routes/treatment'))   
} catch (error) {
    
}




try {
    app.use(require('./backend/db/db'))
} catch (error) {
    error
}


try {
    app.use(require('./backend/routes/admin'))
} catch (error) {
    
}



app.listen(`${port}`,()=>{

console.log('app listening at port 5000')

})

