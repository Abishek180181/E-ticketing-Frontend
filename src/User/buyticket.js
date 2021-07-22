import React,{useState,useEffect} from 'react'

const Buyticket = (props) => {
    let{}=props

    
     

    function register()
    {
        var x=document.getElementById('login');
        var y=document.getElementById('register');
        var z=document.getElementById('btn');
        x.style.left='-400px';
        y.style.left='50px';
        z.style.left='110px';
    }
    function login()
    {
        var x=document.getElementById('login');
        var y=document.getElementById('register');
        var z=document.getElementById('btn');
        x.style.left='50px';
        y.style.left='450px';
        z.style.left='0px';
    }

    var modal = document.getElementById('login-form');
    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }

    return (
        <React.Fragment>
            <div class="full-page">
                <div id='login-form'class='login-page'>
                    <div class="form-box">
                        <div class='button-box'>
                            <div id='btn'></div>
                            <button type='button'onclick={()=>{login()}} className='toggle-btn'>Log In</button>
                            <button type='button'onclick={()=>{register()}} className='toggle-btn'>Register</button>
                        </div>
                        <form id='login' className='forminput-group-login'>
                            <input type='text'className='input-field'placeholder='Email Id' required />
                            <input type='password'className='input-field'placeholder='Enter Password' required/>
                            <input type='checkbox'className='check-box'/><span>Remember Password</span>
                            <button type='submit'className='submit-btn'>Log in</button>
                        </form>
                        <form id='register' class='input-group-register'>
                    
                            <input type='text'class='input-field'placeholder='First Name' required/>
                            <input type='text'class='input-field'placeholder='Last Name ' required/>
                            <input type='email'class='input-field'placeholder='Email Id' required/>
                            <input type='password'class='input-field'placeholder='Enter Password' required/>
                            <input type='password'class='input-field'placeholder='Confirm Password'  required/>
                            <input type='checkbox'class='check-box'/><span>I agree to the terms and conditions</span>
                            <button type='submit'class='submit-btn'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        
            
        </React.Fragment>
    )
}

export default Buyticket
