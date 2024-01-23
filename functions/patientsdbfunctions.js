const {querying} = require('../elephantsql');

const addpatienttodb =async (patientname,address,email,phoneno,password,patientphotolink,psychid)=>{
  
    const userData = {
        data : null,
        error : null,
    }

    let querycmd = 'INSERT INTO patientdetails (patientname,address,email,phoneno,password,patientphotolink,psychid) VALUES($1,$2,$3,$4,$5,$6,$7)';

    try {
        userData.data = await querying(querycmd,[patientname,address,email,phoneno,password,patientphotolink,psychid]);

        return userData;
    }
    catch(error) {
        console.log("Error catched",error)
        userData.error = error;
        return userData;
    }
}

module.exports = {addpatienttodb}