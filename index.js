let express = require('express');
let app = express();
const {querying} = require('./elephantsql');
require('./awssdk');

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send({
        status : 200,
        msg : "Hello how are you",
    })
})

app.listen(8080,()=>{
    try {
    console.log("The server is running in port 8080")
    }
    catch(error) {
        console.log("Server running error",error)
    }
})
