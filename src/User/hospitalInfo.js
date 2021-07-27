import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import Photo from '../assets/logo/logo.png'
import { withRouter } from 'react-router';
import axios from 'axios'
import useHospitals from './useHospital'


const HospitalInfo = (props) => {
    const {} = props;
    const {hospital} = useHospitals(props.match.params.hospitalId)
  
    return (
        <React.Fragment>
            {
                hospital &&
                (
                    <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="main__bg">
                                <Row>
                                    <Col lg={1} className="d-none d-md-none d-lg-block"></Col>
                                    <Col lg={2} className="d-none d-md-none d-lg-block">
                                        <div className="hospital__img">
                                            <img src={`${process.env.REACT_APP_URL}${hospital.hospitalImage}`} className="d-block" alt="hospital"/>
                                        </div>
                                    </Col>
                                    <Col lg={3} md={12} xs={12}>
                                        <div className="hospital__detail mt-4">
                                            <h5 style={{fontWeight:"bolder",color:"#053742"}}> {hospital.hospitalName} </h5>  
                                            <div>
                                                <p className="mb-1" style={{float:"right"}}> {hospital.location} </p>
                                                <p className="mb-1"> <span> {hospital.emailAddress} </span> </p>
                                            </div>
                                            <div>
                                                <p className="mb-1" style={{float:"right"}}> {hospital.officeNumber} </p>
                                                <p className="mb-1"> <span> {hospital.mobileNumber} </span> </p>
                                            </div>
                                            
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                )
            }
           
        </React.Fragment>
    )
}

export default withRouter(HospitalInfo)
