import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import UserProfile from './UserProfile';
import UserChangePassword from './UserChangePassword'
import '../ticket.css'




const ProfileToggler = (props) => {
    let {} = props;
    let [direction,setDirection] = useState("Profile");

  
    
    const switchDirection = (e) =>{
        let direction = e.target.innerHTML.trim();
        if(direction == "Password")
        {
            document.querySelector(`#btn2`).style.left = "135px";
            document.querySelector('.btn__2').style.color="white";
            document.querySelector('.btn__1').style.color="black";
        }
        else if(direction == "Profile")
        {
            document.querySelector(`#btn2`).style.left = "0px";
            document.querySelector('.btn__1').style.color="white";
            document.querySelector('.btn__2').style.color="black";
        }

        setDirection(
            direction
        )
    }

    return (
        <React.Fragment>
   
          <Container className="mt-5 mb-5">
              <Row>
              <Col lg={1} md={1} xs={1}>
                  
               </Col>
                 
                  <Col lg={10} md={10} xs={10}>
                      <div className="outer__design">
                      
                            <div className='button-box1'>
                                <div id='btn2'></div>
                                <button type='button' onClick={(e)=>{switchDirection(e)}} className='toggle-btn btn__1 btn__3' style={{fontWeight:"600",color:"white"}}>Profile</button>
                                <button type='button' onClick={(e)=>{switchDirection(e)}} className='toggle-btn btn__2 btn__4' style={{fontWeight:"600"}}>Password</button>
                            </div>

                            {
                                direction == "Profile"?
                                (
                                    <UserProfile/>
                                ):
                                (
                                    <UserChangePassword/>
                                )
                            }
                      </div>
                  </Col>

                  <Col lg={1} md={1} xs={1}>
                  
                  </Col>
                 
                
              </Row>
          </Container>
           
                       
                
            
        </React.Fragment>
    )
}

export default ProfileToggler
