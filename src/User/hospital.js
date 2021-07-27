import React,{useState,useEffect} from 'react'
import {Navbar,Nav,Container,NavDropdown,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import {useToasts} from 'react-toast-notifications';
import useLoader from '../common/useLoader'
import Skeleton from '../common/Skeleton'
import ReactPaginate from 'react-paginate'
import {BiSearchAlt} from 'react-icons/bi'


const Hospital = (props) => {
    let{} = props;
    let {addToast} = useToasts();
    let {skeletonLoading,skeletonHandler} = useLoader();
    let token = sessionStorage.getItem('token')
    let [search,setSearch] = useState("");
    let [currentPage,setCurrentPage] = useState(0);

    let singlePage = 8;
    let pageVisited = singlePage * currentPage;

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
            window.location.href = `/buyticket/${id}`
        }
        else
        {
            addToast("Tickets for the selected hospital is closed for today.",{
                "appearance":"error",
                "autoDismiss":true
            })
        }
    }

    const searchHandler = (e)=>{
        setCurrentPage(0)
        setSearch(e.target.value)
    }

    const changePage = ({selected})=>
    {
        setCurrentPage(
            selected
        )
    }

    //content builder
    let filtered = hospitals.filter((val)=>{return val.hospitalName.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.location.toLowerCase().trim().startsWith(search.toLowerCase().trim())})
    let totalPages = Math.ceil(filtered.length/singlePage);
    let content = filtered.slice(pageVisited,pageVisited+singlePage);

    return (
        <React.Fragment>
            <div className="container-fluid mt-1">
                <h5 className="text-center mt-2 txt__secondary mb-3" style={{fontWeight:"bolder",fontSize:"22px"}}> Hospitals </h5>
                <Container className="mb-2">
                    <Row>
                        <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
                        <Col lg={8} md={12} xs={12}>
                            <form method = "post">
                                <div className="form-group">
                                <div className="input-group">
                
                                    <input type="text" className="form-control" name="search" onChange={(event)=>{searchHandler(event)}} placeholder="Search hospitals..." style={{height:"60px"}}/>
                                    <span className="icon-inside"><BiSearchAlt style={{color:"grey",fontSize:"32px"}}/></span>
                                </div>
                                    </div>
                            </form>
                        </Col>
                        <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
                    </Row>
                </Container>

                {
                   skeletonLoading == true?
                   (
                       <Skeleton/>
                   ):
                   (
                       filtered.length > 0?
                       (
                           <>
                            <p style={{float:"right"}}> <small className="txt__primary" style={{fontWeight:"bolder"}}> {filtered.length} hospitals. </small> </p>
                            <Container fluid style={{clear:"both"}}>
                                <Row>
                                {
                                    content.map((val)=>{
                                        return (
                                            <Col lg={3} className='mb-4'>
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

                                        {
                                            totalPages > pageVisited+1?
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {(pageVisited+1)*singlePage} of <strong>{filtered.length}</strong> </p>
                                            ):
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {filtered.length} of <strong>{filtered.length}</strong> </p>
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
                            </Container>
                           </>
                       ):
                       (
                           <p className="text-center txt__primary mt-2" style={{fontWeight:"bolder",fontSize:"18px"}}> No Hospitals to fetch... </p>
                       )
                   )
                }
                
            </div>
            
        </React.Fragment>
    )
}

export default Hospital
