import React from 'react'
import { Container, Col, Form, Row,Button } from 'react-bootstrap'
import useDetailChange from './useDetailChange'
import usePassword from '../../common/usePassword'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import ProgressButton from '../../common/progressButton'

const UserChangePassword = (props) => {
  const {} = props;
  const {loading2,passwordHandler,userPassword,passwordChange,user} = useDetailChange();
  const {eye,eye2,eye3,passwordToggler,passwordToggler2,passwordToggler3} = usePassword();

  const loadContent = () =>{
    if(user && (user.userType == "Admin" || user.userType == "Hospital"))
    {
      return(
        <Col sm="12" className="text-center info_edit p-5 mb-3">
        <h2 style={{ fontWeight: '700' }}>Change Password</h2>
      </Col>
      )
    }
    
  }

  const loadUserSide = ()=>{
    if(user && user.userType == "User")
    {
      return (
        <div className="bg-light py-2">
          <h4 className="px-2 my-2" style={{ fontWeight: '700' }}>Change Your Password</h4>
        </div>
      )
    }
   
  }

  return (
    <Container>
      <Row>
      {
        loadContent()
      }
      {
        loadUserSide()
      }
    
        <Col className="cng-psw mx-5">

          <Form method="post" onSubmit={passwordChange}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Current Password</Form.Label>
              <div className="input-group">
              <Form.Control type="password" className="password" name="currentPassword" value={userPassword.currentPassword} onChange={(e)=>{passwordHandler(e)}}  />
              {
								eye == true?
								(
										<span className="icon-inside" style={{cursor:"pointer"}} onClick={(e)=>{passwordToggler(e)}}><AiFillEye style={{color:"black",fontSize:"22px"}}/></span>
								):
							  (
									  <span className="icon-inside"  style={{cursor:"pointer"}}  onClick={(e)=>{passwordToggler(e)}}><AiFillEyeInvisible style={{color:"black",fontSize:"22px"}}/></span>
								)
							}
              </div>
              {userPassword['errors']['currentPassword']&&(<p> <small style={{color:"red"}}> {userPassword['errors']['currentPassword']} </small> </p>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>New Password</Form.Label>
              <div className="input-group">
              <Form.Control type="password" className="password2" name="newPassword" value={userPassword.newPassword} onChange={(e)=>{passwordHandler(e)}}/>
              {
								eye2 == true?
								(
										<span className="icon-inside" style={{cursor:"pointer"}} onClick={(e)=>{passwordToggler2(e)}}><AiFillEye style={{color:"black",fontSize:"22px"}}/></span>
								):
							  (
									  <span className="icon-inside"  style={{cursor:"pointer"}}  onClick={(e)=>{passwordToggler2(e)}}><AiFillEyeInvisible style={{color:"black",fontSize:"22px"}}/></span>
								)
							}
              </div>
              {userPassword['errors']['newPassword']&&(<p> <small style={{color:"red"}}> {userPassword['errors']['newPassword']} </small> </p>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
              <Form.Control type="password" className="password3" name="confirmPassword" value={userPassword.confirmPassword} onChange={(e)=>{passwordHandler(e)}} />
              {
								eye3 == true?
								(
										<span className="icon-inside" style={{cursor:"pointer"}} onClick={(e)=>{passwordToggler3(e)}}><AiFillEye style={{color:"black",fontSize:"22px"}}/></span>
								):
							  (
									  <span className="icon-inside"  style={{cursor:"pointer"}}  onClick={(e)=>{passwordToggler3(e)}}><AiFillEyeInvisible style={{color:"black",fontSize:"22px"}}/></span>
								)
							}
              </div>
              {userPassword['errors']['confirmPassword']&&(<p> <small style={{color:"red"}}> {userPassword['errors']['confirmPassword']} </small> </p>)}
            </Form.Group>
            {userPassword['errors']['random']&&(<p className="text-center"> <small style={{color:"red"}}> {userPassword['errors']['random']} </small> </p>)}
            <div className="text-center">
              {
                loading2 == true?
                (
                  <ProgressButton/>
                ):
                (
                  <Button className="btn-edit justify-content-center w-50" type="submit" name="submitEnquiry">
                    Change Password</Button>
                )
              }
           
            </div>

          </Form>

        </Col>
        
      </Row>
    </Container>
  )
}

export default UserChangePassword
