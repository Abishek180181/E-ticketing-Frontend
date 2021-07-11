import React,{useState,useEffect} from 'react'
import {Container,Col,Row,Card,Table,modal} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {BiSearchAlt} from 'react-icons/bi'
import AddHospital  from './addHospital';
import ReactPaginate from 'react-paginate';
import EditHospital from './editHospital'



function Hospital(props) {
    let{}=props

    //state goes here
    let [hospitals,setHospitals] = useState([]);
    let [search,setSearch] = useState("");
    let [pageSurfed,setSurfed] = useState(0);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem("token")}`
            }
        }
    })

    //variables goes here
    let singlePage = 7;
    let rowChecked = singlePage * pageSurfed;

    //effect goes here
    useEffect(()=>{
        axios.get(process.env.REACT_APP_URL+"fetchHospitals",auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                setHospitals(response.data.data)
            }
            else
            {
                setHospitals([])
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    //handlers and supporters goes here
    const searchHandler = (e)=>{
        setSurfed(
            0
        )
        setSearch(
            e.target.value
        )
    }

    const changePage = ({selected})=>{
       console.log(selected)
        setSurfed(
            selected
        )
    }


    let filtered = hospitals.filter((val)=>{return val.hospitalName.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.emailAddress.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.location.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.mobileNumber.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.hospitalCode == search})
    let pageDistribution = Math.ceil(filtered.length / singlePage);
    let content = filtered.slice(rowChecked,rowChecked+singlePage);
    
    return (
        <React.Fragment>
        
            <div className="container" style={{ height:'55vh'}}>
            
            <h1 className="txt__secondary" style={{fontWeight:'bold'}}>Hospital</h1>
          <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                   
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#fdb931', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                        
                            <Card.Body>
                                <Card.Title style={{color:"white",fontSize:"28px",marginBottom:"0px",fontWeight:"bolder"}}> Total Hospitals </Card.Title>
                                <p style={{color:"white",fontSize:"34px",fontWeight:"bolder",marginLeft:"10px"}}> {hospitals.length} </p>
                                
                            </Card.Body>
                            </Card>
                           
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                  
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#2405c2', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                          
                    </Col>
              </Row>

          </div>

          {/* search layout */}
          <Row  className="mt-4 mb-1">
        
          <Col lg={12} md={12} xs={12}>
              <form method = "post">
                <div className="form-group">
                  <div class="input-group">
 
                    <input type="text" className="form-control" name="search" onChange={(event)=>{searchHandler(event)}} placeholder="Search hospitals..." style={{height:"60px"}}/>
                    <span class="input-group-text" style={{width:"60px",background:"#047CC2"}}><BiSearchAlt style={{color:"white",fontSize:"32px"}}/></span>
                    </div>
                    </div>
              </form>
            </Col>
           
            </Row> 
          
            <div className ="add-btn">
                <button type="button" className="btn btn-md w-0 Add" data-bs-toggle="modal" data-bs-target="#hospital" > Add </button>
                <AddHospital/>
            </div>

        </div>
       
        <Container fluid mx-auto className="mb-3" style={{clear:"both"}}>
                    <Row>
                        <h3 className="text-center mx-auto my-3">Hospital Details</h3>
                        {
                            content.length > 0?
                            (
                                <>
                                   <p style={{float:"right"}} className="mb-0 mt-0 txt__secondary"> <small style={{fontWeight:"bolder"}}> {filtered.length} hospitals.  </small> </p>
                                    <Col style={{clear: 'both'}}>
                                        <Table bordered hover responsive className="table__items"> 
                                            <thead>
                                                <tr className="text-center">
                                                    <th>S.N.</th>
                                                    <th> Hospital_Name </th>
                                                    <th> Hospital_Code </th>
                                                    <th>Username</th> 
                                                    <th>Email_Address</th>
                                                    <th> Location </th>
                                                    <th>Mobile_Number</th>
                                                    <th>Office_Number</th>
                                                    <th>Contact_Person_Name</th>
                                                    <th>Designation</th>                                                                                                     
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {
                                                   content.map((val)=>{
                                                       return(
                                                           <>
                                                           <tr className="text-center table__rows">
                                                                <td style={{fontWeight:"bolder"}}> {filtered.indexOf(val)+1}  </td>
                                                                <td> {val.hospitalName}  </td>
                                                                <td> {val.hospitalCode}  </td>
                                                                <td> {val.userName}  </td>
                                                                <td> {val.emailAddress}  </td>
                                                                <td> {val.location}  </td>
                                                                <td> {val.mobileNumber}  </td>
                                                                <td> {val.officeNumber}  </td>
                                                                <td> {val.personName}  </td>
                                                                <td> {val.designation} </td>
                                                                <td> 
                                                                    <button className="btn btn-success w-0 btn-md" type="button" data-bs-toggle="modal" data-bs-target={`#editHospital${val._id}`} name="update" style={{boxShadow:"2px 3px 3px rgba(0,0,0,0.6)"}}> 
                                                                    
                                                                        <i className="fas fa-pen"></i>
                                                                    
                                                                     </button>
                                                                
                                                                </td>
                                                               
                                                           </tr>
                                                           <EditHospital data={val} key={`edit${val._id}`}/>
                                                           </>
                                                       )
                                                   })
                                               }
                                            </tbody>
                                        </Table>
                                        {
                                            pageDistribution > rowChecked+1?
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {(rowChecked+1)*singlePage} of <strong>{filtered.length}</strong> </p>
                                            ):
                                            (
                                                <p style={{color:'grey',fontWeight:'400'}}> Showing {filtered.length} of <strong>{filtered.length}</strong> </p>
                                            )
                                        }
                                       

                                        <ReactPaginate
                                                pageCount = {pageDistribution}
                                                previousLabel = "Previous"
                                                nextLabel = "Next"
                                                onPageChange = {changePage}
                                                containerClassName={"main"}
                                                previousLinkClassName={"prevStyle"}
                                                nextLinkClassName={"nextStyle"}
                                                disabledClassName={"disableButtons"}
                                                activeClassName={"pageActive"}
                                        />
          


                                    </Col>
                                    
                                </>
                            ):
                            (
                                <p className="text-center" style={{fontWeight:"bolder",color:"black"}}>  0 Hosptials Registered.  </p>
                            )
                        }
                  
                    </Row>
                </Container>

               
         
           
        </React.Fragment>
    )
}

export default Hospital
