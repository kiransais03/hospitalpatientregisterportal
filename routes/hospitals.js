const express = require('express');
const app = express();
const {gethospitaldbdata} = require('../functions/hospitaldbfunctions');

app.get('/gethospitaldata/:id',async (req,res)=>{


    const hospitaldbdata = await gethospitaldbdata(req.params['id']);

    if (hospitaldbdata.error) {
        res.status(400).send({
            status : 400,
            message : "Some error occurred during retrieving hospital data.Please Try again",
            errormsg : hospitaldbdata
        })
        return ;
    }
    else {
        res.status(201).send({
            status : 201,
            message : "hospitaldbdata data fetched successfully",
            dataobj : hospitaldbdata.data,
        })
        return ;
    }
})

module.exports = app;