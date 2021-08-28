import React from 'react'
import './development.css'
import {FaFacebook,FaGithub,FaInstagram,FaYoutube,FaLinkedin,FaBehanceSquare,FaTwitterSquare} from 'react-icons/fa'
import {Container,Row,Col} from 'react-bootstrap';
import sagar from '../../../assets/devTeam/sagar.jpg'
import absek from '../../../assets/devTeam/absek.jpeg'
import asis from '../../../assets/devTeam/asis.jpg'
import krishna from '../../../assets/devTeam/Krishna.jpg'
import nilam from '../../../assets/devTeam/Nilam.jpg'


const DevelopmentTeam = (props) => {
    const {} = props
    let developers = [
        {
            "name":"Sagar Mishra",
            "speciality":"Mern Stack Developer",
            "fb":"https://www.facebook.com/profile.php?id=100006258780635",
            "github":"https://github.com/sagarmsraozil",
            "youtube":"",
            "instagram":"https://www.instagram.com/_sagarr._/",
            "linkedIn":"https://www.linkedin.com/in/sagar-mishra-a3455121b/",
            "behance":"",
            "twitter":"",
            "email":"sagarcrcoc@gmail.com",
            "photo":sagar
        },
        {
            "name":"Abhishek Basnet",
            "speciality":"Frontend Developer , Graphics Designer",
            "fb":"https://www.facebook.com/abhishek.basnet.92",
            "github":"https://github.com/Abishek180181",
            "youtube":"",
            "instagram":"https://www.instagram.com/akihoko_10/",
            "linkedIn":"https://www.linkedin.com/in/abhishek-basnet-50a497214",
            "behance":"",
            "twitter":"",
            "email":"abhishek.basnet.92@gmail.com",
            "photo":absek
        },
        {
            "name":"Ashish Pandey",
            "speciality":"Frontend Developer , TDD (Test Driven Development) Tester",
            "fb":"https://www.facebook.com/mrashish26/",
            "github":"https://github.com/ashishpandey448",
            "youtube":"",
            "instagram":"https://www.instagram.com/ashish.448/?hl=en",
            "linkedIn":"https://www.linkedin.com/in/ashish-pandey-19424021b/",
            "behance":"",
            "twitter":"",
            "email":"ppashish26@gmail.com",
            "photo":asis
        },
        {
            "name":"Krishna Neupane",
            "speciality":"Frontend Developer , BDD tester and quality assurance",
            "fb":"https://www.facebook.com/gerkhu.fuche.5",
            "github":"https://github.com/Krishna888-dotcom",
            "youtube":"https://www.youtube.com/channel/UCFbuYbvyxP671uoD0OOBbew/featured",
            "instagram":"https://www.instagram.com/_sinratensei/",
            "linkedIn":"https://www.linkedin.com/in/krishna-neupane-29804b21b/",
            "behance":"",
            "twitter":"",
            "email":"9823473821k@gmail.com",
            "photo":krishna
        },
        {
            "name":"Nilam Adhikari",
            "speciality":"Product owner , Scrum Master , UI and web designer",
            "fb":"",
            "github":"https://github.com/nilam-020",
            "youtube":"",
            "instagram":"",
            "linkedIn":"https://www.linkedin.com/in/nilam-adhikari-b10850152",
            "behance":"https://www.behance.net/nilamadhikari",
            "twitter":"",
            "email":"adhikarinilam02@gmail.com",
            "photo":nilam
        }
    ]

    let icons = {
        "fb":<FaFacebook/>,
        "github":<FaGithub/>,
        "youtube":<FaYoutube/>,
        "instagram":<FaInstagram/>,
        "linkedIn":<FaLinkedin/>,
        "behance":<FaBehanceSquare/>,
        "twitter":<FaTwitterSquare/>
    }

    const loadLinks = (data)=>{
        let content = [];

        for(var i in icons)
        {
           
            if(data[i].length > 0)
            {
                    if(i == "email")
                    {
                        content.push(
                            <li><a href={`mailto:someone@yoursite.com${data[i]}`} target="_blank">{icons[i]}</a></li>
                        )
                    }
                    else
                    {
                        content.push(
                            <li><a href={data[i]} target="_blank">{icons[i]}</a></li>
                        )
                    }
                   
            }
            
        }

        return content;

    }

    let firstHalf = developers.slice(0,3);
    let secondHalf = developers.slice(3,developers.length);
    return (
        <React.Fragment>

                <div className="team-area mt-2 mb-5">
                <Container>
                    <Row>
                     <Col lg={12} className="mb-4">
                         <h5 className="text-center" style={{color:"black",fontWeight:"bolder",fontSize:"30px"}}>  Our Team  </h5>
                         <div style={{width:"70px",height:"6px",backgroundColor:"#4b1cac",marginLeft:"auto",marginRight:"auto"}}></div>
                     </Col>   
                     {
                         firstHalf.map((val)=>{
                             return (
                                <Col lg={4} xs={12} md={6}>
                                    <div className="single-team">
                                    <div className="img-area">
                                        <img src={val.photo} className="d-block" alt={val.name}/>
                                        <div className="social">
                                        <ul className="list-inline" style={{marginTop:"60px"}}>
                                            {
                                                loadLinks(val).map((content)=>{
                                                    return (
                                                        content
                                                    )
                                                })
                                            }
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <h5 className="text-center">{val.name}</h5>
                                        <p> <small> {val.email} </small> </p>
                                        <p className="mb-2"> <small> <strong> {val.speciality} </strong> </small> </p>  
                                                
                                      
                                        
                                    </div>
                                    </div>
                                </Col>

                             )
                         })
                     }
            

                    <Row>
                    <Col lg={2}></Col>
                    {
                        secondHalf.map((val)=>{
                             return (
                                <Col lg={4} xs={12} md={6}>
                                    <div className="single-team">
                                    <div className="img-area">
                                        <img src={val.photo} className="img-responsive" alt=""/>
                                        <div className="social">
                                        <ul className="list-inline" style={{marginTop:"60px"}}>
                                            {
                                                loadLinks(val).map((val)=>{
                                                    return (
                                                        val
                                                    )
                                                })
                                            }
                                           
                                        </ul>
                                        </div>
                                    </div>
                                    <div className="img-text">
                                        <h5 className="text-center">{val.name}</h5>
                                        <p> <small> {val.email} </small> </p>
                                        <p className="mb-2"> <small> <strong> {val.speciality} </strong> </small> </p>  
                                                
                                      
                                        
                                    </div>
                                    </div>
                                </Col>

                             )
                         })
                    }
               
                    <Col lg={2}></Col>
                    </Row>

                    

                  
                    
                </Row>
                </Container>
                </div>
            
        </React.Fragment>
    )
}

export default DevelopmentTeam
