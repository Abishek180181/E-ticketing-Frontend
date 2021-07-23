import React,{useState,useEffect} from 'react'
import payment from '../assets/logo/logo.png'
import { Row,Col } from 'react-bootstrap'

const Msewa = (props) => {
    let{}= props
    return (
        <React.Fragment>
            <div class="modal fade" id="Msewa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                
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
                                <form>
                                    <div className="form-row m-4">
                                        <div className="form-control">
                                            <input type="form-control" placeholder="M-sewa ID" style={{width:'100p%'}}/>
                                        </div>
                                    </div>
                                    <div className="form-row m-4">
                                        <div className="form-control">
                                            <input type="form-control" placeholder="Password" style={{width:'100p%'}}/>
                                        </div>
                                    </div>

                                </form>
                                <div className="text-end m-4">   
                                <p style={{color:'white', fontSize:'15px'}}>Forgot Password?</p>

                                </div>
                                
                                <div className=" mt-2">
                                    <button className="btnpay w-50 py-2">LOGIN</button>
                                </div>
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
