import React,{useState,useEffect} from 'react'
import { Row,Col,Container,Table,Card } from 'react-bootstrap'
import {BiSearchAlt} from 'react-icons/bi'

const Users = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container">
                <p style={{fontWeight:"bolder",fontSize:"23px",marginLeft:"10px"}}> Users  </p>
            
            <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                   
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#4b1cac', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                        
                            <Card.Body>
                                
                                
                                
                            </Card.Body>
                            
                    </Card>
                           
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                  
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#c1549c',boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            
                            <Card.Body>
                               
                               
                                
                            </Card.Body>
                            
                    </Card>
                          
                    </Col>
              </Row>
              <Row className='m-3'>
                <form method = "post">
                    <div className="form-group searchBar">
                        <div class="input-group">
                            <input type="text" className="form-control" name="search"placeholder="Search hospitals..."/>
                            <span className="icon-inside"><BiSearchAlt style={{color:"grey",fontSize:"25px"}}/></span>
                        </div>
                    </div>
                </form>
              </Row>
                <div className="table">
                    <Table bordered hover responsive className="table__items w-100"> 
                        <thead>
                            <tr className="text-center">
                                <th>S.N.</th>
                                <th> Name </th>
                                <th> Phone </th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                    </Table>
                </div>

          </div>
          </div>
            
        </React.Fragment>
    )
}

export default Users
