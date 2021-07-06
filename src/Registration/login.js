
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';


import React,{useState,useEffect} from 'react'
import { Link,NavLink,Nav } from 'react-router-dom'
const Login = (props) => {
    //variable and instantiation goes here
    let {} = props;
    let {addToast} = useToasts();

    //state goes here
    let [credentials,setCredentials] = useState({
        "userName":"",
        "password":"",
        "errors":{}
    })


    //events goes here
    const changeHandler = (e)=>{
        const {name,value} = e.target;
        setCredentials({
            ...credentials,
            [name]:value
        })
    }

    const loginUser = (e)=>{
        e.preventDefault();
    
        axios.post("http://localhost:90/loginUser",credentials)
        .then((response)=>{
            if(response.data.success == true)
            {
                addToast(response.data.message,{
                    autoDismiss:true,
                    appearance:"success"
                })
                sessionStorage.setItem('user',JSON.stringify(response.data.data));
                sessionStorage.setItem('token',response.data.token);
                if(response.data.data.adminType="Admin")
                {
                    window.location.href = "/admin"
                }
            }
            else
            {
                addToast(response.data.message,{
                    autoDismiss:true,
                    appearance:"error"
                })
                setCredentials({
                    ...credentials,
                    ['errors']:response.data.error
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <React.Fragment>
        
            <section class = "Form my-4 mx-5">
                <div class = "container">
                    <div class="row no-gutters">
                        <div class="col-lg-5 bg">
                           
                        </div>
                        <div class="col-lg-7 px-5 py-5">
                            <h1 className = "font-weight-bold mb-2 pb-3">Sign in to your account</h1>
                            <form  method='post' onSubmit={loginUser}>
                                <div className="form-row">
                                    <div className ="col-lg-7 un w-75 mx-auto">
                                        <div className="form-group">
                                        <label> Username </label>
                                        <input type="text" name="userName" value={credentials.userName} placeholder="Enter your username" className="form-control my-3 p-3" onChange={(event)=>{changeHandler(event)}} required/>
                                        {credentials['errors']['userName']&& (<p className="text-center"> <small style={{color:"black",fontWeight:"bold"}}> *{credentials['errors']['userName']} </small> </p>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className ="col-lg-7 un w-75 mx-auto">
                                      <div className="form-group">
                                      <label> Password </label>
                                        <input type="password" name="password" value={credentials.password} placeholder="Enter your password" className="form-control my-3 p-3" onChange={(event)=>{changeHandler(event)}} required/>
                                        {credentials['errors']['password']&& (<p className="text-center"> <small style={{color:"black",fontWeight:"bold"}}> *{credentials['errors']['password']} </small> </p>)}
                                    </div>
                                    </div>
                                </div>

                                
                                <div className="form-row">

                                <div className="">
                                <NavLink className="" style={{float:'right', marginRight: '5.2rem'}} to="/about"> Forgot Passoword ?</NavLink>
                                </div>
                                <div class="form-row">
                                    <div class ="col-lg-7 un w-75 mx-auto">
                                        <button type="submit" className="btn1 mt-3 mb-5" name="login"> Login </button>
                                    </div>
                                </div>
                                
                                <p>Don't have an account? <a href="#">Register here</a></p>                             
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}

export default Login
