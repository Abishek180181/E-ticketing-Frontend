import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table} from 'react-bootstrap'
import payment from '../assets/logo/logo.png'
import axios from 'axios';
import useHospital from './useHospital'
import Skeleton from '../common/Skeleton'
import {withRouter} from 'react-router'
import Msewa from './Msewa'
import Loader from '../common/loader'
import useLoader from '../common/useLoader'


export const Ticketdetail = (props) => {
    let {} = props
    let {ticketDetail,skeletonLoading} = useHospital()
    let {loading,loadingHandler} = useLoader()
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    })
    
    const detachProcess = (e)=>{
        let data = e.target.name;
        loadingHandler(true)
        axios.post(process.env.REACT_APP_URL+"deleteMyTicket",{"token":sessionStorage.getItem('ticketKey')},auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                sessionStorage.removeItem("ticketKey");
                if(data == "Cancel")
                {
                    window.location.href = "/hospitals"
                }
                else
                {
                    window.location.href = "/buyticket/"+props.match.params.hospitalId
                }
            }
            loadingHandler(false)
        })
        .catch((err)=>{
            console.log(err);
        })
      
    }

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
                        <h2 className="text-center" style={{color:'#0f6c81'}}>Ticket Details</h2>
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
                            <button type="button" className="btn btn-lg mt-3 mb-4 bg-white reg__btn" style={{boxShadow:"4px 3px 8px #424242",padding:"7px 30px",float:"right"}} name="Cancel" onClick={(e)=>{detachProcess(e)}}> Cancel </button>
                            </Col>
                            <Col lg={6}>
                            <button type="button" className="btn btn-lg mt-3 mb-4 bg-white reg__btn" style={{boxShadow:"4px 3px 8px #424242",padding:"7px 30px",float:"left"}} name="Back" onClick={(e)=>{detachProcess(e)}}> Back </button>
                                
                            </Col>
                        </Row>


                    </Col>
                   
                </Row>               
            </div>
                )
            }
          
            
        </React.Fragment>
    )
}
export default withRouter(Ticketdetail)
