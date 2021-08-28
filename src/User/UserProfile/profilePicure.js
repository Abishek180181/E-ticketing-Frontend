import React,{useState} from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap'
import image from '../../assets/noimage.png'
import useDetailChange from './useDetailChange'
import ProgressButton from '../../common/progressButton';
import useLoader from '../../common/useLoader'
import useCommon from '../../common/useCommon'
import {toast} from 'react-toastify'

const ProfilePicure = (props) => {
    const {} = props;
    const {user} = useDetailChange()
    const {loading,loadingHandler} = useLoader();
    const {auth} = useCommon();

    let [img,setImg] = useState({
        "profilePicture":user.profilePicture
    })

    const imageHandler = (e)=>{
        let newImg = document.querySelector('#newPicture');
        
        let {name,files} = e.target;
        setImg({
            ...img,
            [name]:files[0]
        })
        newImg.src = URL.createObjectURL(files[0]);
    }

    const changeProfile = (e)=>{
        e.preventDefault();
        loadingHandler(true)
        
        const fd = new FormData();
        fd.append("profilePicture",img.profilePicture);
        
        axios.put(process.env.REACT_APP_URL+"changeMyProfilePicture",fd,auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                toast.success(response.data.message);
                sessionStorage.setItem('user',JSON.stringify(response.data.data));
                window.location.reload();
            }
            else
            {
                toast.error(response.data.message);
            }
            loadingHandler(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <React.Fragment>
             <div className="modal fade" id="changePP" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel" style={{color:"black",fontWeight:"bold"}}>Change My Profile Photo</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <Container>
                        <Row>
                           <Col lg={6}>
                            <p className="text-center" style={{color:"black",fontWeight:"bold",textDecoration:"underline"}}> Current Picture </p>
                               <div className="profilePic">
                                    {
                                        user.profilePicture != "no-photo.jpg"?
                                        (
                                            <img src={`${process.env.REACT_APP_URL}${user.profilePicture}`} className="d-block" alt="myImage"/>
                                        ):
                                        (
                                            <img src={image} className="d-block" alt="myImage"/>
                                        )
                                    }
                                 
                               </div> 
                           </Col>
                           <Col lg={6}>
                           <p className="text-center" style={{color:"black",fontWeight:"bold",textDecoration:"underline"}}> New Picture </p>
                                <div className="profilePic">
                                   <img src={image} id="newPicture" className="d-block" alt="myImage"/>
                               </div> 
                           </Col>
                           <Col lg={12}>
                               <form method="post" className="mt-3" onSubmit={changeProfile}>
                                   <div className="form-group">
                                       <label style={{fontWeight:"bold"}}> Choose Picture </label>
                                       <input type="file" className="form-control" id="imgg" name="profilePicture" onChange={(e)=>{imageHandler(e)}}/>  
                                   </div>
                                   <div className="text-center">
                                        {
                                            loading == true?
                                            (
                                                <ProgressButton/>
                                            ):
                                            (
                                                <button type="submit" className="btn btn__Add btn-md w-0 mt-3" style={{boxShadow:"2px 2px 6px rgba(0,0,0,0.6)"}} name="ppChange"> Change Profile Picture </button>
                                            )
                                        }
                                       
                                   </div>
                               </form>
                           </Col>
                        </Row>

                    </Container>
                </div>
                </div>
                </div>
                </div>
        </React.Fragment>
    )
}

export default ProfilePicure
