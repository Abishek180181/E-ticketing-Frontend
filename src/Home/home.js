import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import home_image from '../assets/logo/home_image.png'
import logo from '../assets/logo/home_image.png'
 
const home = () => {
    return (
        <>
            <Container fluid className="home__background">
                <Row>
                    <Col lg={1} sm={12} md={4}>
                        <a href="/overview">admin</a>
                    </Col>
                </Row>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={5} className="pt-5">
                        <h2 className="heading__1">Buy a ticket</h2>
                        <h2 className="heading__1">Online</h2>
                        <p className="pt-5 heading__2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos.</p>
                    </Col>
 
                    <Col lg={5} >
                        <img src={home_image} className="w-100"></img>
                    </Col>
 
                   
                </Row>
 
            </Container>
            <Container>
                <Row>
                    <Col lg={12} sm={12} className='pt-5 text-center'>
                        <h2 className="heading__1">Welcome to E-ticketing and Consultation</h2>
                    </Col>
                    <div className="mt-5"></div>
                    <Col lg={6} md={6} sm={12}>
                        <img src={logo} alt="merocare" className="w-100" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className="py-5">
                        <p className="heading__3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor 
                            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                            amet.</p>
                    </Col>
                    
                </Row>
                
            </Container>
 
        </>
    )
}
 
export default home