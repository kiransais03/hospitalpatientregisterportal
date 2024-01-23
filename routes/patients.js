const express = require('express');
const app = express();
const {addpatienttodb} = require('../functions/patientsdbfunctions');
const joi = require('joi');

app.post('/addpatient',async (req,res)=>{

     //Destructuring
     const {patientname,address,email,phoneno,password,patientphotolink,psychid} = req.body;

    const isValiddata = joi.object({
        patientname:joi.string().required(),
        address:joi.string().min(10).required(),
        email:joi.string().email({ tlds: { allow: false } }),
        phoneno:joi.string().regex(/^([+]\91)\d{10}$/).required(),
        password:joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/),
        patientphotolink:joi.string().uri().required(),
        psychid:joi.string().required(),
    }).validate(req.body);


    if(isValiddata.error) {
        res.status(400).send({
            status : 400,
            message : `Please check input data format: ${isValiddata.error}`,
        })

        return ;
    }

    const patientsdbdata = await addpatienttodb(patientname,address,email,phoneno,password,patientphotolink,psychid);

    if (patientsdbdata.error) {
        res.status(400).send({
            status : 400,
            message : "Some error occurred during adding patient data.Please Try again",
            errormsg : patientsdbdata.error
        })
        return ;
    }
    else {
        res.status(201).send({
            status : 201,
            message : "Patient data added successfully"
        })

        return ;
    }
    
})

module.exports = app;