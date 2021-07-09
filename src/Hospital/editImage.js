import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import swal from 'sweetalert';

const EditImage = (props) => {
    const {data} = props;

    //state goes here
    let [imageDetails,setDetails] = useState({
        "hospitalId":data._id,
        "hospitalImage":"",
        "config":{
            "headers":
            {
                "authorization": `Bearer ${sessionStorage.getItem("token")}`
            }
           
        },
        "error":""
    })

    //event handler 
    const imageHandler = (e)=>{
        const {name,files} = e.target;
        var img = document.querySelector(`#hospitalImage${data._id}`);
        img.src = URL.createObjectURL(files[0])
        setDetails({
            ...imageDetails,
            [name]:files[0]
        })
    }

    const editImage = (e)=>{
        e.preventDefault();
        let fd = new FormData();
        fd.append('hospitalId',imageDetails.hospitalId);
        fd.append('hospitalImage',imageDetails.hospitalImage)

        axios.put(process.env.REACT_APP_URL+"editPictureOfHospital",fd,imageDetails.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    title:"Success",
                    text:response.data.message,
                    icon:"success"
                })
                window.location.reload();
            }
            else
            {
                setDetails({
                    ...imageDetails,
                    ['error']:response.data.message
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }


 
    return (
        <React.Fragment>
             <Container fluid>
                 <Row>
                     <Col>
                        <h5 style={{fontWeight:"bolder",textAlign:"center",color:"darkblue",textDecoration:"underline",textDecorationStyle:"dotted",marginTop:"4px"}}> Edit image of {data.hospitalName} </h5>
                        
                        <Row>
                            <Col lg={6}>
                                <p className="text-center" style={{color:"grey",fontWeight:"bold",textDecoration:"underline"}}> Current Image </p>
                                {
                                    data.hospitalImage == "no-img.png"?
                                    (
                                        <div className ="imgContainer">
                                            <img src={`${process.env.PUBLIC_URL}/hospitalDr.png`} alt="Hospital" className="d-block"/>
                                        </div>
                                    ):
                                    (
                                        <div className ="imgContainer">
                                            <img src={`${process.env.REACT_APP_URL}${data.hospitalImage}`} alt="Hospital" className="d-block"/>
                                        </div>
                                    )
                                }
                             
                            </Col>

                            <Col lg={6}>
                                <p className="text-center" style={{color:"grey",fontWeight:"bold",textDecoration:"underline"}}> New Image </p>
                                {
                                    
                                        <div className ="imgContainer">
                                            <img src={`${process.env.PUBLIC_URL}/hospitalDr.png`} alt="Hospital" id={`hospitalImage${data._id}`} className="d-block"/>
                                        </div>
                                   
                                }
                            </Col>
                        </Row>
                        
                        
                        <form method="post" className="reg__form mt-4" onSubmit={editImage}>
                            <div className="form-group">
                                <label> Choose Image </label>
                                <input type="file" className="form-control" name="hospitalImage" onChange={(event)=>{imageHandler(event)}} required/>
                            </div>
                            {imageDetails['error']&& (<p style={{color:"red"}}> <small> *{imageDetails['error']} </small> </p>)}
                            <div className="text-center mt-3">
                                <button className="btn btn-primary btn-md w-25" name="edit" type="submit" style={{boxShadow:"2px 3px 4px rgba(0,0,0,0.6)"}}> Edit Image </button>
                            </div>
                        </form>
                        <button type="button" style={{float:"right"}}  className="btn btn-danger w-0 btn-md" data-bs-dismiss="modal">Close</button>
                     </Col>
                 </Row>
             </Container>
        </React.Fragment>
    )
}

export default EditImage
