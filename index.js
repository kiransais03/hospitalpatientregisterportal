let express = require('express');
let app = express();
const {querying} = require('./elephantsql');
require('./awssdk');
require('dotenv').config();
const cors = require('cors')
const patients = require('./routes/patients');
const hospitals = require('./routes/hospitals');

app.use(cors({origin:'*'}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send({
        status : 200,
        msg : "Hello This is backend for Hospital Patient Register Portal ",
    })
})

app.use('/patients',patients);

app.use('/hospitals',hospitals);


app.listen(8080,()=>{
    try {
    console.log("The server is running in port 8080")
    }
    catch(error) {
        console.log("Server running error",error)
    }
})
