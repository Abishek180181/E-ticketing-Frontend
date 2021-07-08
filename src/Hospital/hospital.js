import React,{useState,useEffect} from 'react'
import {Container,Col,Row,Card,Table,modal} from 'react-bootstrap'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';
import {BiSearchAlt} from 'react-icons/bi'
import AddHospital  from './addHospital';



function Hospital(props) {
    let{}=props

    //state goes here
    let [hospitals,setHospitals] = useState([]);
    let [search,setSearch] = useState("");
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem("token")}`
            }
        }
    })

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
        setSearch(
            e.target.value
        )
    }


    let filtered = hospitals.filter((val)=>{return val.hospitalName.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.emailAddress.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.location.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.mobileNumber.toLowerCase().trim().startsWith(search.toLowerCase().trim()) || val.hospitalCode == search})

    return (
        <React.Fragment>
            <div className="container" style={{ height:'55vh'}}>
            <h1>Hospital</h1>
          <div className="chart">
              <Row>
                <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#e4e2e2', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
                    <Col lg={4} md={12} xs={12}>
                    <Link to="" className="card__features">
                    <Card style={{margin:"10px",width:"350px",height:'200px',background:'#e4e2e2', boxShadow:"0px 0px 15px rgba(0,0,0,0.6)"}}>
                            <div className="img__card">                                                
                            <Card.Img variant="top" />
                            </div> 
                            <Card.Body>
                                <Card.Title className="text-center" style={{color:"black",fontSize:"15px",marginBottom:"0px"}}></Card.Title>
                            
                                
                            </Card.Body>
                            </Card>
                            </Link>
                    </Col>
              </Row>

          </div>

          {/* search layout */}
          <Row  className="mt-4 mb-1">
          <Col lg={2} className="d-none d-md-none d-lg-block"></Col>
          <Col lg={8} md={12} xs={12}>
              <form method = "post">
                <div className="form-group">
                  <div class="input-group">
 
                    <input type="text" className="form-control" name="search" onChange={(event)=>{searchHandler(event)}} placeholder="Search hospitals..." style={{height:"60px"}}/>
                    <span class="input-group-text" style={{width:"60px",background:"#047CC2"}}><BiSearchAlt style={{color:"white",fontSize:"32px"}}/></span>
                    </div>
                    </div>
              </form>
            </Col>
            <Col lg={2} className="d-none d-md-none d-lg-block"></Col>  
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
                            filtered.length > 0?
                            (
                                <>
                                    <p style={{float:'right',fontWeight: 'bold'}}> {filtered.length} hospitals.  </p>
                                    <Col style={{clear: 'both'}}>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr className="text-center">
                                                    <th>S.N.</th>
                                                    <th> Hospital Name </th>
                                                    <th> Hospital Code </th>
                                                    <th>Username</th> 
                                                    <th>Email Address</th>
                                                    <th> Location </th>
                                                    <th>Mobile Number</th>
                                                    <th>Office Number</th>
                                                    <th>Contact Person Name</th>
                                                    <th>Designation</th>                                                                                                     
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {
                                                   filtered.map((val,i)=>{
                                                       return(
                                                           <tr className="text-center">
                                                                <td> {i+1}  </td>
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
                                                                    <button className="btn btn-success w-0 btn-md" type="button" data-toggle="modal" data-target="#" name="update"> Edit </button>
                                                                </td>
                                                           </tr>
                                                       )
                                                   })
                                               }
                                            </tbody>
                                        </Table>
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
