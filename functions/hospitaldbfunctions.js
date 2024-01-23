const {querying} = require('../elephantsql');

const gethospitaldbdata =async (hospitalid)=>{

    const userData = {
        data : {},
        error : null,
    }

    
    try {
        let querycmd1 = 'SELECT hospitalname FROM hospitals where hospitalid=$1';

        userData.data.hospitalname = await querying(querycmd1,[hospitalid]);
     
//Using Joins 
        let querycmd2 = 'SELECT p.psychid,p.psychname,COUNT(pd.patientid) AS patient_count FROM psychiatrists p LEFT JOIN patientdetails pd ON p.psychid = pd.psychid WHERE p.hospitalid = $1 GROUP BY p.psychid, p.psychname';

        userData.data.psychiatristdetails = await querying(querycmd2,[hospitalid]);

        userData.data.totalpsychiatristcount = userData.data.psychiatristdetails.length;

        let totalcount = userData.data.psychiatristdata.reduce((prevval,currobj,index)=>{
            return parseInt(currobj.patient_count)+prevval;
        },0)

        userData.data.totalpatientscount = totalcount;

        return userData;
    }
    catch(error) {
        console.log("Error catched",error)
        userData.error = error;
        return userData;
    }
}

module.exports = {gethospitaldbdata}