import React,{useState,useEffect} from 'react'
import payment from '../assets/logo/logo.png'
import { Row,Col } from 'react-bootstrap'
import axios from 'axios'
import {toast} from 'react-toastify'

const Msewa = (props) => {
    let {} = props;
    
    //state goes here
    let [credentials,setCredentials] = useState({
        "userName":"",
        "password":"",
        "errors":{},
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    })

    //event handlers
    const changeHandler = (e)=>{
        let {name,value} = e.target;
        setCredentials({
            ...credentials,
            [name]:value
        })
    }

    const loginPayment = (e)=>{
        
        e.preventDefault();
        

        axios.post(process.env.REACT_APP_URL+"loginToBank",credentials,credentials.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                toast.success(response.data.message)
                sessionStorage.setItem('bankKey',response.data.token);
                document.querySelector(`#loginModal`).click();
            }
            else
            {
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
            
                    <div class="modal fade" id="Msewa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <button type="button" className="btn-close d-none" id="loginModal" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                <div className="container">
                    <Row>
                        
                        <Col lg={12}>
                            <div className="text-center">
                                <img src={payment} alt="Msewa" style={{width:'100px'}}></img>
                            </div>
                            <div className="text-center mt-2" style={{fontSize:'20px',fontWeight:'bold'}}>
                                <p>Enter Your Credentials To Proceed</p>
                            </div>
                            <div className="text-center login justify-content-center " style={{backgroundColor:'black',height:'300px', boxShadow:'2px 3px 10px rgba(0,0,0,0.6)',borderRadius: '25px'}}>
                                <p classname='mt-3 pt-3' style={{color:'white', fontSize:'20px',fontWeight:'bold'}}>Login</p>
                                <form method = "post" onSubmit={loginPayment}>
                                    <div className="form-row form-row2 m-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="userName" placeholder="M-sewa ID" value={credentials.userName} onChange={(e)=>{changeHandler(e)}} style={{width:'100%'}}/>
                                            {credentials['errors']['userName']&& (<p>  <small style={{color:"red"}}> {credentials['errors']['userName']} </small></p>)}
                                        </div>
                                    </div>
                                    <div className="form-row form-row2 m-4">
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" placeholder="Password" value={credentials.password} onChange={(e)=>{changeHandler(e)}}  style={{width:'100%'}}/>
                                            {credentials['errors']['password']&& (<p>  <small style={{color:"red"}}> {credentials['errors']['password']} </small></p>)}
                                        </div>
                                    </div>
                                    {credentials['errors']['random']&& (<p>  <small style={{color:"red"}}> {credentials['errors']['random']} </small></p>)}

                                        <div className="text-end m-4">   
                                    <p style={{color:'white', fontSize:'15px'}}>Forgot Password?</p>

                                    </div>
                                    
                                    <div className=" mt-2">
                                        <button type="submit" className="btnpay w-50 py-2" name="login">LOGIN</button>
                                    </div>

                                </form>
                                
                            </div>
                            
                        
                            
                        </Col>
                    </Row>
                    </div>
            </div>
            
            </div>
        </div>
        </div>
               
            
            
        </React.Fragment>
    )
}

export default Msewa
