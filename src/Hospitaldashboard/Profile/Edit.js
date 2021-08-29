import React from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import image from '../../assets/noimage.png'
import logo from '../../assets/logo/hospitalDr.png'
import useDetailChange from '../../User/UserProfile/useDetailChange'
import ProgressButton from '../../common/progressButton'


const Edit = (props) => {
  let { } = props;
  const token = sessionStorage.getItem('token');
  const {user,changeHandler,userDetail,loading,changeDetails,hospitalDetails,hospital,hospitalChange,hospitalDetailChange} = useDetailChange();

 

  return (
    <>
      <Container>
        {
          token != null && user.userType === 'Hospital' ?
            (
              <Row>
                <Col sm={12} className="info_edit">
                  <h3>My Information</h3>
                </Col>
                <Col sm={12} className="text-center">
                {
                  hospital.hospitalImage != "no-img.png" ?
                    (
                      <img src={`${process.env.REACT_APP_URL}${hospital.hospitalImage}`} className="hsimage  mx-auto mb-3" />

                    ) :
                    (
                      <img src={image} className="hsimage  mx-auto mb-3" />

                    )
                }
                  <h5 classsName="mt-3">{user.firstName}</h5>
                  <h5 classsName="mt-3">{user.userName}</h5>
                </Col>
                <Col sm={12} className="px-3 mt-2 cng-psw">
                  <Form method = "post" onSubmit={hospitalDetailChange}>
                    <div className="bg-light py-2">
                      <h4 className="px-2 my-2" style={{fontWeight:'700'}}>Hospital Info</h4>
                    </div>
                    <Row className="mb-3 mt-2">
                      <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>About Us</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder={hospital.description} name="description" value={hospitalDetails.description} onChange={(e)=>{hospitalChange(e)}} />
                        {hospitalDetails['errors']['description'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['description']} </small></p>)}
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="emailAddress" value={hospitalDetails.emailAddress} placeholder={hospital.emailAddress} onChange={(e)=>{hospitalChange(e)}}/>
                        {hospitalDetails['errors']['emailAddress'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['emailAddress']} </small></p>)}
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" name="department" value={hospitalDetails.department} placeholder={hospital.department&& hospital.department.join(",")} onChange={(e)=>{hospitalChange(e)}}/>
                        {hospitalDetails['errors']['department'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['department']} </small></p>)}
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder={hospital.location} disabled />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="mobileNumber" value={hospitalDetails.mobileNumber} placeholder={hospital.mobileNumber} onChange={(e)=>{hospitalChange(e)}}/>
                        {hospitalDetails['errors']['mobileNumber'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['mobileNumber']} </small></p>)}
                      </Form.Group>

                    </Row>
                    <div className="bg-light py-2 mb-3">
                      <p className="my-auto" style={{fontWeight:'600'}}>Contact Person Information</p>
                    </div>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Contact Person Name</Form.Label>
                      <Form.Control placeholder={hospital.personName} disabled />
                    </Form.Group>
                    <Row>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" name="officeNumber" value={hospitalDetails.officeNumber} placeholder={hospital.officeNumber} onChange={(e)=>{hospitalChange(e)}}/>
                        {hospitalDetails['errors']['officeNumber'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['officeNumber']} </small></p>)}
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" name="designation" value={hospitalDetails.designation} placeholder={hospital.designation} onChange={(e)=>{hospitalChange(e)}}/>
                        {hospitalDetails['errors']['designation'] && (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['designation']} </small></p>)}
                      </Form.Group>

                    </Row>
                    {hospitalDetails['errors']['random'] && (<p className="text-center"> <small style={{color:"red"}}> *{hospitalDetails['errors']['random']} </small></p>)}
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
              </Row>
            ) :
            (
              <>
                <Row>
                  <Col sm={12} className="info_edit">
                    <h3>My Information</h3>
                  </Col>
                  <Col sm={12} className="text-center">
                    <img src={logo} className="hsimage mx-auto mb-3" style={{background:"rgba(3, 114, 240, 0.2)"}} />
                    <h5 classsName="mt-3">{user.firstName}</h5>
                    <h5 classsName="mt-3">{user.userName}</h5>
                  </Col>
                  <Col sm={12} className="px-3 mt-2 cng-psw mb-5">
                    <Form method="post" onSubmit={changeDetails}>
                      <div className="bg-light py-2">
                        <h4 className="px-2 py-2" style={{fontWeight: '700'}}>Admin Info</h4>
                      </div>
                      
                      <Row className="mb-3 mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Firstname</Form.Label>
                          <Form.Control type="text" name="firstName" value={userDetail.firstName} placeholder={user.firstName} onChange={(e)=>{changeHandler(e)}}/>
                          {userDetail['errors']['firstName']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['firstName']} </small>  </p>)}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                          <Form.Label>Lastname</Form.Label>
                          <Form.Control type="text"  name="lastName" value={userDetail.lastName} placeholder={user.lastName} onChange={(e)=>{changeHandler(e)}}/>
                          {userDetail['errors']['lastName']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['lastName']} </small>  </p>)}
                        </Form.Group>
                      </Row>
                      <Row className="mb-3 mt-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name="email" value={userDetail.email} placeholder={user.email} onChange={(e)=>{changeHandler(e)}}/>
                          {userDetail['errors']['email']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['email']} </small>  </p>)}
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" maxLength="10" name="phoneNumber" value={userDetail.phoneNumber} placeholder={user.phoneNumber} onChange={(e)=>{changeHandler(e)}}/>
                          {userDetail['errors']['phoneNumber']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['phoneNumber']} </small>  </p>)}
                        </Form.Group>
                      </Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" name="address" value={userDetail.address} placeholder={user.address} onChange={(e)=>{changeHandler(e)}}/>
                          {userDetail['errors']['address']&& (<p> <small style={{color:"red"}}> *{userDetail['errors']['address']} </small>  </p>)}
                        </Form.Group>
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
                </Row>
              </>
            )
        }
      </Container>
    </>
  )
}

export default Edit
