import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/logo/newlogo.png'
import {Link as Scrolling} from 'react-scroll'
import {FaArrowUp} from 'react-icons/fa';

const Footer = () => {
    let token = sessionStorage.getItem('token');
    return (
        <>
            <Container fluid style={{ background: "#f0f0f0" }} className="pt-4 footer">
                <Container className="p-3" >
                    <Row>
                        <Col lg={4} sm={12} md={6}>
                            <img src={logo} className="w-75" alt="mercare"/>
                        </Col>
                        <Col className="text-start footer__nav__container" lg={4} sm={12} md={6}>
                            <ul className="list-group">
                                <li className="mt-0 list-group-item"> <Link to="/frequently-asked-questions" className="footer__nav"> <i class="fas fa-circle"></i>FAQs</Link></li>
                                {/* <li className=" list-group-item">  <Link to="/developmentTeam" className="footer__nav mt-2"> <i class="fas fa-circle"></i>Development Team</Link></li> */}
                                <li className="list-group-item"> <Link to="/terms&conditions" className=" footer__nav mt-2"><i class="fas fa-circle"></i>Terms & Conditions</Link></li>
                            </ul>

                        </Col>
                        {
                            token?
                            (
                                <></>
                            ):
                            (
                                <Col lg={4} sm={12} md={6}>
                                    <a href="/login" className="footer__nav">Staff Login</a>
                                </Col>
                            )
                        }
                        

                    </Row>


                </Container>
                <Row>
                    <Col lg={12} sm={12} md={12} className="pt-2 footer__trademark">
                    <div className="upperBox">
                          <Scrolling to="mainHeader" smooth={true} duration={200}  style={{cursor:"pointer"}}><FaArrowUp style={{color:"white",fontSize:"32px"}}/></Scrolling>  
                        </div> 
                        <p className="text-center">Developed By: Tech Innovate Group. Copyright &copy; {new Date().getFullYear()} Tech Innovate E-ticketing and Consulation</p>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;
