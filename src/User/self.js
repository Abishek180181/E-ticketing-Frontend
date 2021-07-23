import React,{useState,useEffect} from 'react'
import useHospitals from './useHospital'
import { withRouter } from 'react-router';
import {Row,Col,Container,Table} from 'react-bootstrap'


const Self = (props) => {
    let {} = props;
    let hospitalId = props.match.params.hospitalId;
    let {hospital,shifts} = useHospitals(hospitalId);

    //variable goes here
    var user = JSON.parse(sessionStorage.getItem('user'))

    let [buyTicketDetails,setDetails] = useState({
        "patientName":"",
        "age":"",
        "department":"",
        "shift":"",
        "address":user.address,
        "gender":user.gender,
        "hospitalId":hospitalId,
        "boughtFor":"Self",
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    });

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
                                <input type="number" className="form-control"/>
                                </Col>
                            
                            </Row>
                        </div>
                    </div>
                   

                    <div className="form-row m-3">
                        <div className="from-group">

                        <Row>
                                <Col lg={4}>
                                    <label>Department</label>
                                </Col>
                                <Col lg={8}>
                                <select  className="form-select" name="department" >
                            <option value=""> Select Department </option>
                                { 
                                    hospital.department &&(
                                        hospital.department.map((val)=>{
                                            return (
                                                <option value={val}>{val}</option>
                                            )
                                        })
                                    )
                                }
                               
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
                                    <option value="Shift">Select Shift</option>
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

export default withRouter(Self)
