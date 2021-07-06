import React,{useState,useEffect} from 'react'

const Login = (props) => {
    let {}=props
    return (
        <React.Fragment>
        
            <section class = "Form my-4 mx-5">
                <div class = "container">
                    <div class="row no-gutters">
                        <div class="col-lg-5 bg">
                           
                        </div>
                        <div class="col-lg-7 px-5 text-center py-5">
                            <h1 class = "font-weight-bold mb-2 pb-3">Sign in to your account</h1>
                            <form action='/' method='get' >
                                <div class="form-row">
                                    <div class ="col-lg-7 un w-75 mx-auto">
                                        <input type="email" placeholder="Enter your email" class="form-control my-3 p-3"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class ="col-lg-7 un w-75 mx-auto">
                                        <input type="password" placeholder="Enter your password" class="form-control my-3 p-3"/>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class ="col-lg-7 un w-75 mx-auto">
                                        <button type="button" class="btn1 mt-3 mb-5 "> Login </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                <a href="#" className="mx-right">Forgot password</a>
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
