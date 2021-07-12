import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { Link, NavLink } from 'react-router-dom';
import Register from './register';
import picture from '../assets/logo/obj.png';

//component
const Login = (props) => {
	//variable and instantiation goes here
	let {} = props;
	let { addToast } = useToasts();

	//state goes here
	let [credentials, setCredentials] = useState({
		userName: '',
		password: '',
		errors: {},
	});
	let [switcher, setSwitcher] = useState(false);

	//events goes here
	const changeHandler = (e) => {
		const { name, value } = e.target;
		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const loginUser = (e) => {
		e.preventDefault();

		axios
			.post(process.env.REACT_APP_URL + 'loginUser', credentials)
			.then((response) => {
				if (response.data.success == true) {
					addToast(response.data.message, {
						autoDismiss: true,
						appearance: 'success',
					});
					sessionStorage.setItem('user', JSON.stringify(response.data.data));
					sessionStorage.setItem('token', response.data.token);

					if (response.data.data.userType === 'Admin') {
						window.location.href = '/overview';
					} else if (response.data.data.userType === 'User') {
						window.location.href = '/';
					}
				} else {
					addToast(response.data.message, {
						autoDismiss: true,
						appearance: 'error',
					});
					setCredentials({
						...credentials,
						['errors']: response.data.error,
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const switchForm = (e) => {
		setSwitcher(!switcher);
	};


    return (
        <React.Fragment>
           
            {
                switcher == false?
                (
                    <section class = "Form my-4 mx-5">
                    <div class = "container">
                        <div class="row no-gutters log">
                            <div class="col-lg-6 bg bg__color">
                                <img src={picture} alt="logo" style={{width:"100%",marginLeft:"auto",marginRight:"auto",marginTop:"16%"}}/>
                            </div>
                            <div class="col-lg-6 py-5">
                                <h1 className = "font-weight-bold mb-2 pb-3 text-center" style={{color:"#053742",fontSize:"3rem",fontWeight:"bold"}}>Login</h1>
                                <form  method='post' onSubmit={loginUser} className="reg__form px-3">
                                    <div className="form-row">
                                        <div className ="col-lg-12 un">
                                            <div className="form-group">
                                            <label style={{color:'#0f6c81', fontWeight:"600"}}> Username </label>
                                            <input type="text" name="userName" value={credentials.userName} placeholder="Enter your username" className="form-control my-3 p-3" onChange={(event)=>{changeHandler(event)}} required/>
                                            {credentials['errors']['userName']&& (<p className="text-center"> <small style={{color:"black",fontWeight:"bold"}}> *{credentials['errors']['userName']} </small> </p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className ="col-lg-12 un">
                                        <div className="form-group">
                                        <label style={{color:'#0f6c81', fontWeight:"600"}}> Password </label>
                                            <input type="password" name="password" value={credentials.password} placeholder="Enter your password" className="form-control my-3 p-3" onChange={(event)=>{changeHandler(event)}} required/>
                                            {credentials['errors']['password']&& (<p className="text-center"> <small style={{color:"black",fontWeight:"bold"}}> *{credentials['errors']['password']} </small> </p>)}
                                        </div>
                                        </div>
                                    </div>

                                    <div className="text-end">
                                    <a href="#" className=" mb-3" style={{color:"#CC0530",textDecoration:"none",fontWeight:"600"}} to="/about"> Forgot Password ?</a>
                                    </div>                          
                                 
                                    <div className ="text-center">
                                        <button type="submit" className="btn btn-lg mt-3 mb-4 bg__color" style={{boxShadow:"4px 3px 8px #424242",padding:"7px 120px"}} name="login"> Login </button>
                                    </div>
                                   



									<p className="txt__secondary text-center">
										Don't have an account?
										<a
											style={{
												color: '#CC0530',
												fontWeight: '600',
												textDecoration: 'none',
											}}
											href="#"
											onClick={(e) => {
												switchForm(e);
											}}
										>
											Register here
										</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</section>
			) : (
				<Register />
			)}
		</React.Fragment>
	);
};

export default Login;
