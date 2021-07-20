import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container,NavDropdown,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';
import useLoader from '../common/useLoader'
import Skeleton from '../common/Skeleton'
import {Link} from 'react-router-dom'

const Hospital = (props) => {
    let{} = props;
    let {addToast} = useToasts();
    let {skeletonLoading,skeletonHandler} = useLoader();
    let token = sessionStorage.getItem('token')

    //state goes here
    let [hospitals,setHospitals] = useState([]);
    let [todayFacility,setFacility] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    })

    //effect goes here
    useEffect(()=>{
        skeletonHandler(true)
        axios.get(process.env.REACT_APP_URL+"fetchTicketHospitals",auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setHospitals(
                    response.data.data
                )
                setFacility(
                    response.data.hospitalToday
                )
            }
            else
            {
                setHospitals([])
                setFacility([])
            }
            skeletonHandler(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);

    //handlers goes here
    const buyTicket = (e,id)=>{
        if(todayFacility.includes(id))
        {
           // window.location.href = "/"
        }
        else
        {
            addToast("Tickets for the selected hospital is closed for today.",{
                "appearance":"error",
                "autoDismiss":true
            })
        }
    }


    return (
        <React.Fragment>
            <div className="container-fluid mt-1">
                <h5 className="text-center mt-2 txt__secondary" style={{fontWeight:"bolder",fontSize:"22px"}}> Hospitals </h5>
                

                {
                   skeletonLoading == true?
                   (
                       <Skeleton/>
                   ):
                   (
                       hospitals.length > 0?
                       (
                           <>
                            <p style={{float:"right"}}> <small className="txt__primary" style={{fontWeight:"bolder"}}> {hospitals.length} hospitals. </small> </p>
                            <Container fluid style={{clear:"both"}}>
                                <Row>
                                {
                                    hospitals.map((val)=>{
                                        return (
                                            <Col lg={3}>
                                                <div className="card hospitalCard" onClick={(e)=>{buyTicket(e,val._id)}}>
                                                    <img src={`${process.env.REACT_APP_URL}${val.hospitalImage}`} className="card-img-top hospitalImg" alt="logo" style={{height:'300px',width:'100%',borderRadius:"13px 13px 0px 0px"}}/>
                                                    <div class="card-body">
                                                        <h5 className="card-title text-center txt__secondary" style={{height:'70px',fontWeight:'600'}}>{val.hospitalName}</h5>
                                                       
                                                       <div className="text-center">
                                                            <button type="button" class="btn btn__Add w-50 btn-md" style={{boxShadow: '2px 2px 6px #424242'}}>Buy Ticket</button>
                                                       </div>
                                                        
                                                    </div>
                                                
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                                   
                                </Row>
                            </Container>
                           </>
                       ):
                       (
                           <p className="text-center txt__primary" style={{fontWeight:"bolder",fontSize:"18px"}}> No Hospitals to fetch... </p>
                       )
                   )
                }
                
            </div>
            
        </React.Fragment>
    )
}

export default Hospital
