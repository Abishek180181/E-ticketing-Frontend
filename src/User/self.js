import React,{useState,useEffect} from 'react'
import useHospitals from './useHospital'
import { withRouter } from 'react-router';
import {Row,Col,Container,Table} from 'react-bootstrap'
import ProgressButton from '../common/progressButton'
import useLoader from '../common/useLoader'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'


const Self = (props) => {
    let {} = props;
    let {loading,loadingHandler} = useLoader();
    let hospitalId = props.match.params.hospitalId;
    let {hospital,shifts} = useHospitals(hospitalId);
    let {addToast} = useToasts();
    
    //variable goes here
    var user = JSON.parse(sessionStorage.getItem('user'))

    //state goes here
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
        },
        "errors":{}
    });

    let [selectedShift,setSelected] = useState("Shift");

    const changeShift = (e)=>{
        setSelected(
            e.target.value
        )
    }

    const changeHandler = (e)=>{
        let {name,value} = e.target;
        setDetails({
            ...buyTicketDetails,
            [name]:value
        })
    }

    const reserveTicket = (e)=>{
        e.preventDefault();
        loadingHandler(true);

        axios.post(process.env.REACT_APP_URL+"buyTicket",buyTicketDetails,buyTicketDetails.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                addToast(response.data.message,{
                    "appearance":"success",
                    "autoDismiss":true
                })
                sessionStorage.setItem('ticketKey',response.data.token)
            }
            else
            {
                addToast(response.data.message,{
                    "appearance":"error",
                    "autoDismiss":true
                })

                setDetails({
                    ...buyTicketDetails,
                    ["errors"]:response.data.error
                })
            }
            loadingHandler(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <React.Fragment>
            <div className="container w-4">
                <form className="self" method = "post" onSubmit={reserveTicket}>
                    <div className="form-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                    <label>Patient Name</label>
                                </Col>
                                <Col lg={8}>
                                    <input type="text" className="form-control" name="patientName" value={buyTicketDetails.patientName} onChange={(e)=>{changeHandler(e)}} required/>
                                
                                </Col>
                            
                            </Row>
                            {buyTicketDetails['errors']['patientName']&& (<p>  <small style={{color:"red"}}> *{buyTicketDetails['errors']['patientName']}</small></p>)}
                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="from-group">
                        <Row>
                                <Col lg={4}>
                                    <label>Age</label>
                                </Col>
                                <Col lg={8}>
                                <input type="number" min="1" className="form-control" name="age" value={buyTicketDetails.age} onChange={(e)=>{changeHandler(e)}} required />
                                </Col>
                            
                            </Row>
                            {buyTicketDetails['errors']['age']&& (<p>  <small style={{color:"red"}}> *{buyTicketDetails['errors']['age']}</small></p>)}
                        </div>
                    </div>
                   

                    <div className="form-row m-3">
                        <div className="from-group">

                        <Row>
                                <Col lg={4}>
                                    <label>Department</label>
                                </Col>
                                <Col lg={8}>
                                <select  className="form-select" name="department" onChange={(e)=>{changeHandler(e)}} required>
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
                            {buyTicketDetails['errors']['department']&& (<p>  <small style={{color:"red"}}> *{buyTicketDetails['errors']['department']}</small></p>)}

                        </div>
                    </div>
                    <div className="from-row m-3">
                        <div className="from-group">
                            <Row>
                                <Col lg={4}>
                                    <label>Shift</label>
                                </Col>
                                <Col lg={8}>
                                <select  className="form-select" name="shift" onChange={(e)=>{changeShift(e); changeHandler(e);}} required>
                                    <option value="Shift">Select Shift</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Evening">Evening</option>
                                </select>
                                </Col>
                            
                            </Row>
                            {buyTicketDetails['errors']['shift']&& (<p>  <small style={{color:"red"}}> *{buyTicketDetails['errors']['shift']}</small></p>)}    
                        </div>
                    </div>
                    {buyTicketDetails['errors']['random']&& (<p className="text-center">  <small style={{color:"red"}}> *{buyTicketDetails['errors']['random']}</small></p>)}           
                    <Table bordered hover className="table__items2 m-3 w-100">
                        <thead>
                        <tr className="text-center">
                            <th>Time</th>
                            {
                                shifts[selectedShift]&&
                                (
                                    
                                    <td>{shifts[selectedShift][1]}</td>
                                    
                                    
                                )
                            }
                           
                        </tr>
                        <tr className="text-center">
                            <th>Ticket Fee</th>
                            {
                                shifts[selectedShift]&&
                                (        
                                    <td>Rs {shifts[selectedShift][0]}</td> 
                                )
                            }    
                            
                        </tr>
                        <tr className="text-center">
                            <th>Available Tickets</th>
                            {
                                shifts[selectedShift]&&
                                (        
                                    <td>{shifts[selectedShift][3]}<strong>  / </strong> {shifts[selectedShift][2]}</td> 
                                )
                            }    
                            
                        </tr>
                        </thead>
                    </Table>
                    
                        <div className="text-center">
                            {
                                loading == true?
                                (
                                    <ProgressButton/>
                                ):
                                (
                                    <button type="submit" className="btn btn-md btn__Add w-25 mt-3" style={{boxShadow:"3px 4px 6px rgba(0,0,0,0.6)"}}> Proceed</button> 
                                )
                            }
                             
                        </div>
                 
                </form>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Self)
