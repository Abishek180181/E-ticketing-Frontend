import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'

const Other = (props) => {
    let{}=props
    return (
        <React.Fragment>
            <div className="container w-4">
                <form className="self">
                    <div className="form-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                    <label>Patient Name</label>
                                </Col>
                                <Col lg={8}>
                                    <input type="text" className="form-control"/>
                                </Col>
                            </Row>
                            
                            
                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                    <label>Age</label>
                                </Col>
                                <Col lg={8}>
                                    <input type="text" className="form-control"/>
                                </Col>
                            </Row>
                            
                            
                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="from-group">
                            
                            <Row>
                                <Col lg={4}>
                                <label>Address</label>
                                </Col>
                                <Col lg={8}>
                                <input type="text" className="form-control"/>
                                </Col>
                            </Row>
                            
                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="un">
                            <div className="form-group mb-2">
                            <Row>
                                <Col lg={4}>
                                <label> Select Your Gender</label>
                                </Col>
                                <Col lg={8}>
                                <div className="mb-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="Male" value="Male"/>
                                    <label className="form-check-label" for="Male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="Female" value="Female"/>
                                    <label className="form-check-label" for="Female">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="Other" value="Other"/>
                                    <label className="form-check-label" for="Other">Other</label>
                                </div>
                            </div>
                                </Col>
                            </Row>
                                
                                
                            </div>
                            

                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                <label>Departmnet</label>
                                </Col>
                                <Col lg={8}>
                                <select  className="form-select" name="department" >
                                
                                <option value="ENT">ENT</option>
                                <option value="OPD">OPD</option>   
                            </select>
                                </Col>
                            </Row>
                            
                            
                        </div>
                    </div>
                    <div className="from-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                <label>Shift</label>
                                </Col>
                                <Col lg={8}>
                                <select  className="form-select" name="shift">
                                    
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                </select>
                                </Col>
                            </Row>
                           
                                
                        </div>
                    </div>
                    <Table bordered hover className="table__items2 m-3 w-100">
                        <thead>
                        <tr className="text-center">
                            <th>Time</th>
                            <td>1am - 2 am</td>
                        </tr>
                        <tr className="text-center">
                            <th>Ticket Fee</th>
                            <td>Rs 200</td>
                        </tr>
                        <tr className="text-center">
                            <th>Available Tickets</th>
                            <td>50</td>
                        </tr>
                        </thead>
                    </Table>

                    <div className="text-center">
                            <button type="button" className="btn btn-md btn__Add w-25 mt-3" style={{boxShadow:"3px 4px 6px rgba(0,0,0,0.6)"}}> Proceed</button>  
                        </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Other
