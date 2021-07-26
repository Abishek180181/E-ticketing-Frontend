import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'

const Myticket = (props) => {
    let{}=props
    return (
        <React.Fragment>
             <div className="container ticketdet" style={{borderRadius:'20px'}}>
                    <Row className='ticket__form'>                    
                    <Col lg={4} className="details" style={{backgroundColor:'#eeebdd'}}>
                        <h1 className="text-center" style={{fontSize:'25px',fontWeight:'bold',color:'black'}}>Norvic Internation Hospital</h1>
                    <Table>
                            <thead>
                            
                                <tr className="text-center">
                                    <th>Patient Name</th>
                                    <td> Nilam Adhikari</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Age</th>
                                    <td>20</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Gender</th>
                                    <td>Male</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Department</th>
                                    <td>ENT</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Shift</th>
                                    <td>Morning</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Date</th>
                                    <td>12th Dec 2021</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Time</th>
                                    <td>9 AM</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Ticket Number</th>
                                    <td>#234235</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Ticket Fee</th>
                                    <td>Rs 200</td>
                                </tr>
                            </thead>
                        </Table>
                        <p className='text-center p-2' style={{fontSize:'20px',color:'white',backgroundColor:'green',width:'100%',borderRadius:'15px'}}>Confirmed</p>
                        

                    </Col>
                    <Col lg={4} >
                    </Col>
                    <Col lg={4} >
                    </Col>

                    </Row>               
            </div>
            
        </React.Fragment>
    )
}

export default Myticket
