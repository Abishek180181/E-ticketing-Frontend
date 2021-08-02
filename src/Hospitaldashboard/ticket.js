import React,{ useState, useEffect}from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'

const Ticket = (props) => {
    let{}= props
    return (
        <React.Fragment>
            <p style={{fontSize:"25px",color:"Black",fontWeight:"bolder"}}>Tickets</p>
            <Row>
                <Col lg={6} md={12} xs={12}>
                    <div className="form-row ticket">
                        <div className="form-group">
                            <label>Date</label>
                            <input className="form-control" type="date" name="startDate" />
                            </div>
                    </div>
                </Col>
                <Col lg={6} md={12} xs={12}>
                    <div className="form-row ticket">
                        <div className="form-group ">
                            <label> Choose Shift</label>									
                            <select  className="form-select" name="shift" >
                                <option value=""> Choose shift </option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>
                        
                    </div>
                </Col>
            </Row>
            <Table bordered hover responsive className="table__items w-100"> 
                    <thead>
                        <tr className="text-center">
                            <th> S.N </th>
                            <th>Patient Name</th>
                            <th> Phone </th>
                            <th> Email </th>
                            <th>Address</th> 
                           
                            
                        </tr>
                    </thead>
            </Table>
            
        </React.Fragment>
    )
}

export default Ticket
