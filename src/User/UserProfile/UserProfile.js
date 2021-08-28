import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import UserChangePassword from './UserChangePassword'
import image from '../../assets/noimage.png'
import useDetailChange  from './useDetailChange'
import ProgressButton from '../../common/progressButton'
import ProfilePicture from './profilePicure'


const UserProfile = (props) => {
  let { } = props;

  const {userDetail,changeHandler,user,changeDetails,loading,getFormattedToday} = useDetailChange();
  
  let current = new Date();
  current.setFullYear(current.getFullYear() - 16);
  let minDate = getFormattedToday(current);
  current.setFullYear(current.getFullYear() - 64);
  let maxDate = getFormattedToday(current);


  return (
    <>
    {/* <div className="userChange"> */}
      {/* <Col sm="12" className="text-center p-2 mb-3">
        <h3 style={{fontWeight:"bolder",color:"#4b1cac"}}>My Profile</h3>
        <div style={{width:"70px",height:"5px",background:"#4b1cac",marginLeft:"auto",marginRight:'auto'}}>

        </div>
      </Col> */}
      <Container>
        <Row className="mb-3">
          <Col sm={12}>
            {/* <div className="text-center user_info_edit p-2 mb-3 mt-1">
              <h5 style={{fontWeight:"bold"}}>My Information</h5>
            </div> */}
            <Col sm={12} className="text-center">
              <div className="user_pp">
                {
                  user.profilePicture !== "no-photo.jpg" ?
                    (
                      <img src={`${process.env.REACT_APP_URL}${user.profilePicture}`} className="hsimage  mx-auto mb-3" />

                    ) :
                    (
                      <img src={image} className="hsimage  mx-auto mb-3" />

                    )
                }
                <Button className="user_pp_btn" data-bs-toggle="modal" data-bs-target="#changePP" type="button" name="changePP"><i class="fas fa-user-edit"></i></Button>
               
              </div>
            

              <h5 classsName="mt-3">{user.firstName + " " + user.lastName}</h5>
              <h5 classsName="mt-3">{user.userName}</h5>
              <h5 classsName="mt-3 text-light">{user.gender}</h5>
            </Col>
            <ProfilePicture/>
           
            <Col sm={12} className="px-3 mt-2 cng-psw">
            
              <Form method = "post" onSubmit = {changeDetails}>
              <div className="bg-light py-2">
                  <h4 className="px-2 my-2" style={{ fontWeight: '700' }}>Personal Info</h4>
                </div> 
                <Row className="mb-3 mt-2">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={user.email} disabled />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" maxLength="10" name="phoneNumber" value={userDetail.phoneNumber} placeholder={user.phoneNumber} onChange={(e)=>{changeHandler(e)}}/>
                    {userDetail['errors']['phoneNumber']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['phoneNumber']} </small>  </p>)}
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={userDetail.address} placeholder={user.address} onChange={(e)=>{changeHandler(e)}}/>
                    {userDetail['errors']['address']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['address']} </small>  </p>)}
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dob" min={maxDate} max={minDate} value={userDetail.dob} placeholder={user.dob} onChange={(e)=>{changeHandler(e)}} />
                    {userDetail['errors']['dob']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['dob']} </small>  </p>)}
                  </Form.Group>
                </Row>
                <div className="text-center">
                  {
                    loading == true?
                    (
                      <ProgressButton/>
                    ):
                    (
                      <Button className="btn-edit justify-content-center" type="submit" name="submitEnquiry">
                    Update</Button>
                    )
                  }
                 
                </div>

              </Form>
            </Col>
          </Col>
        
        </Row>
      </Container>
      {/* </div> */}

    </>
  )
}

export default UserProfile
