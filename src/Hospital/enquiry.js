import React,{useState,useEffect} from 'react'
import {Container,Col,Row,Card,Table,modal} from 'react-bootstrap'

const Enquiry = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container-fluid">
               <h5 style={{fontWeight:"bolder",fontSize:"23px",marginLeft:"10px"}}> Enquiries  </h5> 

               <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                   
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#4b1cac', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                        
                            <Card.Body>
                                
                                <Card.Title style={{color:"white",fontSize:"28px",marginBottom:"0px",fontWeight:"bolder"}}> Total Enquiry </Card.Title>
                                <p style={{color:"white",fontSize:"34px",fontWeight:"bolder",marginLeft:"15px"}}>  </p>
                                
                            </Card.Body>
                    
                    </Card>
                           
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                  
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#FFA500', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                        
                            <Card.Body>
                                
                                <Card.Title style={{color:"white",fontSize:"28px",marginBottom:"0px",fontWeight:"bolder"}}> Pending </Card.Title>
                                <p style={{color:"white",fontSize:"34px",fontWeight:"bolder",marginLeft:"15px"}}>  </p>
                                
                            </Card.Body>
                    
                    </Card>
                          
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                  
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#006400', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                        
                            <Card.Body>
                                
                                <Card.Title style={{color:"white",fontSize:"28px",marginBottom:"0px",fontWeight:"bolder"}}> Solved </Card.Title>
                                <p style={{color:"white",fontSize:"34px",fontWeight:"bolder",marginLeft:"15px"}}>  </p>
                                
                            </Card.Body>
                    
                    </Card>
                          
                    </Col>
              </Row>

          </div>
          <div className="table">
          <Table bordered hover responsive className="table__items w-100"> 
                <thead>
                    <tr className="text-center">
                        <th>S.N.</th>
                        <th> Full Name </th>
                        <th>Email </th>
                        <th> Address </th>
                                                                                                                            
                        <th>Message</th>
                    </tr>
                </thead>
            </Table>
          </div>

            </div>
        </React.Fragment>
    )
}

export default Enquiry
