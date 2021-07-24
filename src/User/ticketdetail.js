import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'
import useHospital from './useHospital'
import Skeleton from '../common/Skeleton'
import {withRouter} from 'react-router'
import Loader from '../common/loader'
import useLoader from '../common/useLoader'
import PaymentOption from './paymentOption'
import HospitalPayment from './hospitalPayment'


export const Ticketdetail = (props) => {
    let {} = props
    let {ticketDetail,skeletonLoading} = useHospital()
    let {loading} = useLoader()
    //variable goes here
    let bankToken = sessionStorage.getItem('bankKey');
    
    return (
        <React.Fragment>
            {
                loading == true?
                (
                    <Loader/>
                ):
                (
                    <div className="container ticketdet" style={{borderRadius:'20px'}}>
                    <Row className='ticket__form'>                    
                    <Col lg={3} md={2} sm={1}>

                    </Col>
                    <Col lg={6} md={8} sm={10} className="details" style={{backgroundColor:'#eeebdd'}}>
                            {
                                !bankToken?
                                (
                                    <h2 className="text-center" style={{color:'#0f6c81'}}>Ticket Details</h2>
                                ):
                                (
                                    <h2 className="text-center" style={{color:'#0f6c81'}}>E-Ticketing Payment</h2>
                                )
                            }
                           
                        {
                            skeletonLoading == true?
                            (
                                <Skeleton/>
                            ):
                            (
                                <Table>
                            <thead>
                            {
                                ticketDetail.ticketId&&
                                (
                                    ticketDetail.ticketId.hospitalId&&
                                    (
                                        <>
                                            <tr className="text-center">
                                                <th>Hospital Name</th>
                                                <td>{ticketDetail.ticketId.hospitalId.hospitalName}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Patient Name</th>
                                                <td>{ticketDetail.patientName}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Age</th>
                                                <td>{ticketDetail.age}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Gender</th>
                                                <td>{ticketDetail.gender}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Department</th>
                                                <td>{ticketDetail.department}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Shift</th>
                                                <td>{ticketDetail.ticketId.shift}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Date</th>
                                                <td>{ticketDetail.ticketId.date2}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Time</th>
                                                <td>{ticketDetail.ticketId.startTime}-{ticketDetail.ticketId.endTime}</td>
                                            </tr>
                                            <tr className="text-center">
                                                <th>Ticket Fee</th>
                                                <td>Rs {ticketDetail.ticketId.price}</td>
                                        </tr>
                                        </>
                                    )
                                )
                            }
                              
                                

                            </thead>
                        </Table>
                            )
                        }
                        
                        {
                            !bankToken?
                            (
                                <PaymentOption hospitalId={props.match.params.hospitalId}/>
                            ):
                            (
                                <HospitalPayment hospitalId={props.match.params.hospitalId}/>
                            )
                        }

                    </Col>
                   
                </Row>               
            </div>
                )
            }
          
            
        </React.Fragment>
    )
}
export default withRouter(Ticketdetail)
