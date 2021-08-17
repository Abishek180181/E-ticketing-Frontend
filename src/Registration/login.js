import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { Link, NavLink } from 'react-router-dom';
import { Row,Col,Container,Table } from 'react-bootstrap';
import Register from './register';
import picture from '../assets/logo/obj.png';
import logo from '../assets/forgot.jpg';
import Loader from '../common/loader';
import useLoader from '../common/useLoader'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import usePassword from '../common/usePassword';


//component
const Login = (props) => {
	//variable and instantiation goes here
	let {} = props;
	let { addToast } = useToasts();
	let {loading,loadingHandler} = useLoader();
	let {eye,passwordToggler} = usePassword();

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
		loadingHandler(true)
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
					}
					else if(response.data.data.userType == "Hospital")
					{
						window.location.href = "/overview";
					}
					else if (response.data.data.userType === 'User') {
						window.location.href = '/hospitals';
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
				
				loadingHandler(false);
				
				
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

				{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#forgotpassword">
				Forgot Password
				</button> */}

				<div class="modal fade" id="forgotpassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog  modal-dialog-centered ">
					<div class="modal-content forgot">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Forgot Password!</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body" style={{backgroundColor: '#fff'}}>
					
					<img src={logo} alt="merocare" className="bg-primary d-block" style={{marginLeft:'auto', marginRight:'auto'}}/>
					
							<form>
								<div className="form-row">
									<div className="form-group">
										<label style={{color: 'black',fontWeight:"bold",fontSize:"15px"}}>Enter Your Email</label>
										<input type="email" className="form-control m-1"/>
									</div>
								</div>
							</form>
							
						
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-success">Procceed</button>
					</div>
					</div>
				</div>
				</div>


				{
					loading == true &&
					(
						<Loader/>
					)
				}
				{switcher == false ? (
				<section class="Form my-4 mx-5">
				
					<div class="container">
						<div class="row no-gutters log">
							<div class="col-lg-6 bg bg__color">
								<img
									src={picture}
									alt="logo"
									style={{
										width: '100%',
										marginLeft: 'auto',
										marginRight: 'auto',
										marginTop: '16%',
									}}
								/>
							</div>
							<div class="col-lg-6 py-5">
								<h1
									className="font-weight-bold mb-2 pb-3 text-center"
									style={{
										color: 'black',
										fontSize: '3rem',
										fontWeight: 'bold',
									}}
								>
									Login
								</h1>
								<form
									method="post"
									onSubmit={loginUser}
									className="reg__form2 px-3"
								>
									<div className="form-row">
										<div className="col-lg-12 un">
											<div className="form-group">
												<label>
													
													Username
												</label>
												<input
													type="text"
													name="userName"
													value={credentials.userName}
													placeholder="Enter your username"
													className="form-control my-3 p-3"
													onChange={(event) => {
														changeHandler(event);
													}}
													required
												/>
												{credentials['errors']['userName'] && (
													<p className="text-center">
													
														<small
															style={{ color: 'black', fontWeight: 'bold' }}
														>
															
															*{credentials['errors']['userName']}
														</small>
													</p>
												)}
											</div>
										</div>
									</div>
									<div className="form-row">
										<div className="col-lg-12 un">
											<div className="form-group">
												<label>
												
													Password
												</label>
												<div className="input-group">
												<input
													type="password"
													name="password"
													value={credentials.password}
													placeholder="Enter your password"
													className="form-control my-3 p-3 password"
													onChange={(event) => {
														changeHandler(event);
													}}
													required
												/>
												{
													eye == true?
													(
														<span className="icon-inside" style={{cursor:"pointer"}} onClick={(e)=>{passwordToggler(e)}}><AiFillEye style={{color:"#4b1cac",fontSize:"32px"}}/></span>
													):
													(
														<span className="icon-inside"  style={{cursor:"pointer"}}  onClick={(e)=>{passwordToggler(e)}}><AiFillEyeInvisible style={{color:"#4b1cac",fontSize:"32px"}}/></span>
													)
												}
												
											
												</div>
												
												{credentials['errors']['password'] && (
													<p className="text-center">
														
														<small
															style={{ color: 'black', fontWeight: 'bold' }}
														>
															
															*{credentials['errors']['password']}
														</small>
													</p>
												)}
											</div>
										</div>
									</div>


                                 
                                  
							<div className="text-end">
										<a href="#" cassName=" mb-3"
											style={{
												color: '#4b1cac',
												textDecoration: 'none',
												fontWeight: '600',
											}}
											data-bs-toggle="modal" data-bs-target="#forgotpassword"
										>
										
											Forgot Password ?
										</a>
									</div>

									<div className="text-center">
										<button
											type="submit"
											className="btn btn-lg mt-3 mb-4 btn__Add"
											style={{
												boxShadow: '4px 3px 8px #424242',
												padding: '7px 120px',
											}}
											name="login"
										>
											
											Login
										</button>
									</div>


									<p className="txt__secondary text-center">
										Don't have an account?
										<a
											style={{
												color: '#4b1cac',
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
				
				)
			
			
		</React.Fragment>
	);
};

export default Login;
