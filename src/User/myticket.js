import React,{useState,useEffect} from 'react'
import {Row,Col,Container,Table,Card} from 'react-bootstrap'
import axios from 'axios';
import Skeleton from '../common/Skeleton';
import useLoader from '../common/useLoader'
import ReactPaginate from 'react-paginate';
import {toast} from 'react-toastify'
import {CSVLink} from 'react-csv';
import {FaDownload} from 'react-icons/fa'

const Myticket = (props) => {
    let {} = props;
    let {skeletonLoading,skeletonHandler} = useLoader();
    //state goes here
    let [myTickets,setMyTickets] = useState([]);
    let [currentPage,setCurrentPage] = useState(0);
    let [csvData,setCsvData] = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        }
    })

    //variables
    let singlePage = 9;
    let pageVisited = singlePage * currentPage;

    //effect goes here
    useEffect(()=>{
        skeletonHandler(true);
        axios.get(process.env.REACT_APP_URL+"getMyTickets",auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setMyTickets(
                    response.data.data
                )
            }
            else
            {
                setMyTickets([]);
            }
            skeletonHandler(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"generateCsv/",auth.config)
        .then((response)=>{
           if(response.data.success == true)
           {
              setCsvData(
                  response.data.data
              )
           }
         
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
   
    let content = myTickets.slice(pageVisited,pageVisited+singlePage);
    let totalPages = Math.ceil(myTickets.length / singlePage)

    //handlers
    const changePage = ({selected})=>{
        setCurrentPage(
            selected
        )
    }

    var headers = [];
    if(csvData.length > 0)
    {
        let dataBox = csvData[0];
        for(var i in dataBox)
        {
            headers.push({"label":i,"key":i})
        }
    }
   
    const csvReport = {
        filename:`tickets${Date.now()}.csv`,
        headers:headers,
        data:csvData
    }

    return (
        <React.Fragment>
             <div className="container-fluid" style={{borderRadius:'20px'}}>
                    <h5 className="text-center mt-2 mb-1" style={{fontWeight:"bolder",color:"#053742"}}>  My Tickets  </h5>
                    <p style={{float:"right",fontWeight:"bold",color:"#0f6c81"}}> {myTickets.length} booking records.  </p>
                    {
                        skeletonLoading == true?
                        (
                            <Skeleton style={{clear:"both"}}/>
                        ):
                        (
                            myTickets.length > 0?
                        (
                            <>  
                            <Row>
                                <Col lg={2}>
                                <CSVLink {...csvReport} style={{textDecoration:"none",fontWeight:"bolder",color:"black"}}> Download CSV <FaDownload/> </CSVLink>
                                </Col>
                                </Row>    
                            <Row style={{clear:"both"}}> 
                            
                            {
                                content.map((val)=>{
                                    return (
                                        <Col lg={4} style={{clear:"both"}}>
                                            <Card className="myTicketCard" style={{backgroundColor:'#eeebdd'}}>
                                            
                                                <Card.Body>
                                                    <h1 className="text-center" style={{fontSize:'25px',fontWeight:'bold',color:'black'}}> {val.ticketId.hospitalId.hospitalName} </h1>
                                                    <Table>
                                                    <thead>
                                                    
                                                        <tr className="text-center">
                                                            <th>Patient Name</th>
                                                            <td> {val.patientName}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Age</th>
                                                            <td>{val.age} years</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Gender</th>
                                                            <td>{val.gender}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Department</th>
                                                            <td>{val.department}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Shift</th>
                                                            <td>{val.ticketId.shift}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Date</th>
                                                            <td>{val.ticketId.date2}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Time</th>
                                                            <td>{val.ticketId.startTime}-{val.ticketId.endTime}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Ticket Number</th>
                                                            <td>#{val.ticketNo}</td>
                                                        </tr>
                                                        <tr className="text-center">
                                                            <th>Ticket Fee</th>
                                                            <td>Rs {val.ticketId.price}</td>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                               
                                                {
                                                    val.ticketStatus != "Completed"?
                                                    (
                                                        <p className='text-center p-2' style={{clear:"both",fontSize:'20px',color:'white',backgroundColor:'#053742',width:'100%',borderRadius:'15px'}}>Confirmed</p>
                                                    ):
                                                    (
                                                        <p className='text-center p-2' style={{clear:"both",fontSize:'20px',color:'white',backgroundColor:'#0f6c81',width:'100%',borderRadius:'15px'}}>Completed</p>
                                                    )
                                                }

                                               
                                                </Card.Body>
                                            </Card>
                                               
                                           
                                           
                                

                                    </Col>
                                    )
                                })
                            } 

                             {
                                            totalPages > pageVisited+1?
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {(pageVisited+1)*singlePage} of <strong>{myTickets.length}</strong> </p>
                                            ):
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {myTickets.length} of <strong>{myTickets.length}</strong> </p>
                                            )
                            }                
                            
                                        <ReactPaginate
                                            pageCount = {totalPages}
                                            previousLabel = "Previous"
                                            nextLabel = "Next"
                                            onPageChange = {changePage}
                                            containerClassName={"main"}
                                            previousLinkClassName={"prevStyle"}
                                            nextLinkClassName={"nextStyle"}
                                            disabledClassName={"disableButtons"}
                                            activeClassName={"pageActive"}
                                        />    
                        
                        </Row> 
                        </>
                        ):
                        (
                            <p className="text-center" style={{fontWeight:"bolder",color:"#0f6c81",clear:"both",fontSize:"26px"}}> 0 Booking Records Available. </p>
                        )
                        )
                    }
                   
                                 
            </div>
            
        </React.Fragment>
    )
}

export default Myticket
