import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';

const Register = (props) => {
    let{}=props
    return (
        <React.Fragment>

            <section className="Form my-4 mx-5">
                <div className="container">
                    <div className="row reg">
                        <div className="col-lg-5 bg">

                        </div>
                        <div className="col-lg-7">
                            <h1 className = "font-weight-bold mb-2 pb-3">Register</h1>
                            <form method = "post">
                                <Row>
                                    <Col lg={6} md={12} xs={12}>
                                    <div className="form-row">
                                    <div className ="">
                                        <div className="form-group">
                                        <label> First Name</label>
                                        <input type="text" name="userName" placeholder="Enter your Firstname" className="form-control my-3 p-3"/>
                                        </div>
                                    </div>
                                </div> 
                                    </Col>

                                    <Col lg={6} md={12} xs={12}>
                                    <div className="form-row">
                                    <div className ="un">
                                        <div className="form-group">
                                        <label> Last Name</label>
                                        <input type="text" name="userName" placeholder="Enter your Lastname" className="form-control my-3 p-3"/>
                                        </div>
                                    </div>
                                </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={12} xs={12}>
                                        <div className="form-row">
                                            <div className ="un">
                                                <div className="form-group">
                                                <label>  Username</label>
                                                <input type="text" name="userName" placeholder="Enter your username" className="form-control my-3 p-3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <div className="form-row">
                                            <div className ="un">
                                                <div className="form-group">
                                                <label> Mobile Number</label>
                                                <input type="text" name="userName" placeholder="Enter your mobile number" className="form-control my-3 p-3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-row">
                                    <div className ="un">
                                        <div className="form-group">
                                        <label> Email Address</label>
                                        <input type="email" name="userName" placeholder="Enter your Email Address" className="form-control my-3 p-3"/>
                                        </div>
                                    </div>
                                </div>
                                <Row>
                                    <Col lg={6} md={12} xs={12}>
                                        <div className="form-row">
                                            <div className ="un">
                                                <div className="form-group">
                                                <label> Address</label>
                                                <input type="text" name="userName" placeholder="Enter your Address" className="form-control my-3 p-3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <div className="form-row">
                                            <div className ="un">
                                                <div className="form-group">
                                                <label> DOB</label>
                                                <input type="date" name="userName" placeholder="Enter your mobile number" className="form-control my-3 p-3"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="form-row">
                                    <div className ="un">
                                        <div className="form-group">
                                        <label> Select Your Gender</label><br/>
                                            <input type="radio" name="gender" value="male"/> Male
                                            <input type="radio" name="gender" value="female"/> Female
                                            <input type="radio" name="gender" value="other"/> Others
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className ="un">
                                        <div className="form-group">
                                        <label> Password</label>
                                        <input type="text" name="userName" placeholder="Enter your Password" className="form-control my-3 p-3"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className ="un">
                                        <div className="form-group">
                                        <label> Confirm Passowrd</label>
                                        <input type="text" name="userName" placeholder="Confirm your Password" className="form-control my-3 p-3"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class ="un">
                                        <button type="submit" className="btn1 mt-3 mb-5" name="login"> Login </button>
                                    </div>
                                </div>
                                
                                <p>Already have an account? <a href="/login">Login</a></p>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
            
        </React.Fragment>
    )
}

export default Register
