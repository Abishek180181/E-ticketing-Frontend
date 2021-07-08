import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Container,Col,Row } from 'react-bootstrap';
import swal from 'sweetalert'

const AddHospital = (props) => {
    const {} = props;

    //state goes here
    let [hospitalDetails,setDetails] = useState({
        "hospitalName":"",
        "emailAddress":"",
        "location":"",
        "mobileNumber":"",
        "officeNumber":"",
        "personName":"",
        "designation":"",
        "department":"",
        "latitude":"",
        "longitude":"",
        "hospitalImage":"",
        "config":{
            "headers":{
                "authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        },
        "errors":{}

    })
    let [btnDisable,setDisable] = useState(true)

    
    //handlers goes here
    const changeHandler = (e)=>{
        let {name,value} = e.target;
        setDetails({
            ...hospitalDetails,
            [name]:value
        })
    }

    const imageHandler = (e)=>{
        let {name,files} = e.target;
        setDetails({
            ...hospitalDetails,
            [name]:files[0]
        })
    }

    const addHospital = (e)=>{
        e.preventDefault();

        let fd = new FormData();
        fd.append('hospitalName',hospitalDetails.hospitalName);
        fd.append('emailAddress',hospitalDetails.emailAddress);
        fd.append('location',hospitalDetails.location);
        fd.append('personName',hospitalDetails.personName);
        fd.append('hospitalImage',hospitalDetails.hospitalImage);
        fd.append('mobileNumber',hospitalDetails.mobileNumber);
        fd.append('officeNumber',hospitalDetails.officeNumber);
        fd.append('designation',hospitalDetails.designation);
        fd.append('department',hospitalDetails.department);
        fd.append('latitude',hospitalDetails.latitude);
        fd.append('longitude',hospitalDetails.longitude);

        axios.post(process.env.REACT_APP_URL+"addHospital",fd,hospitalDetails.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    title:"Success",
                    "text":response.data.message,
                    "icon":"success"
                })
                window.location.reload();
            }
            else
            {
                setDetails({
                    ...hospitalDetails,
                    ['errors']: response.data.error
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <React.Fragment>
             <div class="modal fade" id="hospital" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">ADD HOSPITAL</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">                    
                            
                                <form method = "post" className="reg__form" onSubmit={addHospital}>                               
                                    <Row className='p-2'>
                                        <Col lg={6} md={12} xs={12}>                                                                           
                                                <div className="form-group">
                                                    <label> Hospital Name</label>
                                                    <input type="text" className="form-control" value={hospitalDetails.hospitalName} onChange={(event)=>{changeHandler(event)}} name="hospitalName" placeholder="Enter hospital name"/>
                                                    {hospitalDetails['errors']['hospitalName']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['hospitalName']} </small> </p>)}
                                                </div>
                                        </Col>
                                        <Col lg={6} md={12} xs={12}>                                                                
                                        <div className="form-group">
                                            <label> Email Address</label>
                                            <input type="email" className="form-control" value={hospitalDetails.emailAddress} onChange={(event)=>{changeHandler(event)}} name="emailAddress" placeholder="Enter email address" />
                                            {hospitalDetails['errors']['emailAddress']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['emailAddress']} </small> </p>)}
                                        </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row className='p-2'>
                                        <Col lg={6} md={12} xs={12}>                                                                           
                                                <div className="form-group">
                                                    <label> Mobile Number</label>
                                                    <input type="text" maxLength="10" className="form-control" value={hospitalDetails.mobileNumber} onChange={(event)=>{changeHandler(event)}} name="mobileNumber" placeholder="Enter mobile number" />
                                                    {hospitalDetails['errors']['mobileNumber']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['mobileNumber']} </small> </p>)}
                                                </div>
                                        </Col>
                                        <Col lg={6} md={12} xs={12}>                                                                
                                                <div className="form-group">
                                                    <label> Office Number</label>
                                                    <input type="text" className="form-control" name="officeNumber" value={hospitalDetails.officeNumber} onChange={(event)=>{changeHandler(event)}} placeholder="Enter office number" />
                                                    {hospitalDetails['errors']['officeNumber']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['officeNumber']} </small> </p>)}
                                                </div>
                                        </Col>
                                    </Row>

                                    <div className="form-group p-2">
                                            <label> Department</label>
                                            <input type="text" className="form-control" name="department" value={hospitalDetails.department} onChange={(event)=>{changeHandler(event)}} placeholder="Enter departments" />
                                            <small style={{color:"grey"}}> *Separate each departments with comma </small>
                                            {hospitalDetails['errors']['department']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['department']} </small> </p>)}
                                    </div>

                                    <Row className='p-2'>
                                        <Col lg={6} md={12} xs={12}>                                                                           
                                                <div className="form-group">
                                                    <label> Contact Person Name</label>
                                                    <input type="text" className="form-control" name="personName" value={hospitalDetails.personName} onChange={(event)=>{changeHandler(event)}} placeholder="Enter contact person name" />
                                                    {hospitalDetails['errors']['personName']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['personName']} </small> </p>)}
                                                </div>
                                        </Col>
                                        <Col lg={6} md={12} xs={12}>                                                                
                                                <div className="form-group">
                                                    <label> Designation</label>
                                                    <input type="text" className="form-control" name="designation" value={hospitalDetails.designation} onChange={(event)=>{changeHandler(event)}} placeholder="Enter designation" />
                                                    {hospitalDetails['errors']['designation']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['designation']} </small> </p>)}
                                                </div>
                                        </Col>
                                    </Row>
                                    <Row className='p-2'>
                                        <Col lg={6} md={12} xs={12}>                                                                           
                                                <div className="form-group">
                                                    <label> Image</label>
                                                    <input type="file" className="form-control" accept="image/*" onChange={(event)=>{imageHandler(event)}}  name="hospitalImage" />
                                                    {hospitalDetails['errors']['hospitalImage']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['hospitalImage']} </small> </p>)}
                                                </div>
                                        </Col>
                                        <Col lg={6} md={12} xs={12}>                                                                
                                        <div className="form-group">
                                            <label> Hospital Address</label>
                                            <input type="text" className="form-control" name="location" value={hospitalDetails.location} onChange={(event)=>{changeHandler(event)}} placeholder="Enter location of hospital"  />
                                            {hospitalDetails['errors']['location']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['location']} </small> </p>)}
                                        </div>
                                        </Col>
                                    </Row>
                                    
                                    <Row className='p-2'>
                                        <Col lg={6} md={12} xs={12}>                                                                           
                                                <div className="form-group">
                                                    <label> Latitude</label>
                                                    <input type="number" className="form-control" name="latitude" value={hospitalDetails.latitude} onChange={(event)=>{changeHandler(event)}} placeholder="Enter latitude" />
                                                    {hospitalDetails['errors']['latitude']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['latitude']} </small> </p>)}
                                                </div>
                                        </Col>
                                        <Col lg={6} md={12} xs={12}>                                                                
                                                <div className="form-group">
                                                    <label> Longitude</label>
                                                    <input type="number" className="form-control" name="longitude" value={hospitalDetails.longitude} onChange={(event)=>{changeHandler(event)}} placeholder="Enter longitude" />
                                                    {hospitalDetails['errors']['longitude']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['longitude']} </small> </p>)}
                                                </div>
                                        </Col>
                                    </Row>
                                    {hospitalDetails['errors']['random']&& (<p> <small style={{color:"red"}}> *{hospitalDetails['errors']['random']} </small> </p>)}

                                    <div className="form-group p-2">
                                        <input type="checkbox" id="check" onChange={()=>{setDisable(!btnDisable)}}/>
                                        <label className="ml-2" for="check"> I accept terms and conditions. </label> I
                                    </div>
                                
                                    <div className="text-center">
                                        <button className="btn btn-primary btn-md w-25 mt-3" name="hospital" type="submit" style={{boxShadow:"3px 3px 4px rgba(0,0,0,0.6)"}} disabled={btnDisable}> Add Hospital </button>
                                    </div>
                                </form>
                            </div>
                          
                    </div>
                   
                    </div>
                </div>
              

           

        </React.Fragment>
    )
}

export default AddHospital
