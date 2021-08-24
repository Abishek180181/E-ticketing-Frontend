import React,{useState,useEffect} from 'react';
import axios from 'axios'
import useLoader from '../../common/useLoader'
import useCommon from '../../common/useCommon'
import {useToasts} from 'react-toast-notifications'

const useDetailChange = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const {loading,loadingHandler,loading2,loadingHandler2} = useLoader();
    const {auth,getFormattedToday} = useCommon();
    const {addToast} = useToasts();
    //state goes here
  let [hospital,setHospital] = useState({})  
  let [userDetail,setUserDetail] = useState({
    "firstName":user.firstName,
    "lastName":user.lastName,
    "userName":user.userName,
    "email":user.email,
    "phoneNumber":user.phoneNumber,
    "dob":user.dob,
    "gender":user.gender,
    "address":user.address,
    "errors":{}
  })

  let [userPassword,setPassword] = useState({
      "newPassword":"",
      "currentPassword":"",
      "confirmPassword":"",
      "errors":{}
  })

  let [hospitalDetails,setData] = useState({
    "hospitalId":"",
    "hospitalName":"",
    "location":"",
    "mobileNumber":"",
    "officeNumber":"",
    "emailAddress":"",
    "department":"",
    "designation":"",
    "personName":"",
    "latitude":"",
    "longitude":"",
    "description":"",
    "errors":{}
})

  //effect goes here
  useEffect(()=>{
    axios.get(process.env.REACT_APP_URL+"fetchSingleHospital",auth.config)
    .then((response)=>{
        if(response.data.success == true)
        {
            setHospital(
                response.data.data
            )          
            setData({
                ...hospitalDetails,
                "hospitalId":response.data.data._id,
                "hospitalName":response.data.data.hospitalName,
                "location":response.data.data.location,
                "mobileNumber":response.data.data.mobileNumber,
                "officeNumber":response.data.data.officeNumber,
                "emailAddress":response.data.data.emailAddress,
                "department":response.data.data.department.join(","),
                "designation":response.data.data.designation,
                "personName":response.data.data.personName,
                "latitude":response.data.data.locationPoint.coordinates[1],
                "longitude":response.data.data.locationPoint.coordinates[0],
                "description":response.data.data.description,
                "errors":{}
            }
            )

        }
        else
        {
            setHospital({});
        }
    })
  },[])

  //handlers goes here
  const changeHandler = (e)=>{
    let {name,value} = e.target;
    setUserDetail({
      ...userDetail,
      [name]:value
    })
  
  }

  const passwordHandler = (e)=>{
      let {name,value} = e.target;
      setPassword({
          ...userPassword,
          [name]:value
      })
  }

  const hospitalChange = (e)=>{
      let {name,value} = e.target;
      setData({
          ...hospitalDetails,
          [name]:value
      })
  }

  const passwordChange = (e)=>{
      e.preventDefault();
      loadingHandler2(true)
      axios.put(process.env.REACT_APP_URL+"changePassword",userPassword,auth.config)
      .then((response)=>{
        if(response.data.success == true)
        {
            addToast(response.data.message,{
                "autoDismiss":true,
                "appearance":"success"
            })
            sessionStorage.clear();
            window.location.href = "/login";
        }
        else
        {
            setPassword({
                ...userPassword,
                ['errors']:response.data.error
            })
        }
        loadingHandler2(false);
      })
      .catch((err)=>{
          console.log(err);
      })
  }

  const hospitalDetailChange = (e)=>{
      e.preventDefault();
      loadingHandler(true);
      
      axios.post(process.env.REACT_APP_URL+"editHospitalDetails",hospitalDetails,auth.config)
      .then((response)=>{
        if(response.data.success == true)
        {
            sessionStorage.setItem('user',JSON.stringify(response.data.data))
            addToast(response.data.message,{
                "autoDismiss":true,
                "appearance":"success"
            })
            window.location.reload();
        }
        else
        {
            setData({
                ...hospitalDetails,
                ['errors']:response.data.error
            })
        }
        loadingHandler(false);
      })
      .catch((err)=>{
          console.log(err);
      })
  }

  const changeDetails = (e)=>{
      e.preventDefault();
      loadingHandler(true);
      axios.post(process.env.REACT_APP_URL+"changeMyDetails",userDetail,auth.config)
      .then((response)=>{
        if(response.data.success == true)
        {
            addToast(response.data.message,{
                "autoDismiss":true,
                "appearance":"success"
            })
            sessionStorage.setItem('user',JSON.stringify(response.data.data));
            window.location.reload();
        }
        else
        {
            setUserDetail({
                ...userDetail,
                ['errors']:response.data.error
            })
        }

        loadingHandler(false);
      })
      .catch((err)=>{
          console.log(err);
      })
  }

    return {userDetail,changeHandler,user,changeDetails,loading,getFormattedToday,passwordHandler,userPassword,passwordChange,loading2,hospitalDetails,hospital,hospitalChange,hospitalDetailChange};
}

export default useDetailChange
