import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'
import payment from '../assets/logo/logo.png'
import Msewa from './Msewa'

export const Ticketdetail = (props) => {
    let{}= props
    return (
        <React.Fragment>
            <div className="container ticketdet" style={{borderRadius:'20px'}}>
                <Row className='ticket__form'>                    
                    <Col lg={3} md={2} sm={1}>

                    </Col>
                    <Col lg={6} md={8} sm={10} className="details" style={{backgroundColor:'#eeebdd'}}>
                        <h2 className="text-center" style={{color:'#0f6c81'}}>Ticket Details</h2>
                        <Table>
                            <thead>
                                <tr className="text-center">
                                    <th>Hospital Name</th>
                                    <td>Norvic International Hospital</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Patient Name</th>
                                    <td>Nilam Adhikari</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Age</th>
                                    <td>Sweet 16</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Department</th>
                                    <td>ENT</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Shift</th>
                                    <td>Evening</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Date</th>
                                    <td>23th July 2021</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Time</th>
                                    <td>6pm -7pm</td>
                                </tr>
                                <tr className="text-center">
                                    <th>Ticket Fee</th>
                                    <td>Rs 200</td>
                                </tr>

                            </thead>
                        </Table>
                       <Row className='justify-content-center'>
                           <Col lg={4} className="line__border my-auto">

                           </Col>
                           <Col lg={4}>
                               <h3 className="text-center" style={{fontSize:'20px'}}>Payment Method</h3>
                           </Col>
                          <Col lg={4} className="line__border my-auto">

                           </Col>
                  
                       </Row>
                       <Col lg={12} className="text-center my-5">
                           <a href="#" data-bs-toggle="modal" data-bs-target="#Msewa" className="p-4 " style={{backgroundColor:'#f0f0f0', borderRadius:'13px',boxShadow:'4px 3px 8px #424242'}}><img src={payment} alt="Msewa" className="" style={{width:'100px'}}></img></a>
                           <Msewa/>
                           </Col>
                        <Row>
                            <Col lg={6}>
                            <button type="submit" className="btn btn-lg mt-3 mb-4 bg-white reg__btn" style={{boxShadow:"4px 3px 8px #424242",padding:"7px 30px",float:"right"}} name="register"> Cancel </button>
                            </Col>
                            <Col lg={6}>
                            <button type="submit" className="btn btn-lg mt-3 mb-4 bg-white reg__btn" style={{boxShadow:"4px 3px 8px #424242",padding:"7px 30px",float:"left"}} name="register"> Back </button>
                                
                            </Col>
                        </Row>


                    </Col>
                   
                </Row>               
            </div>
            
        </React.Fragment>
    )
}
export default Ticketdetail
