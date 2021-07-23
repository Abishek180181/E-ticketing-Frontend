import React,{useState,useEffect} from 'react'
import axios from 'axios';

const useHospital = (hospitalId) => {
    //variable goes here
    
    //state goes here
    
  
    let [hospital,setHospital] = useState({});
    let [shifts,setShifts] = useState({});
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    })


    //effect goes here
    useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"hospitalTickets/"+hospitalId,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setHospital(
                    response.data.data
                )
                setShifts(
                    response.data.shiftData
                )
            }
            else
            {
                setHospital({});
                setShifts({})
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

   


    return {hospital,shifts};
}

export default useHospital
