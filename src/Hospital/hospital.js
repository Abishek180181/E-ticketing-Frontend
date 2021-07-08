import React,{sestate,useEffect} from 'react'
import {Container,Col,Row,Card,Table,modal} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';
import {BiSearchAlt} from 'react-icons/bi'


function Hospital(props) {
    let{}=props
    return (
        <React.Fragment>
            <div className="container" style={{ height:'55vh'}}>
            <h1>Hospital</h1>
          <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#e4e2e2', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#e4e2e2', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
              </Row>

          </div>

          
              <form method = "post">
                <div className="form-group">
                  <div class="input-group">
 
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                    <span class="input-group-text"><BiSearchAlt/></span>
                    </div>
                    </div>
              </form>
          
            <div className ="add-btn">
                <button type="button" className="Add" data-bs-toggle="modal" data-bs-target="#hello" > Add </button>
            </div>

        </div>
        <div class="modal fade" id="hello" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">ADD HOSPITAL</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">                    
            <div className="row">
                <form method = "post">                               
                    <Row>
                        <Col lg={6} md={12} xs={12}>                                                                           
                                <div className="form-group">
                                    <label> Hospital Name</label>
                                    <input type="text" className="form-control" name="hospitalname" placeholder="" />
                                </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>                                                                
                                <div className="form-group">
                                    <label> Username</label>
                                    <input type="text" className="form-control" name="Username" placeholder="" />
                                </div>
                        </Col>
                    </Row>
                    <div className="form-group">
                        <label> Email Address</label>
                        <input type="email" className="form-control" name="Username" placeholder="" />
                    </div>
                    <Row>
                        <Col lg={6} md={12} xs={12}>                                                                           
                                <div className="form-group">
                                    <label> Mobile Number</label>
                                    <input type="text" className="form-control" name="mobilenumber" placeholder="" />
                                </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>                                                                
                                <div className="form-group">
                                    <label> Office Number</label>
                                    <input type="text" className="form-control" name="officenumber" placeholder="" />
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} xs={12}>                                                                           
                                <div className="form-group">
                                    <label> Contact Person Name</label>
                                    <input type="text" className="form-control" name="contactname" placeholder="" />
                                </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>                                                                
                                <div className="form-group">
                                    <label> Designation</label>
                                    <input type="text" className="form-control" name="designation" placeholder="" />
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={12} xs={12}>                                                                           
                                <div className="form-group">
                                    <label> Image</label>
                                    <input type="file" className="form-control" name="image" placeholder="" />
                                </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>                                                                
                                <div className="form-group">
                                    <label> Department</label>
                                    <input type="text" className="form-control" name="department" placeholder="" />
                                </div>
                        </Col>
                    </Row>
                    <div className="form-group">
                        <label> Hospital Address</label>
                        <input type="email" className="form-control" name="address" placeholder="" />
                    </div>
                    <Row>
                        <Col lg={6} md={12} xs={12}>                                                                           
                                <div className="form-group">
                                    <label> Password</label>
                                    <input type="text" className="form-control" name="passwprd" placeholder="" />
                                </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>                                                                
                                <div className="form-group">
                                    <label> Confirm Password</label>
                                    <input type="text" className="form-control" name="confirmpassword" placeholder="" />
                                </div>
                        </Col>
                    </Row>
                </form>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add Hospital</button>
      </div>
    </div>
  </div>
</div>

           

        <Container fluid mx-auto className="mb-3">
                    <Row>
                        <h3 className="text-center mx-auto my-3">Hospital Details</h3>
                        <Col>
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Email Address</th>
                                        <th>Mobile Number</th>
                                        <th>Office Number</th>
                                        <th>Contact Person Name</th>
                                        <th>Designation</th>
                                        <th>Department</th>
                                        <th>Address</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Confirm Password</th>
                                        <th><button type="submit"> Edit</button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        this.state.users.map((user) => {
                                            return (
                                                <tr>
                                                    <td className=""><img src="assets/Group 51.png" /></td>
                                                    <td>{user.firstname} {user.lastname}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.phone}</td>
                                                    <td>{user.date_of_birth}</td>
                                                    <td>{user.gender}</td>
                                                    <td>{user.blood_group}</td>
                                                    <td>{user.occupation}</td>
                                                    <td>{user.marital_status}</td>
                                                    <td>{user.smoking_habit}</td>
                                                    <td>{user.feet}.{user.inch}</td>
                                                    <td>{user.weight}</td>
                                                </tr>
                                            )
                                        })
                                    } */}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
         
           
        </React.Fragment>
    )
}

export default Hospital
